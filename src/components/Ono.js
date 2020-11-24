import React, { useState } from "react";
import Music from "./Music";
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

function Ono(props) {
  const [langOno, setLangOno] = useState("en");

  // On Change Function to change language for the page
  const onLangChangeOno = (e) => {
    setLangOno(e.target.value);
    counterpart.setLocale(e.target.value);
  };
  return (
    <div className="artpage">
      <Link to="/Explore" style={{ textDecoration: "none" }}>
        <div className="explore">
          <Translate content="copy.arrow" unsafe={true} />

          <img className="arrow" src="./arrow.png" />
        </div>
      </Link>

      {/* Language Selector */}
      <div className="langBox">
        <span>Select Language</span>
        <select value={langOno} onChange={onLangChangeOno} className="lang">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="cr">Haitian Creole</option>
        </select>
      </div>

      {/* Page with Translate Components */}
      <div className="artbox">
        <Translate content="copy.titleOno" component="h1" unsafe={true} />
        <img className="artwork" src="./cloudpiece.jpg" />
        <h2> Yoko Ono</h2>
        <Translate content="copy.descriptionOno" unsafe={true} />
        <Translate
          content="copy.aboutartisth1Ono"
          component="h2"
          unsafe={true}
        />
        <Translate content="copy.aboutartistOno" unsafe={true} />
        <Translate content="copy.exploreh2Ono" component="h2" unsafe={true} />

        <span>
          <ul>
            <Translate
              content="copy.exploreli1Ono"
              component="li"
              unsafe={true}
            />
            <Translate
              content="copy.exploreli2Ono"
              component="li"
              unsafe={true}
            />
          </ul>
        </span>

        {/* Music Player */}
        <Music />
      </div>
    </div>
  );
}

export default Ono;
