import Style from "./burger-constructor.module.sass";
import React from "react";
import Buns from "../util-components/buns/buns.jsx";
import Recipe from "../util-components/recipe/recipe";
import Invoice from "../util-components/invoice/invoice.jsx";
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import API from "../../utils/api.js";
import useModal from "../../services/hooks/use-modal.js";
import { useDispatch, useSelector } from "react-redux";
import rootActions from "../../services/actions/root-action";
import { useDrop } from "react-dnd/dist/hooks";

const BurgerConstructor = () => {
  const { modalState, open, close } = useModal();
  const dispatch = useDispatch();

  const burger = useSelector((s) => s.burger);
  const order = useSelector((s) => s.order);

  const sendOrder = () => {
    const array = burger.others.concat(burger.bun);
    return burger.bun.price !== 0 && burger.others.length !== 0
      ? API.createOrder(array.map((i) => i._id))
          .then((response) => {
            dispatch(rootActions.order.get(response));
          })
          .catch((e) => {
            dispatch(rootActions.order.default());
            API.responseError(e);
          })
      : null;
  };

  const showOrder = () => {
    sendOrder();
    open();
  };

  function guid() {
    const now = new Date();
    return now.getTime().toString(36).slice(1, 36);
  }

  const hideOrder = () => {
    dispatch(rootActions.burger.default());
    dispatch(rootActions.price.default());
    dispatch(rootActions.order.default());
    close();
  };

  const [{}, drop] = useDrop({
    accept: "create",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop({ item }) {
      const ingredients = { ...item };
      ingredients.key = guid();

      item.type !== "bun"
        ? dispatch(rootActions.burger.add(ingredients)) &&
          dispatch(rootActions.price.add(ingredients.price))
        : dispatch(rootActions.price.remove(burger.bun.price * 2)) &&
          dispatch(rootActions.burger.replace(ingredients)) &&
          dispatch(rootActions.price.add(ingredients.price * 2));
    },
  });

  const scroll =
    burger.others.length < 6 ? Style["hide-scroll"] : "custom-scroll";

  return (
    <section className={Style.container} ref={drop}>
      <ul className={Style.list}>
        <li className={Style.top}>
          <Buns bun={burger.bun} type={"top"} text={"верх"} lock={true} />
        </li>

        <li className={`${Style.ingredients} ${scroll}`}>
          <Recipe array={burger.others} />
        </li>

        <li className={Style.bottom}>
          <Buns bun={burger.bun} type={"bottom"} text={"низ"} lock={true} />
        </li>
      </ul>

      <Invoice click={showOrder} />

      <React.Fragment>
        {modalState && order.success ? (
          <Modal closeModal={hideOrder}>
            <OrderDetails>{order.number}</OrderDetails>
          </Modal>
        ) : null}
      </React.Fragment>
    </section>
  );
};

export default BurgerConstructor;
