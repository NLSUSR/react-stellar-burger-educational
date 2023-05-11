import Style from "./ingredients.module.sass";
import React from "react";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types.js";
import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal.jsx"
import IngredientDetails from "../../ingredient-details/ingredient-details.jsx"

const Ingredients = ({ id, title, array }) => {
  const { Counter, CurrencyIcon } = library;

  const [count, setCount] = React.useState(0);
  const click = () => setCount(count + 1);

  const [ingredient, setIngredient] = React.useState({
    data: {}, isToggle: false
  });

  const showIngredient = (object) => {
    setIngredient({ data: object, isToggle: true })
  };

  const hideIngredient = () => {
    setIngredient({ data: {}, isToggle: false });
  };

  return (
    <div className={Style.container}>
      <h2 className={Style.title} id={id}>{title}</h2>
      <ul className={Style.list} >
        {
          array.map((item, index) => {
            return (
              <li key={index} className={Style.item} onClick={() => { showIngredient(item) }}>
                <div className={Style.wrapper}>
                  <div className={Style.counter}>
                    <Counter count={count} size="default" />
                  </div>
                  <img
                    className={Style.image}
                    src={item.image}
                    alt={item.name}
                  />
                  <p className={Style.price}>
                    {item.price}
                    <CurrencyIcon type="primary" />
                  </p>
                  <p className={Style.name}>{item.name}</p>
                </div>
              </li>
            );
          })
        }
      </ul>
      {ingredient.isToggle && <Modal closeModal={hideIngredient} children={<IngredientDetails data={ingredient.data} />} />}
    </div>
  );
};

Ingredients.propTypes = {
  title: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(ingredientPropType.isRequired),
};

export default Ingredients;
