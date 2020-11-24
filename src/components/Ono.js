import React, { useState } from 'react';
import Music from './Music'
import { Link } from "react-router-dom";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import enOno from './languages/English';
import esOno from './languages/Spanish';
import crOno from './languages/HaitianCreole';


counterpart.registerTranslations('enOno', enOno);
    counterpart.registerTranslations('esOno', esOno);
    counterpart.registerTranslations('crOno', crOno);
    
    counterpart.setLocale('enOno');
function Ono(props) {
    const [langOno, setLangOno]= useState('enOno')

    
    
    const onLangChangeOno = (e) => {
         setLangOno(e.target.value)
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
        <select value={langOno} onChange={onLangChangeOno} className='lang'>
            <option value='enOno'>English</option>
            <option value='esOno'>Spanish</option>
            <option value='crOno'>Haitian Creole</option>
        </select>
        </div>
           <div className= 'artbox'>
           <Translate content ='copy.titleOno' component='h1' unsafe={true}/>
       
               <img className='artwork' src= './cloudpiece.jpg'/>
              
               <h2> Yoko Ono</h2>
               <Translate content ='copy.descriptionOno'  unsafe={true}/>
               <Translate content ='copy.aboutartisth1Ono' component='h2' unsafe={true}/>
               <Translate content ='copy.aboutartistOno'  unsafe={true}/>
               <Translate content ='copy.exploreh2Ono' component='h2' unsafe={true}/>

<span>
    <ul>
    <Translate content ='copy.exploreli1Ono' component='li' unsafe={true}/>
    <Translate content ='copy.exploreli2Ono' component='li' unsafe={true}/>    
    </ul>
</span>
<Music/>
           </div>
          
           
        </div>
    );
}

export default Ono;