import React, { useState, useContext } from "react";
import "./Footer.css";
import { LanguageContext } from "../../App.js";
import languages from "../../languages.json";

const Footer = () => {
  const language = useContext(LanguageContext);

  return (
    <div id="footerDiv" style={{backgroundColor:'black'}}>
      <p id="footerP">
        {" "}   
        <i>Contact: 0748 575 302</i> <br></br>
        <i> {languages.address[language]}: Str Avram Iancu 21, Cluj Napoca 400000 </i>
        <br></br>
        <i> {languages.working_hours[language]}: 10:00 - 20:00 </i> <br></br>
      </p>
    </div>
  );
};

export default Footer;
