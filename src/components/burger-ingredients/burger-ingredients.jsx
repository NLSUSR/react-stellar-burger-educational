import Style from "./burger-ingredients.module.sass";
import AnchorMenu from "../hocs/anchor-menu/anchor-menu.jsx";
import Ingredients from "../hocs/ingredients/_ingredients.jsx";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types.js"

const BurgerIngredients = ({ ingredients }) => {

  let buns = [];
  let sauce = [];
  let main = [];

  // eslint-disable-next-line array-callback-return
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
          { value: "Булки", name: "Булки" },
          { value: "Соусы", name: "Соусы" },
          { value: "Начинки", name: "Начинки" },
        ]}
      />
      <div className={`${Style.ingredients} custom-scroll`}>
        <Ingredients title={"Булки"} array={buns} />
        <Ingredients title={"Соусы"} array={sauce} />
        <Ingredients title={"Начинки"} array={main} />
      </div>
    </section>
  );
};

AnchorMenu.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      name: PropTypes.string
    })
  )
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired)
}

export default BurgerIngredients;
