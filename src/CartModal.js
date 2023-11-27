import "./CartModal.css";

import React, { useState,useEffect,useContext } from "react";
import {LanguageContext} from "./App.js"
import languages from "./languages.json"

const CartModal = (props) => {
  const language = useContext(LanguageContext);
  const onClickCloseCartHandler = () => {
    props.onClickClose();
  };

  const onClickOrderHandler = () => {
    props.onClickClose();
    props.onOrder();
  };

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totaly = 0;
    props.items.map((item) => {
      totaly += item.pret * item.cantitate;
    });

    setTotal(totaly);
  }, [props.items]);

  const onIncrementCartHandler = (clickedItem) => {
    props.onIncrementCart(clickedItem, true);
  };

  const onDecrementCartHandler = (clickedItem) => {
    props.onIncrementCart(clickedItem, false);
  };

  return (
    <div>
      <div className="backdrop"></div>
      <div id="modal">
        <header className="header">
          <h2>Total</h2>
        </header>
        <div className="content">
          <ul>
            {props.items.map((item) => (
              <li onClick={() => onDecrementCartHandler(item)}>
                {item.nume} {item.pret} x{item.cantitate}
              </li>
            ))}
          </ul>
          <div>Total {total}</div>
        </div>
        <footer className="actions">
          <button id="button-modal" onClick={onClickCloseCartHandler}>
          {languages.close[language]}
          </button>
          <button id="button-comanda" onClick={onClickOrderHandler}>
          {languages.order[language]}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default CartModal;
