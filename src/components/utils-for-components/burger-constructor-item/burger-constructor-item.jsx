import Style from "./burger-constructor-item.module.sass";
import rootActions from "../../../services/store/actions/root-action";
import constants from "../../../utils-for-application/constants";

import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import * as RSB from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructorItem = ({ item, index }) => {
  const dispatch = useDispatch();

  const remove = (item) => {
    dispatch(rootActions.burger.remove(item));
  };

  const others = useSelector((s) => s.burger.others);

  const [, dragRef] = useDrag({
    type: "sort",
    item: { index },
  });

  const [{ isHover }, dropRef] = useDrop({
    accept: "sort",
    drop(item) {
      const sort = [...others];

      const movable = sort.splice(item.index, 1)[0];
      sort.splice(index, 0, movable);

      dispatch(rootActions.burger.sort(sort));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const hover = isHover ? { opacity: ".1" } : { opacity: "1" };

  const dndRef = React.useRef(null);
  dragRef(dndRef);
  dropRef(dndRef);

  return (
    <section ref={dndRef} className={Style.item} style={hover}>
      <div className={Style.drag}>
        <RSB.DragIcon type="primary" />
      </div>
      <div className={Style.element}>
        <RSB.ConstructorElement
          isLocked={false}
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          handleClose={() => remove(item)}
        />
      </div>
    </section>
  );
};

BurgerConstructorItem.propTypes = constants.types.burgerConstructorItem;

export default BurgerConstructorItem;
