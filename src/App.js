import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import {BrowserRouter, Switch, Route, NavLink, useHistory } from "react-router-dom"; 


function App() {
  return (
  <div>
<BrowserRouter>
  <Switch>
   <Route exact path="/" render={(props) => <Home {...props} />} />
  </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;
