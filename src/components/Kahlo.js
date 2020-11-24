import React, { useState } from 'react';
import { Link } from "react-router-dom";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import enKahlo from './languages/English';
import esKahlo from './languages/Spanish';
import crKahlo from './languages/HaitianCreole';


counterpart.registerTranslations('enKahlo', enKahlo);
counterpart.registerTranslations('esKahlo', esKahlo);
counterpart.registerTranslations('crKahlo', crKahlo);
counterpart.setLocale('enKahlo');

function Kahlo(props) {
    const [langKahlo, setLangKahlo] = useState('enKahlo')


    const onLangChangeKahlo = (e) => {
        setLangKahlo(e.target.value)
        counterpart.setLocale(e.target.value);
    } 
    return (
        <div className='artpage'>
         <Link to='/Explore' style={{ textDecoration: "none" }}>
        <div className='explore'>
        <Translate content ='copy.arrowKahlo'  unsafe={true}/>
         <img className='arrow' src='./arrow.png'/></div>
        </Link>
        <div className='langBox'>
        <span>Select Language</span>
        <select value={langKahlo} onChange={onLangChangeKahlo} className='lang'>
            <option value='enKahlo'>English</option>
            <option value='esKahlo'>Spanish</option>
            <option value='crKahlo'>Haitian Creole</option>
        </select>
        </div>
        <div className= 'artbox'>
        <Translate content ='copy.titleKahlo' component='h1' unsafe={true}/>
            <img className='artwork' src= './kahlo.jpg'/>
            <h2> Frida Khalo</h2>
            <Translate content ='copy.descriptionKahlo'  unsafe={true}/>
            <Translate content ='copy.aboutartisth1Kahlo' component='h2' unsafe={true}/>
            <Translate content ='copy.aboutartistKahlo' unsafe={true}/>
            

            <Translate content ='copy.funfactsKahlo' component='h2' unsafe={true}/>        
<span>
 <ul>
 <Translate content ='copy.funfactsli1Kahlo' component='li' unsafe={true}/>
 <Translate content ='copy.funfactsli2Kahlo' component='li' unsafe={true}/>
 <Translate content ='copy.funfactsli3Kahlo' component='li' unsafe={true}/>
  
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
    );
}

export default Kahlo;