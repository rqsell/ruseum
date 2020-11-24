import React, { useState } from 'react';
import { Link } from "react-router-dom";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import enGoya from './languages/English';
import esGoya from './languages/Spanish';
import crGoya from './languages/HaitianCreole'

counterpart.registerTranslations('enGoya', enGoya);
counterpart.registerTranslations('esGoya', esGoya);
counterpart.registerTranslations('crGoya', crGoya);
counterpart.setLocale('enGoya');

function Goya(props) {
    const [langGoya, setLangGoya]= useState('enGoya')

    const onLangChangeGoya = (e) => {
        setLangGoya(e.target.value)
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
        <select value={langGoya} onChange={onLangChangeGoya} className='lang'>
            <option value='enGoya'>English</option>
            <option value='esGoya'>Spanish</option>
            <option value='crGoya'>Haitian Creole</option>
        </select>
        </div>
        <div className= 'artbox'>
        <Translate content ='copy.title' component='h1' unsafe={true}/>
            <img className='artwork' src= './goya.jpg'/>
           
            <h2> Francisco de Goya y Lucientes</h2>
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
</div>
</div>
    );
}

export default Goya