import Style from "./burger-constructor.module.sass";
import React from "react";
import Buns from "../util-components/buns/buns.jsx";
import Recipe from "../util-components/recipe/recipe";
import Invoice from "../util-components/invoice/invoice.jsx";
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import API from "../../utils/api.js";
import { useDispatch, useSelector } from "react-redux";
import rootActions from "../../services/actions/root-action";
import { useDrop } from "react-dnd/dist/hooks";
import { v4 as uuidv4 } from "uuid";

const BurgerConstructor = () => {
  const dispatch = useDispatch();

  const burger = useSelector((s) => s.burger);
  const order = useSelector((s) => s.order);
  const check = burger.bun.price !== 0;

  const array = React.useMemo(() => {
    return [burger.bun, ...burger.others, burger.bun];
  }, [burger]);

  const total = React.useMemo(() => {
    const sort = array.map((i) => i.price);
    return sort.reduce((previous, current) => current + previous);
  }, [array]);

  const sendOrder = () => {
    const ids = array.map((i) => i._id);
    return check
      ? API.createOrder(ids)
          .then((response) => {
            dispatch(rootActions.order.get(response));
          })
          .catch((e) => {
            dispatch(rootActions.order.default());
            API.responseError(e);
          })
      : null;
  };

  const [modalState, setModalState] = React.useState(false);

  const showOrder = () => {
    sendOrder();
    setModalState(true);
  };

  const hideOrder = () => {
    dispatch(rootActions.burger.default());
    dispatch(rootActions.order.default());
    dispatch(rootActions.counter.default());
    setModalState(false);
  };

  const [, dropRef] = useDrop({
    accept: "create",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop({ item }) {
      const element = { ...item };
      element.key = uuidv4();
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
    <Modal key={uuidv4()} close={hideOrder}>
      <OrderDetails>{order.number}</OrderDetails>
    </Modal>
  );

  return (
    <section className={Style.container} ref={dropRef}>
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

      {check ? <Invoice click={showOrder} price={total} /> : null}

      {modalState && order.success ? Popup() : null}
    </section>
  );
};

export default BurgerConstructor;
