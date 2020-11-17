import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import Home from './components/Home'
import Ono from './components/Ono'
import {BrowserRouter, Switch, Route, NavLink, useHistory } from "react-router-dom"; 


function App() {
  return (
  <div>
   
<BrowserRouter>
<div className='head'>
    <Link to= '/'>
            <img src= "./Ruseum.png" alt="icon" className="icon"></img>
            </Link>
            </div>
  <Switch>
   <Route exact path="/" render={(props) => <Home {...props} />} />
   <Route exact path="/Ono" render={(props) => <Ono {...props} />} />
  </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;
