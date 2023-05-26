import Style from "./burger-constructor.module.sass";
import React from "react";
import Buns from "../util-components/buns/buns.jsx";
import Recipe from "../util-components/recipe/recipe";
import Invoice from "../util-components/invoice/invoice.jsx";
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";
import Context from "../../services/contexts/app-context.js";
import API from "../../utils/api.js";
import useModal from "../../services/hooks/useModal.js";
import done from "../../images/done.svg";

const BurgerConstructor = () => {
  const { order, setOrder, burger, setBurger, price, setPrice } =
    React.useContext(Context);

  const { modalState, open, close } = useModal();

  React.useEffect(() => {
    if (burger.bun.price !== 0 && burger.others.length !== 0) {
      const array = burger.others.concat(burger.bun);

      API.createOrder(array.map((i) => i._id))
        .then((response) => {
          setOrder({
            name: response.name,
            number: response.order.number,
            success: response.success,
          });
        })
        .catch((error) => {
          API.responseError(error);
        });
    }
  }, []);

  const showOrder = () => {
    open();
  };

  const hideOrder = () => {
    close();

    setPrice({ type: "reset" });

    setOrder({
      name: "",
      number: 0,
      success: false,
    });

    setBurger({
      bun: {
        image: done,
        name: "Добавьте булку",
        price: 0,
      },
      others: [],
    });
  };

  return (
    <section className={Style.container}>
      <ul className={Style.list}>
        <li className={Style.top}>
          <Buns bun={burger.bun} type={"top"} text={"верх"} lock={true} />
        </li>

        <li
          className={`${Style.ingredients} ${
            burger.others.length < 6 ? Style["hide-scroll"] : "custom-scroll"
          }`}
        >
          <Recipe array={burger.others} />
        </li>

        <li className={Style.bottom}>
          <Buns bun={burger.bun} type={"bottom"} text={"низ"} lock={true} />
        </li>
      </ul>

      <Invoice click={showOrder} />

      {modalState ? (
        <Modal closeModal={hideOrder}>
          <OrderDetails>{order.number}</OrderDetails>
        </Modal>
      ) : (
        modalState
      )}
    </section>
  );
};

export default BurgerConstructor;
