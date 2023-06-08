import Style from "./invoice.module.sass";
import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const Invoice = ({ click, price }) => {
  const { CurrencyIcon, Button } = library;

  return (
    <div className={Style.wrapper}>
      <div className={Style.receipt}>
        <p className={`${Style.total} text text_type_digits-medium`}>{price}</p>
        <div className={Style.currency}>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <Button type="primary" size="large" onClick={click} htmlType="submit">
        Оформить заказ
      </Button>
    </div>
  );
};

Invoice.propTypes = {
  click: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
};

export default Invoice;
