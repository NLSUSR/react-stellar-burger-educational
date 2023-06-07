import Style from "./modal-overlay.module.sass";
import PropTypes from "prop-types";

const ModalOverlay = ({ overlayClose }) => {
  return <div className={Style.overlay} onClick={overlayClose} />;
};

ModalOverlay.propTypes = {
  overlayClose: PropTypes.func.isRequired,
};

export default ModalOverlay;
