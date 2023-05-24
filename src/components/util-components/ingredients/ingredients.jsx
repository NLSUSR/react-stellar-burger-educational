import Style from "./ingredients.module.sass";
import React from "react";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../../utils/prop-types.js";
import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../../modal/modal.jsx";
import IngredientDetails from "../../ingredient-details/ingredient-details.jsx";
import Context from "../../../services/contexts/app-context";
import useModal from "../../../services/hooks/useModal";

const Ingredients = ({ id, title, array }) => {
  const { Counter, CurrencyIcon } = library;
  const { burger, setBurger, setPrice } = React.useContext(Context);

  const createBurger = (item) => {
    if (item.type === "bun") {
      setBurger({
        ...(burger.bun !== {}
          ? setPrice({ type: "delete", payload: burger.bun.price * 2 })
          : burger.bun),
      });
      setBurger({
        ...burger,
        bun: item,
      });
      setPrice({ type: "add", payload: item.price * 2 });
    } else {
      setBurger({
        ...burger,
        others: [...burger.others, item],
      });
      setPrice({ type: "add", payload: item.price });
    }
  };

  // const [ingredient, setIngredient] = React.useState({
  //   data: {},
  // });

  // const { modalState, open, close } = useModal();

  // const showIngredient = (object) => {
  //   setIngredient({ data: object });
  //   open();
  // };

  // const hideIngredient = () => {
  //   setIngredient({ data: {} });
  //   close();
  // };

  return (
    <div className={Style.container}>
      <h2 className={Style.title} id={id}>
        {title}
      </h2>
      <ul className={Style.list}>
        {array.map((item, index) => {
          return (
            <li
              key={index}
              className={Style.item}
              onClick={() => {
                createBurger(item);
                // showIngredient(item);
              }}
            >
              <div className={Style.wrapper}>
                {/* <div className={Style.counter}>
                  <Counter count={0} size="default" />
                </div> */}
                <img className={Style.image} src={item.image} alt={item.name} />
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
      {/* {modalState ? (
        <Modal
          closeModal={hideIngredient}
          forModal={<IngredientDetails data={ingredient.data} />}
        />
      ) : (
        modalState
      )} */}
    </div>
  );
};

Ingredients.propTypes = {
  id: PropTypes.string.isRequired ,
  title: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
};

export default Ingredients;
