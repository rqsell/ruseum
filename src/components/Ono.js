import React from 'react';

function Work1(props) {
    return (
        <div className='artpage'>
           <div className= 'artbox'>
               <img className='artwork' src= './cloudpiece.jpg'/>
               <h1>Cloud Piece</h1>
               <h2> Yoko Ono</h2>
           </div>
          
           <iframe src="https://drive.google.com/file/d/1Qu-Q3PGmLY2PcecPRcS2h75sXe26C1nN/preview" width="640" height="480"></iframe>
        </div>
    );
}

export default Work1;