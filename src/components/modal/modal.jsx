import Style from "./modal.module.sass";
import ModalOverlay from "../modal-overlay/modal-overlay.jsx";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ forModal, closeModal }) => {
  const handleOverlayClose = event => { if (event.target === event.currentTarget) { closeModal() } };
  const handleEscapeClose = event => { if (event.key === "Escape") { closeModal() } };

  React.useEffect(() => {
    document.addEventListener("click", handleOverlayClose);
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("click", handleOverlayClose);
      document.removeEventListener("keydown", handleEscapeClose);
    }
  }, []);

  return (
    ReactDOM.createPortal(
      (
        <ModalOverlay overlayClose={handleOverlayClose} forOverlay={
          <div className={Style.modal}>
            <div onClick={closeModal} className={Style.close}>
              <CloseIcon type="primary" />
            </div>
            {forModal}
          </div>
        } />
      ), document.querySelector("#modal")
    )
  )
};

Modal.propTypes = {
  forModal: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default Modal;
