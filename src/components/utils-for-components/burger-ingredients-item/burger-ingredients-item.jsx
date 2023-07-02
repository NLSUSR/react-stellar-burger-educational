import Style from "./burger-ingredients-item.module.sass";
import Modal from "../../modal/modal";
import useModal from "../../../services/hooks/useModal";
import IngredientDetails from "../../ingredient-details/ingredient-details";
import constants from "../../../utils-for-application/constants";

import React from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";
import * as RSB from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredientsItem = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const count = useSelector((s) => s.counter.count);
  const bun = useSelector((s) => s.burger.bun._id);

  const counter = React.useMemo(() => {
    return [{ _id: bun }, ...count, { _id: bun }].filter(
      (i) => i._id === item._id
    ).length;
  }, [count, bun, item]);

  const { modalState, open, close } = useModal();

  const showUnit = () => {
    navigate(`/ingredients/${item._id}`, { state: { background: location } });
    open();
  };

  const hideUnit = () => {
    close();
  };

  const [{ isDrag }, dragRef] = useDrag({
    type: "create",
    item: { item },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const opacity = isDrag ? { opacity: ".1" } : { opacity: "1" };

  const Popup = () => (
    <Modal key={v4()} close={hideUnit}>
      <IngredientDetails data={item} />
    </Modal>
  );

  return (
    <section ref={dragRef} style={opacity} className={Style.container}>
      <div className={Style.content} onClick={showUnit}>
        <div className={Style.counter}>
          {counter !== 0 ? (
            <RSB.Counter count={counter} size="default" />
          ) : null}
        </div>
        <img className={Style.image} src={item.image} alt={item.name} />
        <p className={Style.price}>
          {item.price}
          <RSB.CurrencyIcon type="primary" />
        </p>
        <p className={Style.name}>{item.name}</p>
      </div>

      {modalState ? Popup() : null}
    </section>
  );
};

BurgerIngredientsItem.propTypes = constants.types.burgerIngredientsItem;

export default BurgerIngredientsItem;
