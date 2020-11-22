import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import Explore from './components/Explore'
import Ono from './components/Ono'
import Kahlo from './components/Kahlo'
import Krater from './components/Krater'
import Goya from './components/Goya'
import QRCodes from "./components/QRCodes"
import React, { useState } from 'react';
import {BrowserRouter, Switch, Route, NavLink, useHistory } from "react-router-dom"; 
import GetStarted from './components/GetStarted';


function App() {
  const [open, setOpen] = useState(false);
  return (
   
  <div>
   
<BrowserRouter>
<div className='head'>
  
            <img src= "./Ruseum.png" alt="icon" className="icon" />

          
            <nav role='navigation'>
  <div id="menuToggle">
            <input type="checkbox" onClick={() => setOpen(!open)}/>

            <span></span>
            <span></span>
           <span></span>

            <ul className="hamburgerMenu" id={open ? "clickedmenu" : ""}>
           
          {/* <div className="x" onClick={() => setOpen(!open)}>
            X
          </div> */}
          <Link to="/" style={{ textDecoration: "none" }} onClick={() => setOpen(!open)}>
            <li>Get Started</li>
       </Link>
       <Link to="/Explore" style={{ textDecoration: "none" }} onClick={() => setOpen(!open)}>
            <li>Explore</li>
   </Link>
   <Link to="/QRCodes" style={{ textDecoration: "none" }} onClick={() => setOpen(!open)}>
            <li>QR Codes</li>
      </Link>
       
      </ul>
        </div>
        </nav>
      
      
            </div>
  <Switch>
   <Route exact path="/" render={(props) => <GetStarted {...props} />} />
   <Route exact path="/Explore" render={(props) => <Explore {...props} />} />
   <Route exact path="/QRCodes" render={(props) => <QRCodes {...props} />} />
   <Route exact path="/Ono" render={(props) => <Ono {...props} />} />
   <Route exact path="/Kahlo" render={(props) => <Kahlo {...props} />} />
   <Route exact path="/Krater" render={(props) => <Krater {...props} />} />
   <Route exact path="/Goya" render={(props) => <Goya {...props} />} />
   
  </Switch>
  </BrowserRouter>
  </div>
  );
}

export default App;
