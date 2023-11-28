import React, { useState, useContext } from "react";
import "./Footer.css";
import { LanguageContext } from "../../App.js";
import languages from "../../languages.json";

const Footer = () => {
  const language = useContext(LanguageContext);

  return (
    <div id="footerDiv">
      <p id="footerP">
        {" "}   
        <i>Contact: 0738 526 856</i> <br></br>
        <i> {languages.address[language]}: Strada Alexandru Vaida Voevod 53, Cluj-Napoca 400592 </i>
        <br></br>
        <i> {languages.working_hours[language]}: 09:00 - 22:00 </i> <br></br>
      </p>
    </div>
  );
};

export default Footer;
