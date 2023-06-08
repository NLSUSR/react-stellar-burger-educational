import Style from "./item.module.sass";
import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import React from "react";
import useModal from "../../../services/hooks/use-modal.js";
import Modal from "../../modal/modal.jsx";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { ingredientPropType } from "../../../utils/prop-types.js";

const Item = ({ item }) => {
  const { Counter, CurrencyIcon } = library;
  const { modalState, open, close } = useModal();

  const count = useSelector((s) => s.counter.count);
  const bun = useSelector((s) => s.burger.bun._id);

  const counter = React.useMemo(() => {
    return [{ _id: bun }, ...count, { _id: bun }].filter(
      (i) => i._id === item._id
    ).length;
  }, [count, bun, item]);

  const showUnit = () => {
    open();
  };

  const hideUnit = () => {
    close();
  };

  const [{ isDrag }, drag] = useDrag({
    type: "create",
    item: { item },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const opacity = isDrag ? { opacity: ".1" } : { opacity: "1" };

  const wrapper = () => (
    <Modal key={uuidv4()} close={hideUnit}>
      <IngredientDetails data={item} />
    </Modal>
  );

  return (
    <li ref={drag} style={opacity} className={Style.item} onClick={showUnit}>
      <div className={Style.wrapper}>
        <div className={Style.counter}>
          {counter !== 0 ? <Counter count={counter} size="default" /> : null}
        </div>
        <img className={Style.image} src={item.image} alt={item.name} />
        <p className={Style.price}>
          {item.price}
          <CurrencyIcon type="primary" />
        </p>
        <p className={Style.name}>{item.name}</p>
      </div>

      {modalState ? wrapper() : null}
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.shape(ingredientPropType.isRequired).isRequired,
};

export default Item;
