import Style from "./modal-overlay.module.sass";
import PropTypes from "prop-types";

const ModalOverlay = ({ close }) => {
  return <div className={Style.overlay} onClick={close} />;
};

ModalOverlay.propTypes = {
  сlose: PropTypes.func,
};

export default ModalOverlay;
