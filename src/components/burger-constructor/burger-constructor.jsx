import Style from "./burger-constructor.module.sass";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types.js"
import React from "react";
import Buns from "../util-components/buns/buns.jsx";
import Recipe from "../util-components/recipe/recipe";
import Invoice from "../util-components/invoice/invoice.jsx";
import Modal from "../modal/modal.jsx";
import OrderDetails from "../order-details/order-details.jsx";

const BurgerConstructor = ({ ingredients }) => {
  const [order, setOrder] = React.useState(null);

  const showOrder = () => {
    setOrder(Math.floor(Math.random() * 999999))
  };

  const hideOrder = () => {
    setOrder(null)
  };

  return (
    <section className={Style.container}>
      <ul className={Style.list}>
        <Buns array={ingredients} type={"top"} text={"верх"} lock={true} />
        <li className={`${Style.ingredients} custom-scroll`}>
          <Recipe array={ingredients} />
        </li>
        <Buns array={ingredients} type={"bottom"} text={"низ"} lock={true} />
      </ul>
      <Invoice click={showOrder} />
      {order && <Modal closeModal={hideOrder} forModal={<OrderDetails order={order} />} />}
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired)
}

export default BurgerConstructor;
