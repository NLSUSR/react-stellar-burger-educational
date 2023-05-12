import Style from "./burger-ingredients.module.sass";
import AnchorMenu from "../util-components/anchor-menu/anchor-menu.jsx";
import Ingredients from "../util-components/ingredients/ingredients.jsx";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types.js"

const BurgerIngredients = ({ ingredients }) => {
  let buns = [];
  let sauce = [];
  let main = [];

  ingredients.map(item => {
    if (item.type === "bun") {
      buns.push(item);
    } else if (item.type === "sauce") {
      sauce.push(item);
    } else if (item.type === "main") {
      main.push(item);
    }
  });

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
        <Ingredients id={"buns"} title={"Булки"} array={buns} />
        <Ingredients id={"sauce"} title={"Соусы"} array={sauce} />
        <Ingredients id={"main"} title={"Начинки"} array={main} />
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
}

export default BurgerIngredients;
