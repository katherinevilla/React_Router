import react from 'react';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
//import './App.css';
import Inicio from './Components/Inicio';
import Nosotros from './Components/Nosotros';
import Contacto from './Components/Contacto';

function App() {

  return (
    <Router>

   <div className = "container mt-5">
   <div className = "btn-group">
   <Link to= "/" className = "btn btn-dark">
     Inicio
   </Link>
   <Link to = "/Contacto" className = "btn btn-dark">
     Contacto
   </Link>
   <Link to = "Nosotros" className = "btn btn-dark">
     Nosotros
   </Link>
   </div>
   <Switch>
<Route path= "/" exact>
    <Inicio/>
  </Route>
  <Route path= "/contacto">
    <Contacto/>
    </Route>
  <Route path= "/nosotros">
    <Nosotros/>
    </Route>
  
</Switch>
</div>
</Router>
);
}

export default App;
