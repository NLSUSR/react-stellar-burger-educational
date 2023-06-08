import Style from "./app.module.sass";
import React from "react";
import AppHeader from "../app-header/app-header.jsx";
import { DndProvider as DnD } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import BurgerIngrediens from "../burger-ingredients/burger-ingredients.jsx";
import API from "../../utils/api.js";
import rootActions from "../../services/actions/root-action";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(rootActions.data.request());
    API.getData()
      .then((response) => {
        dispatch(rootActions.data.success(response.data));
      })
      .catch((e) => {
        dispatch(rootActions.data.failed(e));
        API.responseError(e);
      });
  }, [dispatch]);

  return (
    <>
      <AppHeader />
      <DnD backend={HTML5Backend}>
        <main className={Style.main}>
          <BurgerIngrediens />
          <BurgerConstructor />
        </main>
      </DnD>
    </>
  );
};

export default App;
