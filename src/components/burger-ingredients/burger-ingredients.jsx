import Style from "./burger-ingredients.module.sass";
import AnchorMenu from "../util-components/anchor-menu/anchor-menu.jsx";
import Ingredients from "../util-components/ingredients/ingredients.jsx";
import React from "react";
import Context from "../../services/contexts/app-context";

const BurgerIngredients = () => {
  const { ingredients } = React.useContext(Context);

  return (
    <section className={Style.container}>
      <h1 className={Style.title}>{"Соберите бургер"}</h1>
      <AnchorMenu
        tabs={[
          { value: "Булки", name: "Булки", id: "#buns" },
          { value: "Соусы", name: "Соусы", id: "#sauce" },
          { value: "Начинки", name: "Начинки", id: "#main" },
        ]}
      />
      <div className={`${Style.ingredients} custom-scroll`}>
        <Ingredients id={"buns"} title={"Булки"} array={ingredients.buns} />
        <Ingredients id={"sauce"} title={"Соусы"} array={ingredients.sauces} />
        <Ingredients id={"main"} title={"Начинки"} array={ingredients.mains} />
      </div>
    </section>
  );
};

export default BurgerIngredients;
