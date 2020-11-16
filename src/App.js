import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Work1 from './components/Work1'
import {BrowserRouter, Switch, Route, NavLink, useHistory } from "react-router-dom"; 


function App() {
  return (
  <div>
<BrowserRouter>
  <Switch>
   <Route exact path="/" render={(props) => <Home {...props} />} />
   <Route exact path="/Work1" render={(props) => <Work1 {...props} />} />
  </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;
