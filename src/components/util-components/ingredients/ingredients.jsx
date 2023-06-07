import Style from "./ingredients.module.sass";
import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import rootActions from "../../../services/actions/root-action";
import { useDrag, useDrop } from "react-dnd";
import React from "react";
import PropTypes from "prop-types";

const Ingredients = ({ item, index }) => {
  const { DragIcon, ConstructorElement } = library;
  const dispatch = useDispatch();

  const remove = (item) => {
    dispatch(rootActions.burger.remove(item));
    dispatch(rootActions.price.remove(item.price));
  };

  const others = useSelector((s) => s.burger.others);
  const sort = [...others];

  const [{}, drag] = useDrag({
    type: "sort",
    item: { index },
  });

  const [{ isHover }, drop] = useDrop({
    accept: "sort",
    drop(item) {
      const movable = sort.splice(item.index, 1)[0];
      sort.splice(index, 0, movable);

      dispatch(rootActions.burger.sort(sort));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  const hover = isHover ? { opacity: ".1" } : { opacity: "1" };

  const ref = React.useRef(null);

  const dndRef = drag(drop(ref));

  return (
    <li ref={dndRef} className={Style.item} style={hover}>
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
};

Ingredients.propTypes = {
  item: PropTypes.shape(PropTypes.string.isRequired).isRequired,
  index: PropTypes.number.isRequired,
};

export default Ingredients;
