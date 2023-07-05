import Style from "./burger-ingredients-item.module.sass";
import constants from "../../../utils-for-application/constants";

import React from "react";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import * as RSB from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredientsItem = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const count = useSelector((s) => s.burger.count);
  const bun = useSelector((s) => s.burger.bun._id);

  const counter = React.useMemo(() => {
    return [{ _id: bun }, ...count, { _id: bun }].filter(
      (i) => i._id === item._id
    ).length;
  }, [count, bun, item]);

  const showUnit = () => {
    navigate(`/ingredients/${item._id}`, { state: { background: location } });
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
    </section>
  );
};

BurgerIngredientsItem.propTypes = constants.types.burgerIngredientsItem;

export default BurgerIngredientsItem;
