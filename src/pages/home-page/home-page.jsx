import Style from "./home-page.module.sass";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngrediens from "../../components/burger-ingredients/burger-ingredients";
import rootActions from "../../services/store/actions/root-action";

import React from "react";
import { useDispatch } from "react-redux";
import { DndProvider as DnD } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const HomePage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(rootActions.link.default());
    dispatch(rootActions.link.constructor(true));
  }, [dispatch]);

  return (
    <section className={Style.container}>
      <DnD backend={HTML5Backend}>
        <main className={Style.content}>
          <BurgerIngrediens />
          <BurgerConstructor />
        </main>
      </DnD>
    </section>
  );
};

export default HomePage;
