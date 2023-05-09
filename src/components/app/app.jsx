import React from "react";
import AppHeader from "../AppHeader/AppHeader.jsx";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor.jsx";
import BurgerIngrediens from "../BurgerIngredients/BurgerIngredients.jsx";
import { api } from "../../utils/Api.js";

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
        <BurgerConstructor ingredients={state.data} />
      </main>
    </>
  );
};

export default App;
