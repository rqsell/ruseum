import React, { useState } from 'react';


function Music(props) {
    const [play, setPlay]= useState(false)
    const [pause, setPause]= useState(true)
   let  url = "./rememberlove.mp3";
    let audio = new Audio(url);
   const start = () => {
        setPlay(true);
         setPause(false)
         audio.play();
        }
        const stop = () => {
            setPlay(false);
             setPause(true)
             audio.pause();
            }
    return (
        <div className='musicbox'>
        <img src='./play.png' className='musicbuttons' onClick= {start}/>
        <img src= "./pause.png" className='musicbuttons' onClick= {stop}/>

            
        </div>
    );
}
export default Music;
