import Style from "./burger-ingredients.module.sass";
import AnchorMenu from "../util-components/anchor-menu/anchor-menu.jsx";
import Ingredients from "../util-components/ingredients/ingredients.jsx";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types.js"
import React from "react";

const BurgerIngredients = ({ ingredients }) => {
  const [state, setState] = React.useState({
    buns: [],
    sauce: [],
    main: []
  })

  React.useEffect(() => {
    setState({
      buns: ingredients.filter(i => i.type === "bun"),
      sauce: ingredients.filter(i => i.type === "sauce"),
      main: ingredients.filter(i => i.type === "main")
    })
  }, [ingredients])

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
        <Ingredients id={"buns"} title={"Булки"} array={state.buns} />
        <Ingredients id={"sauce"} title={"Соусы"} array={state.sauce} />
        <Ingredients id={"main"} title={"Начинки"} array={state.main} />
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default BurgerIngredients;
