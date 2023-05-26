import Style from "./modal.module.sass";
import ModalOverlay from "../modal-overlay/modal-overlay.jsx";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import React from "react";

const Modal = ({ closeModal, children }) => {
  const handleEscapeClose = (event) =>
    event.key === "Escape" ? closeModal() : null;

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={Style.container}>
      <ModalOverlay
        overlayClose={(event) =>
          event.target === event.currentTarget ? closeModal() : null
        }
      />
      <div className={Style.modal}>
        <div className={Style.close} onClick={closeModal}>
          <CloseIcon type="primary" />
        </div>
        {children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
