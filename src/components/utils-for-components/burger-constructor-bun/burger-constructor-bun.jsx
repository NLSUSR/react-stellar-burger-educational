// import Style from "./burger-constructor-bun.module.sass";
import constants from "../../../utils-for-application/constants";

import * as RSB from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructorBun = ({ bun, type, lock, text }) => {
  return (
    <RSB.ConstructorElement
      type={type}
      isLocked={lock}
      text={`${bun.name} (${text})`}
      price={bun.price}
      thumbnail={bun.image}
    />
  );
};

BurgerConstructorBun.propTypes = constants.types.burgerConstructorBun

export default BurgerConstructorBun;
