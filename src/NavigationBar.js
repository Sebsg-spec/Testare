import "./NavigationBar.css";
import React, { useState, useContext } from "react";
import { LanguageContext } from "./App.js";
import languages from "./languages.json";
import CartModal from "./CartModal";
import cart from "./cart.jpg";

const NavigationBar = (props) => {
  const [hide, setHide] = useState(true);
  const language = useContext(LanguageContext);

  const onClickCartModalHandler = () => {
    setHide((prev) => !prev);
  };

  const onClickOrderModalHandler = () => {
    setHide(true);
    props.onOrder();
  };

  return (
    <div>
      {!hide && (
        <CartModal
          items={props.cartItems}
          onClickClose={onClickCartModalHandler}
          onOrder={onClickOrderModalHandler}
          onIncrementCart={props.onIncrement}
        />
      )}
      <div id="navigation">
        <h2 id="title">GRANDE</h2>
        <form>
          <select value={props.language} onChange={props.onSelectLanguage}>
            <option value="english">English</option>
            <option value="romanian">Romana</option>
            <option value="spanish">Espanol</option>
          </select>
        </form>
        <div id="cart-container" onClick={onClickCartModalHandler}>
          <h5>{languages.cart_title[language]}</h5>
          <img src={cart} alt="cart" id="cart"></img>
          <div id="cart-number-container">
            <h5>{props.cartAmount}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
