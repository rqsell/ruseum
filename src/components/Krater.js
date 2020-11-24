import React, { useState } from 'react';
import { Link } from "react-router-dom";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import enKrater from './languages/English';
import esKrater from './languages/Spanish';
import crKrater from './languages/HaitianCreole';

counterpart.registerTranslations('enKrater', enKrater);
counterpart.registerTranslations('esKrater', esKrater);
counterpart.registerTranslations('crKrater', crKrater);

counterpart.setLocale('enKrater');

function Krater(props) {
    const [langKrater, setLangKrater]= useState('enKrater')

    const onLangChangeKrater = (e) => {
        setLangKrater(e.target.value)
        counterpart.setLocale(e.target.value);
    } 
    
    return (
        <div>
         <div className='artpage'>
         <Link to='/Explore' style={{ textDecoration: "none" }}>
        <div className='explore'>
        <Translate content ='copy.arrowKrater'  unsafe={true}/>
        <img className='arrow' src='./arrow.png'/></div>
        </Link>
        <div className='langBox'>
        <span>Select Language</span>
        <select value={langKrater} onChange={onLangChangeKrater} className='lang'>
            <option value='enKrater'>English</option>
            <option value='esKrater'>Spanish</option>
            <option value='crKrater'>Haitian Creole</option>
        </select>
        </div>
        <div className= 'artbox'>
        <Translate content ='copy.titleKrater' component='h1' unsafe={true}/>
            <img className='artwork' src= './greekpottery.jpg'/>
            <Translate content ='copy.titleKrater' component='h2' unsafe={true}/> 
            <Translate content ='copy.descriptionKrater'  unsafe={true}/>

            <Translate content ='copy.funfactsKrater' component='h2' unsafe={true}/>  
<span>
 <ul>
 <Translate content ='copy.funfactsli1Krater' component='li' unsafe={true}/>
 </ul>
 </span>
 <Translate content ='copy.exploreh2Krater' component='h2' unsafe={true}/>  
<span>
 <ul>
 <Translate content ='copy.exploreli1Krater' component='li' unsafe={true}/>
  
 </ul>
</span>
</div>
</div>
            
        </div>
    );
}

export default Krater;