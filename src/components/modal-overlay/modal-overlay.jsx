import Style from "./modal-overlay.module.sass";
import PropTypes from "prop-types";

const ModalOverlay = ({ overlayClose, forOverlay }) => {
  return (
    <div
      className={Style.overlay}
      onClick={overlayClose}
      children={forOverlay}
    />
  )
};

ModalOverlay.propTypes = {
  forOverlay: PropTypes.element.isRequired,
  overlayClose: PropTypes.func.isRequired
}

export default ModalOverlay;
