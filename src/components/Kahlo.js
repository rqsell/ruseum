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
counterpart.setLocale("enKahlo");

function Kahlo(props) {
  const [langKahlo, setLangKahlo] = useState("en");

  // On Change Function to change language for the page
  const onLangChangeKahlo = (e) => {
    setLangKahlo(e.target.value);
    counterpart.setLocale(e.target.value);
  };
  return (
    <div className="artpage">
      <Link to="/Explore" style={{ textDecoration: "none" }}>
        <div className="explore">
          <Translate content="copy.arrowKahlo" unsafe={true} />
          <img className="arrow" src="./arrow.png" />
        </div>
      </Link>

      {/* Language Selector */}
      <div className="langBox">
        <span>Select Language</span>
        <select value={langKahlo} onChange={onLangChangeKahlo} className="lang">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="cr">Haitian Creole</option>
        </select>
      </div>

      {/* Page with Translate Components */}
      <div className="artbox">
        <Translate content="copy.titleKahlo" component="h1" unsafe={true} />
        <img className="artwork" src="./kahlo.jpg" />
        <h2> Frida Khalo</h2>
        <Translate content="copy.descriptionKahlo" unsafe={true} />
        <Translate
          content="copy.aboutartisth1Kahlo"
          component="h2"
          unsafe={true}
        />
        <Translate content="copy.aboutartistKahlo" unsafe={true} />

        <Translate content="copy.funfactsKahlo" component="h2" unsafe={true} />
        <span>
          <ul>
            <Translate
              content="copy.funfactsli1Kahlo"
              component="li"
              unsafe={true}
            />
            <Translate
              content="copy.funfactsli2Kahlo"
              component="li"
              unsafe={true}
            />
            <Translate
              content="copy.funfactsli3Kahlo"
              component="li"
              unsafe={true}
            />
          </ul>
        </span>
        <Translate content="copy.exploreh2" component="h2" unsafe={true} />
        <span>
          <ul>
            <Translate content="copy.exploreli1" component="li" unsafe={true} />
          </ul>
        </span>
      </div>
    </div>
  );
}

export default Kahlo;
