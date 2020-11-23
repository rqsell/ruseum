import React, { useState } from 'react';
import Music from './Music'
import { Link } from "react-router-dom";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './languages/Ono/OnoEN';
import es from './languages/Ono/OnoES'
import cr from './languages/Ono/OnoCR'

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('es', es);
counterpart.registerTranslations('cr', cr);



function Ono(props) {
    const [lang, setLang]= useState('en')

    const onLangChange = (e) => {
         setLang(e.target.value)
         counterpart.setLocale(e.target.value);
     } 
    return (
        <div className='artpage'>
         <Link to='/Explore' style={{ textDecoration: "none" }}>
        <div className='explore'>
        <Translate content ='copy.arrow'  unsafe={true}/>
       
         <img className='arrow' src='./arrow.png'/></div>
        </Link>
        <div className='langBox'>
        <span>Select Language</span>
        <select value={lang} onChange={onLangChange} className='lang'>
            <option value='en'>English</option>
            <option value='es'>Spanish</option>
            <option value='cr'>Haitian Creole</option>
        </select>
        </div>
           <div className= 'artbox'>
           <Translate content ='copy.title' component='h1' unsafe={true}/>
       
               <img className='artwork' src= './cloudpiece.jpg'/>
              
               <h2> Yoko Ono</h2>
               <Translate content ='copy.description'  unsafe={true}/>
               <Translate content ='copy.aboutartisth1' component='h2' unsafe={true}/>
               <Translate content ='copy.aboutartist'  unsafe={true}/>
               <Translate content ='copy.exploreh2' component='h2' unsafe={true}/>

<span>
    <ul>
    <Translate content ='copy.exploreli1' component='li' unsafe={true}/>
    <Translate content ='copy.exploreli2' component='li' unsafe={true}/>    
    </ul>
</span>
<Music/>
           </div>
          
           
        </div>
    );
}

export default Ono;