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

function Krater(props) {
  const [langKrater, setLangKrater] = useState("en");

  // On Change Function to change language for the page
  const onLangChangeKrater = (e) => {
    setLangKrater(e.target.value);
    counterpart.setLocale(e.target.value);
  };

  return (
    <div>
      <div className="artpage">
        <Link to="/Explore" style={{ textDecoration: "none" }}>
          <div className="explore">
            <Translate content="Krater.arrow" unsafe={true} />
            <img className="arrow" src="./arrow.png" />
          </div>
        </Link>

        {/* Language Selector */}
        <div className="langBox">
          <span>Select Language</span>
          <select
            value={langKrater}
            onChange={onLangChangeKrater}
            className="lang"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="cr">Haitian Creole</option>
          </select>
        </div>
        {/* Page with Translate Components */}
        <div className="artbox">
          <Translate content="Krater.title" component="h1" unsafe={true} />
          <img className="artwork" src="./greekpottery.jpg" />
          <Translate content="Krater.artist" component="h2" unsafe={true} />
          <Translate content="Krater.description" unsafe={true} />

          <Translate content="Krater.funfacts" component="h2" unsafe={true} />
          <span>
            <ul>
              <Translate
                content="Krater.funfactsli1"
                component="li"
                unsafe={true}
              />
            </ul>
          </span>
          <Translate content="Krater.exploreh2" component="h2" unsafe={true} />
          <span>
            <ul>
              <Translate
                content="Krater.exploreli1"
                component="li"
                unsafe={true}
              />
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Krater;
