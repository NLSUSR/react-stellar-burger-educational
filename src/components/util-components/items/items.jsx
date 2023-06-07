import Style from "./items.module.sass";
import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import React from "react";
import useModal from "../../../services/hooks/use-modal.js";
import Modal from "../../modal/modal";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import PropTypes from "prop-types";

const Items = ({ item }) => {
  const { Counter, CurrencyIcon } = library;

  const { modalState, open, close } = useModal();

  const burger = useSelector((s) => s.burger);

  const count = burger.others
    .concat(burger.bun)
    .filter((i) => i._id === item._id);

  const [ingredient, setIngredient] = React.useState({
    data: {},
  });

  const showIngredient = (object) => {
    setIngredient({ data: object });
    open();
  };

  const hideIngredient = () => {
    close();
    setIngredient({ data: {} });
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: "create",
    item: { item },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const opacity = isDrag ? { opacity: ".1" } : { opacity: "1" };

  return (
    <li
      ref={dragRef}
      style={opacity}
      className={Style.item}
      onClick={() => {
        showIngredient(item);
      }}
    >
      <div className={Style.wrapper}>
        <div className={Style.counter}>
          {count.length !== 0 ? (
            <Counter
              count={item.type === "bun" ? count.length * 2 : count.length}
              size="default"
            />
          ) : null}
        </div>
        <img className={Style.image} src={item.image} alt={item.name} />
        <p className={Style.price}>
          {item.price}
          <CurrencyIcon type="primary" />
        </p>
        <p className={Style.name}>{item.name}</p>
      </div>
      <React.Fragment>
        {modalState ? (
          <Modal closeModal={hideIngredient}>
            <IngredientDetails data={ingredient.data} />
          </Modal>
        ) : null}
      </React.Fragment>
    </li>
  );
};

Items.propTypes = {
  item: PropTypes.shape(PropTypes.string.isRequired).isRequired,
};

export default Items;
