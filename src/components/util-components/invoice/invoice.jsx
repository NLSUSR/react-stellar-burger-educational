import Style from "./invoice.module.sass"
import * as library from "@ya.praktikum/react-developer-burger-ui-components";

const Invoice = ({click}) => {
  const { CurrencyIcon, Button } = library;

  return (
    <div className={Style.wrapper}>
      <div className={Style.receipt}>
        <p className={`${Style.total} text text_type_digits-medium`}>{Math.floor(Math.random() * 99999)}</p>
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
  )
};

export default Invoice;