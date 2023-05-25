import Style from "./app.module.sass";
import React, { useState } from "react";
import AppHeader from "../app-header/app-header.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import BurgerIngrediens from "../burger-ingredients/burger-ingredients.jsx";
import API from "../../utils/api.js";
import Context from "../../services/contexts/app-context.js";
import priceReducer from "../../services/reducers/priceReducer.js";
import done from "../../images/done.svg";

const App = () => {
  const [data, setData] = React.useState({
    success: false,
    ingredients: [],
    isLoading: false,
  });

  const [ingredients, setIngredients] = React.useState({
    buns: [],
    sauces: [],
    mains: [],
  });

  const [burger, setBurger] = React.useState({
    bun: {
      image: done,
      name: "Добавьте булку",
      price: 0,
    },
    others: [],
  });

  const [order, setOrder] = React.useState({
    name: "",
    number: 0,
    success: false,
  });

  const [counter, setCounter] = React.useState(0);

  const [price, setPrice] = React.useReducer(priceReducer, { total: 0 });

  React.useEffect(() => {
    setData({ ...data, isLoading: true });
    API.getData()
      .then((response) => {
        setData({
          success: true,
          ingredients: response.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        API.responseError(error);
        setData({ ...data, isLoading: false });
      });
  }, []);

  React.useEffect(() => {
    setIngredients({
      buns: data.ingredients.filter((i) => i.type === "bun"),
      sauces: data.ingredients.filter((i) => i.type === "sauce"),
      mains: data.ingredients.filter((i) => i.type === "main"),
    });
  }, [data]);

  const ContextValue = React.useMemo(
    () => ({
      burger,
      counter,
      data,
      ingredients,
      order,
      price,
      setBurger,
      setCounter,
      setData,
      setIngredients,
      setOrder,
      setPrice,
    }),
    [
      burger,
      data,
      ingredients,
      order,
      price,
      setBurger,
      setData,
      setIngredients,
      setOrder,
      setPrice,
    ]
  );

  return (
    <Context.Provider value={ContextValue}>
      <AppHeader />
      <main className={Style.main}>
        <BurgerIngrediens />
        <BurgerConstructor />
      </main>
    </Context.Provider>
  );
};

export default App;
