import Style from "./burger-constructor-invoice.module.sass";
import constants from "../../../utils-for-application/constants";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as RSB from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructorInvoice = ({ click, price, button }) => {
  const navigate = useNavigate();

  const success = useSelector((s) => s.user.getUser.response?.success ?? false);

  const login = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className={Style.wrapper}>
      <div className={Style.receipt}>
        <p className={`${Style.total} text text_type_digits-medium`}>{price}</p>
        <div className={Style.currency}>
          <RSB.CurrencyIcon type="primary" />
        </div>
      </div>
      {success ? (
        <RSB.Button
          extraClass={Style.button}
          type="primary"
          size="large"
          htmlType="submit"
          children={button}
          onClick={click}
        />
      ) : (
        <RSB.Button
          type="primary"
          size="large"
          htmlType="button"
          children={"Авторизоваться"}
          onClick={login}
        />
      )}
    </div>
  );
};

BurgerConstructorInvoice.propTypes = constants.types.burgerConstructorInvoice;

export default BurgerConstructorInvoice;
