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
import { v4 } from "uuid";
import React from "react";



const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const burger = useSelector((s) => s.burger);

  const createOrder = useSelector((s) => s.order.createOrder.response);
  const success = useSelector((s) => s.user.getUser.response?.success ?? false);

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
    if (modalState === false) {
      setButton({ text: "Оформить заказ" });
    }
  }, [modalState]);

  const sendOrder = () => {
    const ids = array?.map((i) => i._id);

    setButton({ text: "Готовится..." });

    if (check && success) {
      dispatch(rootDispatcher.createOrder(ids, setButton));
    }
  };

  const showOrder = React.useCallback(() => {
    sendOrder();
    open();
  }, [sendOrder, open]);

    const hideOrder = React.useCallback(() => {
    dispatch(rootActions.burger.default());
    dispatch(rootActions.order.default());
    dispatch(rootActions.counter.default());
    close();
  }, [dispatch, close]);

  const [, dropRef] = useDrop({
    accept: "create",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop({ item }) {
      const element = { ...item };
      element.key = v4();
      const unit = { _id: element._id, key: element.key };

      item.type !== "bun"
        ? dispatch(rootActions.burger.add(element)) &&
          dispatch(rootActions.counter.increment(unit))
        : dispatch(rootActions.burger.replace(element));
    },
  });

  const scroll =
    burger.others.length < 6 ? Style["hide-scroll"] : "custom-scroll";

  const Popup = () => (
    <Modal key={v4()} close={hideOrder}>
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
