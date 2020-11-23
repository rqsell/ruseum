import React, { useState } from 'react';
import { Link } from "react-router-dom";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './languages/Krater/KraterEN';
import es from './languages/Krater/KraterES';
import cr from './languages/Krater/KraterCR';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('es', es);
counterpart.registerTranslations('cr', cr);

counterpart.setLocale('en');

function Krater(props) {
    const [lang, setLang]= useState('en')

    const onLangChange = (e) => {
        setLang(e.target.value)
        counterpart.setLocale(e.target.value);
    } 
    return (
        <div>
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
            <img className='artwork' src= './greekpottery.jpg'/>
            <Translate content ='copy.title' component='h2' unsafe={true}/> 
            <Translate content ='copy.description'  unsafe={true}/>

            <Translate content ='copy.funfacts' component='h2' unsafe={true}/>  
<span>
 <ul>
 <Translate content ='copy.funfactsli1' component='li' unsafe={true}/>
 </ul>
 </span>
 <Translate content ='copy.exploreh2' component='h2' unsafe={true}/>  
<span>
 <ul>
 <Translate content ='copy.exploreli1' component='li' unsafe={true}/>
  
 </ul>
</span>
</div>
</div>
            
        </div>
    );
}

export default Krater;