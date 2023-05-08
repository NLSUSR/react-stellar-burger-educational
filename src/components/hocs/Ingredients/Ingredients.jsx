import Style from "./Ingredients.module.sass";
import React from "react";
import PropTypes from "prop-types";
import { iconPropTypes } from "../../../utils/prop-types.js";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const Ingredients = (props) => {
  const [count, setCount] = React.useState(0);
  const click = () => setCount(count + 1);

  return (
    <div className={Style.container}>
      <h2 className={Style.title}>
        {props.title}
      </h2>
      <ul className={Style.list}>
        {props.array.map((item, index) => {
          return (
            <li key={index} className={Style.item} onClick={click}>
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
        })}
      </ul>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
};

CurrencyIcon.propTypes = { iconPropTypes };

export default Ingredients;
