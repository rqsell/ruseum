import React from 'react';

function Work1(props) {
    return (
        <div className='artpage'>
           <div className= 'artbox'>
           <h1>Cloud Piece</h1>
               <img className='artwork' src= './cloudpiece.jpg'/>
              
               <h2> Yoko Ono</h2>
               <span>Yoko Ono believed that the concept of an artwork could be just as powerful as the work itself. This is what led her to create her “Instructional Painting” series. She challenges the reader to complete, sometimes impossible tasks, in order to create the work. In Cloud Piece, she relies on the reader’s imagination to carry out the piece.
</span>
<h2>About the Artist</h2>
<span>
Born in 1933 in Tokyo City, Yoko Ono was a prominent artist, activist, and singer. She was a part of the Fluxus art movement in the 1960s and 1970s that focused on the process of creating rather than the finished work. She was famously married to John Lennon from The Beetles. 
</span>
<h2>Explore!</h2>
<span>
    <ul>
        <li>Use your imagination to carry out the piece. What does your garden look like with the clouds?</li>
        <li>Listen to one of  Yoko Ono’s songs below!</li>
    </ul>
</span>
 <iframe className='music' src="https://drive.google.com/file/d/1Qu-Q3PGmLY2PcecPRcS2h75sXe26C1nN/preview" width="500" height="50"></iframe>
           </div>
          
           
        </div>
    );
}

export default Work1;