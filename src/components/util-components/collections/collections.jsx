import Style from "./collections.module.sass";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types.js";
import Items from "../items/items.jsx";

const Collections = ({ title, array }) => {
  return (
    <div className={Style.container}>
      <h2 className={Style.title}>{title}</h2>
      <ul className={Style.list}>
        {array.map((item, index) => {
          return <Items key={index} item={item} />;
        })}
      </ul>
    </div>
  );
};

Collections.propTypes = {
  title: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};

export default Collections;
