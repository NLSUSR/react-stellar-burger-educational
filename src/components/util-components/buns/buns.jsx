// import Style from "./buns.module.sass";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import constants from "../../../utils/constants.js";

const Buns = ({ bun, type, lock, text }) => {
  return (
    <ConstructorElement
      type={type}
      isLocked={lock}
      text={`${bun.name} (${text})`}
      price={bun.price}
      thumbnail={bun.image}
    />
  );
};

Buns.propTypes = {
  bun: PropTypes.shape(constants.types.isRequired).isRequired,
  type: PropTypes.string.isRequired,
  lock: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Buns;
