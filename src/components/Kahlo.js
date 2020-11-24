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
          <Translate content="Kahlo.arrowKahlo" unsafe={true} />
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
        <Translate content="Kahlo.title" component="h1" unsafe={true} />
        <img className="artwork" src="./kahlo.jpg" />
        <h2> Frida Khalo</h2>
        <Translate content="Kahlo.description" unsafe={true} />
        <Translate content="Kahlo.aboutartisth1" component="h2" unsafe={true} />
        <Translate content="Kahlo.aboutartist" unsafe={true} />

        <Translate content="Kahlo.funfacts" component="h2" unsafe={true} />
        <span>
          <ul>
            <Translate
              content="Kahlo.funfactsli1"
              component="li"
              unsafe={true}
            />
            <Translate
              content="Kahlo.funfactsli2"
              component="li"
              unsafe={true}
            />
            <Translate
              content="Kahlo.funfactsli3"
              component="li"
              unsafe={true}
            />
          </ul>
        </span>
        <Translate content="Kahlo.exploreh2" component="h2" unsafe={true} />
        <span>
          <ul>
            <Translate
              content="Kahlo.exploreli1"
              component="li"
              unsafe={true}
            />
          </ul>
        </span>
      </div>
    </div>
  );
}

export default Kahlo;
