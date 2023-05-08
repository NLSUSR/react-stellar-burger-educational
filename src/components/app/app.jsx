import React from "react";
import PropTypes from "prop-types";
import AppHeader from "../AppHeader/AppHeader.jsx";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.jsx";
import BurgerIngrediens from "../BurgerIngredients/BurgerIngredients.jsx";
import { api } from "../../utils/Api.js";
import burger from "../../utils/burger.json";
import { ingredientPropType } from "../../utils/prop-types.js";

const App = () => {
  const [state, setState] = React.useState({
    success: false,
    data: [],
    isLoading: false,
  });

  const getData = () => {
    setState({ ...state, isLoading: true });
    api
      .getData()
      .then((response) =>
        setState({ success: true, data: response.data, isLoading: false })
      )
      .catch((error) => {
        api.responseError(error);
        setState({ ...state, isLoading: false });
      });
  };

  React.useEffect(() => getData(), []);

  return (
    <>
      <AppHeader />
      <main className="main">
        <BurgerIngrediens ingredients={state.data} />
        <BurgerConstructor ingredients={burger} />
      </main>
    </>
  );
};

[BurgerIngrediens, BurgerConstructor].forEach(item => {
  item.propTypes = {
    ingridients: PropTypes.arrayOf(ingredientPropType.isRequired),
  }
});

export default App;
