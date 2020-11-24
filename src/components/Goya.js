import React, { useState } from "react";
import { Link } from "react-router-dom";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import en from "./languages/English";
import es from "./languages/Spanish";
import cr from "./languages/HaitianCreole";

// Declaring Language Variables
counterpart.registerTranslations("en", en);
counterpart.registerTranslations("es", es);
counterpart.registerTranslations("cr", cr);

// Setting Page Default Language
counterpart.setLocale("en");

function Goya(props) {
  const [langGoya, setLangGoya] = useState("en");

  // On Change Function to change language for the page
  const onLangChangeGoya = (e) => {
    setLangGoya(e.target.value);
    counterpart.setLocale(e.target.value);
  };
  return (
    <div className="artpage">
      <Link to="/Explore" style={{ textDecoration: "none" }}>
        <div className="explore">
          <Translate content="Goya.arrow" unsafe={true} />
          <img className="arrow" src="./arrow.png" />
        </div>
      </Link>

      {/* Language Selector */}
      <div className="langBox">
        <span>Select Language</span>
        <select value={langGoya} onChange={onLangChangeGoya} className="lang">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="cr">Haitian Creole</option>
        </select>
      </div>

      {/* Page with Translate Components */}
      <div className="artbox">
        <Translate content="Goya.title" component="h1" unsafe={true} />
        <img className="artwork" src="./goya.jpg" />

        <h2> Francisco de Goya y Lucientes</h2>
        <Translate content="Goya.description" unsafe={true} />
        <Translate content="Goya.aboutartisth1" component="h2" unsafe={true} />
        <Translate content="Goya.aboutartist" unsafe={true} />

        <Translate content="Goya.exploreh2" component="h2" unsafe={true} />
        <span>
          <ul>
            <Translate content="Goya.exploreli1" component="li" unsafe={true} />
            <Translate content="Goya.exploreli2" component="li" unsafe={true} />
          </ul>
        </span>
      </div>
    </div>
  );
}

export default Goya;
