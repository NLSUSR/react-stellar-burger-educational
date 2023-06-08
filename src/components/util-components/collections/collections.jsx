import Style from "./collections.module.sass";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types.js";
import Item from "../item/item.jsx";
import { v4 as uuidv4 } from "uuid";

const Collections = ({ title, array }) => {
  return (
    <div className={Style.container}>
      <h2 className={Style.title}>{title}</h2>
      <ul className={Style.list}>
        {array.map((item, index) => {
          return <Item key={uuidv4()} item={item} />;
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
