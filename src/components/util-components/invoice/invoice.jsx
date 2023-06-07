import Style from "./invoice.module.sass";
import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Invoice = ({ click }) => {
  const { CurrencyIcon, Button } = library;
  const price = useSelector((s) => s.price);

  return (
    <div className={Style.wrapper}>
      <div className={Style.receipt}>
        <p className={`${Style.total} text text_type_digits-medium`}>
          {price.total}
        </p>
        <div className={Style.currency}>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <Button
        type="primary"
        size="large"
        onClick={click}
        htmlType="submit"
        children={"Оформить заказ"}
      />
    </div>
  );
};

Invoice.propTypes = {
  click: PropTypes.func.isRequired,
};

export default Invoice;
