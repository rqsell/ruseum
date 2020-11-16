import React, { useState } from 'react';
import QrReader from 'react-qr-reader'
import {Switch, Route, NavLink, useHistory } from "react-router-dom";

function Home(props) {
    const [open, setOpen]= useState(false)
    console.log(open)
    return (
        <div className='page'>
        <div className='head'>
            <img src= "./Ruseum.png" alt="icon" class="icon"></img>
            </div>
            <div className='body'>
                <h2> Get started</h2>
              <br></br>
                <span>Art is all around us... even on your phones. Click the icon to get started</span>
                <img src = '/magnifyingglass.png' alt= 'glass' className='glass'  onClick={() => setOpen(!open) }/>
          {open ?  <QrReader
          delay={300}
        // className='invisible'
        // id={open ? "clickedglass" : ""}
          style={{ width: '25%' }}
        /> : null}
                
            </div>
           
        </div>
        
    );
}

export default Home;