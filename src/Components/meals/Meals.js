import React, { useState, useContext } from "react";
import "./Meals.css";
import { LanguageContext } from "../../App.js";
import languages from "../../languages.json";
import currencies from "../../currencies.json";

const Meals = (props) => {
  const language = useContext(LanguageContext);

  const [enteredAmount, setEnteredAmount] = useState();

  const onChangeAmountHandler = (e) => {
    e.preventDefault();
    setEnteredAmount(e.target.value);
  };

  const onClickAddHandler = (e) => {
    props.onAddAmount({
      nume: props.title,
      pret: props.price,
      cantitate: enteredAmount,
    });
    setEnteredAmount("");
  };

  return (
    <div className="meals-container">
      <div>
        <h2>{props.title}</h2>
        <div>
          <i>{props.description}</i>
        </div>
        <div className="meals-price-container">{currencies[language].sign}{props.price}</div>
      </div>
      <div className="meals-amount-container">
        {languages.amount[language]}
        <input
          type="text"
          onChange={onChangeAmountHandler}
          value={enteredAmount}
        ></input>
      </div>
      <button className="meals-button" onClick={onClickAddHandler}>
        +{languages.add[language]}
      </button>
    </div>
  );
};

export default Meals;
