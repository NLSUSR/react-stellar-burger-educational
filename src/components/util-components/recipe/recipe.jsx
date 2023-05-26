import Style from "./recipe.module.sass";
import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types.js";
import React from "react";
import Context from "../../../services/contexts/app-context";

const Recipe = ({ array }) => {
  const { DragIcon, ConstructorElement } = library;
  const { burger, setBurger, setPrice } = React.useContext(Context);

  const remove = (item) => {
    setBurger({
      ...burger,
      others: burger.others.filter((i) => i._id !== item._id),
    });
    setPrice({ type: "delete", payload: item.price });
  };

  return (
    <ul className={Style.list}>
      {array.map((item, index) => {
        if (item.type !== "bun") {
          return (
            <li key={index} className={Style.item}>
              <div className={Style.drag}>
                <DragIcon type="primary" />
              </div>
              <div className={Style.element}>
                <ConstructorElement
                  isLocked={false}
                  text={item.name}
                  price={item.price}
                  thumbnail={item.image}
                  handleClose={() => remove(item)}
                />
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
};

Recipe.propTypes = {
  array: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};

export default Recipe;
