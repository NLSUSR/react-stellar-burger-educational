import Style from "./recipe.module.sass";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types.js";
import Ingredients from "../ingredients/ingredients";
import { v4 as uuidv4 } from "uuid";

const Recipe = ({ array }) => {
  return (
    <ul className={Style.list}>
      {array.map((item, index) => {
        return item.type !== "bun" ? (
          <Ingredients key={uuidv4()} item={item} index={index} />
        ) : null;
      })}
    </ul>
  );
};

Recipe.propTypes = {
  array: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};

export default Recipe;
