import React from "react";
import AppHeader from "../app-header/app-header.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import BurgerIngrediens from "../burger-ingredients/burger-ingredients.jsx";
import { api } from "../../utils/_api.js";

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
