import Style from "./order-details.module.sass";
import done from "../../images/done.svg";
import constants from "../../utils-for-application/constants";

const OrderDetails = ({ children }) => {
  return (
    <section className={Style.container}>
      <h2 className={Style.title}>{children}</h2>
      <p className={Style.subtitle}>идентификатор заказа</p>
      <img
        className={Style.done}
        src={done}
        alt="Ваш заказ начали готовить - Дождитесь готовности на орбитальной станции"
      />
      <p className={Style.attention}>Ваш заказ начали готовить</p>
      <p className={Style.wait}>Дождитесь готовности на орбитальной станции</p>
    </section>
  );
};

OrderDetails.propTypes = constants.types.orderDetails

export default OrderDetails;
