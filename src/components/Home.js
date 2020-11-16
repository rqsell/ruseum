import React, { useState } from 'react';
import { Link } from "react-router-dom";
import QrReader from 'react-qr-reader'
import {Switch, Route, NavLink, useHistory } from "react-router-dom";

function Home(props) {
    const [open, setOpen]= useState(false)
    const [result, setResult]= useState('No result')
    console.log(open)

async function handleScan(data)  {
  if (data) {
    setResult({data})
  }
  console.log(result)
}
async function handleError(err) {
  console.error(err)
}
    return (
        <div className='page'>
        <div className='head'>
            <img src= "./Ruseum.png" alt="icon" className="icon"></img>
            </div>
            <div className='body'>
                <h2> Get started</h2>
              <br></br>
                <span>Art is all around us... even on your phones. Click the icon to get started</span>
                <img src = './magnifyingglass.png' alt= 'glass' className='glass'  onClick={() => setOpen(!open) }/>
         <div className= 'qrbox'>
          {open ? 
           <QrReader
          delay={300}
          facingMode='environment'
          onError = {handleError}
          onScan = {handleScan}
          style={{ width: '100%' }}
        /> : null}
     
      <a 
    target="_blank" href={result?.data} ><img src= './starrypicture.png' className= 'starrypicture'/></a>
           </div>
            </div>
           
        </div>
        
    );
}

export default Home;