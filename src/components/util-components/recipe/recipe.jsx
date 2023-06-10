import Style from "./recipe.module.sass";
import PropTypes from "prop-types";
import constants from "../../../utils/constants.js";
import Ingredients from "../ingredients/ingredients.jsx";
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
  array: PropTypes.arrayOf(constants.types.isRequired).isRequired,
};

export default Recipe;
