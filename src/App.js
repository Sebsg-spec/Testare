import logo from "./logo.svg";
import "./App.css";
import languages from "./languages.json";
import currencies from "./currencies.json";
import NavigationBar from "./Components/navbar/NavigationBar.js";
import background from "./undercooked-burgers.jpeg";
import Meals from "./Components/meals/Meals.js";
import React, { useState, createContext, useEffect } from "react";
import CartModal from "./Components/cart/CartModal.js";
import Footer from "./Components/footer/Footer.js";
import cart from "./Components/cart/cart.jpg";

export const LanguageContext = createContext();

const App = () => {
  const [amount, setAmount] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("english");

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setMeals([
      {
        id: "meal1",
        title: "Hamburger",
        description: "Honey Buns, Burger Meat, Salad, Tomato, Burger Sauce",
        price: (12.00 * currencies[selectedLanguage].rate).toFixed(2),
      },
      {
        id: "meal2",
        title: "Cheeseburger",
        description: "Buns, Burger Meat, 2x Cedar, Salad, Tomato, Burger Sauce",
        price: (14.00 * currencies[selectedLanguage].rate).toFixed(2),
      },
      {
        id: "meal3",
        title: "Vegan Burger",
        description: "Buns, Vegan Meat, Salad, Tomato, Burger Sauce",
        price: (10.00 * currencies[selectedLanguage].rate).toFixed(2),
      },
      {
        id: "meal4",
        title: "Pizza Margherita",
        description: "Pizza Dough, Cheese, Tomato Sauce ",
        price: (16.00 * currencies[selectedLanguage].rate).toFixed(2),
      },
    ]);
  }, [selectedLanguage]);

  const [itemsInCart, setItemsInCart] = useState([]);

  const onAddAmountHandler = (entered) => {
    setItemsInCart((prev) => [...prev, entered]);
    setAmount((prev) => {
      return prev + parseInt(entered.cantitate);
    });
  };

  const onOrderHandler = (entered) => {
    setItemsInCart([]);
    setAmount(0);
  };

  const onSelectLanguageHandler = (selectedLanguage) => {
    setSelectedLanguage(selectedLanguage.target.value);
  };

  const incrementHandler = (selectedItem, increment) => {
    const replacedItems = itemsInCart.map((itemInCart) => {
      if (itemInCart.nume === selectedItem.nume && increment === true) {
        return {
          nume: itemInCart.nume,
          pret: itemInCart.pret,
          cantitate: parseInt(itemInCart.cantitate) + 1,
        };
      }
      if (itemInCart.nume === selectedItem.nume && increment === false) {
        return {
          nume: itemInCart.nume,
          pret: itemInCart.pret,
          cantitate: parseInt(itemInCart.cantitate) - 1,
        };
      }
      return itemInCart;
    });
    setItemsInCart(replacedItems);
  };

  return (
    <LanguageContext.Provider value={selectedLanguage}>
      <div className="App" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', height:'900px', width:'auto'}}>
        <NavigationBar
          language={selectedLanguage}
          cartAmount={amount}
          cartItems={itemsInCart}
          onIncrement={incrementHandler}
          onOrder={onOrderHandler}
          onSelectLanguage={onSelectLanguageHandler}
        />
        
        <div id="description-container">
          <h1>{languages.description_headline[selectedLanguage]}</h1>
          <p>{languages.description_body[selectedLanguage]}</p>
        </div>
        {meals.map(meal => <Meals
          title={meal.title}
          description={meal.description}
          price={meal.price}
          onAddAmount={onAddAmountHandler}
        />)}
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
