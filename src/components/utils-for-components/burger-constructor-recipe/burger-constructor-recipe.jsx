import Style from "./burger-constructor-recipe.module.sass";
import constants from "../../../utils-for-application/constants";
import BurgerConstructorItem from "../burger-constructor-item/burger-constructor-item";

const BurgerConstructorRecipe = ({ array }) => {
  return (
    <ul className={Style.list}>
      {array?.map((item, index) => {
        return item.type !== "bun" ? (
          <li key={`burger_constructor_item_${index}`}>
            <BurgerConstructorItem item={item} index={index} />
          </li>
        ) : null;
      })}
    </ul>
  );
};

BurgerConstructorRecipe.propTypes = constants.types.burgerConstructorRecipe;

export default BurgerConstructorRecipe;
