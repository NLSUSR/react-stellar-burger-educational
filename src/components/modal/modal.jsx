import Style from "./modal.module.sass";
import ModalOverlay from "../modal-overlay/modal-overlay.jsx";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import React from "react";

const Modal = ({ close, children }) => {
  const handleEscapeClose = (e) => (e.key === "Escape" ? close() : null);

  const handleButtonClose = () => {
    close();
  };

  const handleOverlayClose = (e) =>
    e.target === e.currentTarget ? close() : null;

  React.useEffect(() => {
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
    // eslint-disable-next-line
  }, []);

  return createPortal(
    <div className={Style.container}>
      <ModalOverlay overlayClose={(e) => handleOverlayClose(e)} />
      <div className={Style.modal}>
        <div className={Style.close} onClick={handleButtonClose}>
          <CloseIcon type="primary" />
        </div>
        {children}
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
