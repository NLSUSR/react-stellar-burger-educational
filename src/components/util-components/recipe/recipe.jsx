import Style from "./recipe.module.sass";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types.js";
import Ingredients from "../ingredients/ingredients";

const Recipe = ({ array }) => {
  return (
    <ul className={Style.list}>
      {array.map((item, index) => {
        return item.type !== "bun" ? (
          <Ingredients key={index} item={item} index={index} />
        ) : null;
      })}
    </ul>
  );
};

Recipe.propTypes = {
  array: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};

export default Recipe;
