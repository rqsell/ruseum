import React, { useState } from 'react';
import { Link } from "react-router-dom";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
counterpart.registerTranslations('en', {
        copy:{
        arrow: 'Keep Exploring',
        title: 'Me and my Parrots, <i>1941</i>',
        description: 'Kahlo was most famous for creating powerful self-portraits showcasing her strong features. Here she paints herself sitting with her pet parrots. Kahlo suffered a near fatal bus accident and she had health complications for the rest of her life. Many interpret her self-portraits as a way to be seen and acknowledged. Here Kahlo stares boldly at the viewer, commanding their gaze.',
        aboutartisth1: 'About the Artist',
        aboutartist: 'Magdalena Carmen Frida Kahlo y Calderón, popularly known as Frida Kahlo was a Mexican painter who lived from 1907-1954. She began to paint at the age of 18 during her recovery from a near fatal bus accident. Her famous self-portraits explore her life and identity, influenced by her life-long physical pain and her complicated marriage with celebrated artist Diego Rivera.',
        exploreli1: 'What is your favorite and least favorite part of the Duchess’s outfit?',
        exploreli2:'Why do you think Goya painted the background the way he did?',
        }
});
function Kahlo(props) {
    return (
        <div className='artpage'>
         <Link to='/Explore' style={{ textDecoration: "none" }}>
        <div className='explore'>
        <Translate content ='copy.arrow'  unsafe={true}/>
         <img className='arrow' src='./arrow.png'/></div>
        </Link>
        <div className= 'artbox'>
        <Translate content ='copy.title' component='h1' unsafe={true}/>
            <img className='artwork' src= './kahlo.jpg'/>
            <h2> Frida Khalo</h2>
            <Translate content ='copy.description'  unsafe={true}/>
            <Translate content ='copy.aboutartisth1' component='h2' unsafe={true}/>
            <Translate content ='copy.aboutartist' unsafe={true}/>
            

<h2>Fun Facts!</h2>
<span>
 <ul>
     <li>Frida owned the following pets: chickens, sparrows, macaws and parakeets, Bonito the parrot, a fawn named Granizo, spider monkeys Fulang Chang and Caimito de Guayabal, the empirically-named eagle Gertrudis Caca Blanca, and hairless Xoloitzcuintli dogs with ancient Aztec lineage.</li>
     <li> Frida and Diego lived in the famous Casa Azul designed by  architect Juan O’Gorman. The compound has two houses, one white and one blue, joined by a bridge. </li>
     <li> Kahlo wore traditional Tehuana dress to show alliance to indigenous citizens who were discriminated against. This style included her iconic full skirts, embroidered blouses and regal coiffure associated with a matriarchal society from the Isthmus of Tehuantepec in Oaxaca, Mexico.</li>
     <li> She is known for her iconic and  unique beauty.</li>
  
 </ul>
 </span>
<h2>Explore!</h2>
<span>
 <ul>
     <li>Why do you think Frida painted herself with her parrots? If you could be painted with an animal, which one would you choose?</li>
  
 </ul>
</span>
</div>
</div>
    );
}

export default Kahlo;