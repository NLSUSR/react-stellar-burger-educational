import Style from "./burger-constructor.module.sass";
import useModal from "../../services/hooks/useModal";
import Modal from "../modal/modal";
import rootActions from "../../services/store/actions/root-action";
import OrderDetails from "../order-details/order-details";
import BurgerConstructorBun from "../utils-for-components/burger-constructor-bun/burger-constructor-bun";
import BurgerConstructorRecipe from "../utils-for-components/burger-constructor-recipe/burger-constructor-recipe";
import BurgerConstructorInvoice from "../utils-for-components/burger-constructor-invoice/burger-constructor-invoice";
import rootDispatcher from "../../services/store/dispatchers/root-dispacher";

import { useDispatch, useSelector } from "react-redux";
import { useDrop } from "react-dnd/dist/hooks";
import React from "react";

const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const burger = useSelector((s) => s.burger);

  const createOrder = useSelector((s) => s.order.response);
  const success = useSelector((s) => s.user.response?.success ?? false);

  const check = burger.bun.price !== 0;

  const array = React.useMemo(() => {
    return [burger.bun, ...burger.others, burger.bun];
  }, [burger]);

  const total = React.useMemo(() => {
    const sort = array?.map((i) => i.price);
    return sort.reduce((previous, current) => previous + current);
  }, [array]);

  const [button, setButton] = React.useState({ text: "Оформить заказ" });

  const { modalState, open, close } = useModal();

  React.useEffect(() => {
    !modalState
      ? setButton({ text: "Оформить заказ" })
      : setButton({ text: "Готовится..." });
  }, [modalState]);

  const sendOrder = React.useCallback(() => {
    const ids = array?.map((i) => i._id);

    return check && success
      ? dispatch(rootDispatcher.createOrder(ids, setButton))
      : null;
  }, [array, check, dispatch, success]);

  const showOrder = React.useCallback(() => {
    sendOrder();
    open();
  }, [sendOrder, open]);

  const hideOrder = React.useCallback(() => {
    dispatch(rootActions.burger.default());
    dispatch(rootActions.order.default());
    close();
  }, [dispatch, close]);

  const [, dropRef] = useDrop({
    accept: "create",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop({ item }) {
      item.type !== "bun"
        ? dispatch(rootActions.burger.add(item))
        : dispatch(rootActions.burger.replace(item));
    },
  });

  const scroll =
    burger.others.length < 6 ? Style["hide-scroll"] : "custom-scroll";

  const Popup = () => (
    <Modal close={hideOrder}>
      <OrderDetails>{createOrder?.order.number}</OrderDetails>
    </Modal>
  );

  return (
    <section className={Style.container} ref={dropRef}>
      <ul className={Style.list}>
        <li className={Style.top}>
          <BurgerConstructorBun
            bun={burger.bun}
            type={"top"}
            text={"верх"}
            lock={true}
          />
        </li>

        <li className={`${Style.ingredients} ${scroll}`}>
          <BurgerConstructorRecipe array={burger.others} />
        </li>

        <li className={Style.bottom}>
          <BurgerConstructorBun
            bun={burger.bun}
            type={"bottom"}
            text={"низ"}
            lock={true}
          />
        </li>
      </ul>

      {check ? (
        <BurgerConstructorInvoice
          click={showOrder}
          price={total}
          button={button.text}
        />
      ) : null}

      {modalState && (createOrder?.success ?? false) ? Popup() : null}
    </section>
  );
};

export default BurgerConstructor;
