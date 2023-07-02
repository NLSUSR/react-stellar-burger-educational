import Style from "./modal.module.sass";
import ModalOverlay from "../modal-overlay/modal-overlay";
import constants from "../../utils-for-application/constants";

import React from "react";
import { createPortal } from "react-dom";
import * as RSB from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({ close, children }) => {
  const handleButtonClose = (e) => (e.target ? close() : null);
  const handleEscapeClose = (e) => (e.key === "Escape" ? close() : null);
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
    <section className={Style.container}>
      <ModalOverlay close={(e) => handleOverlayClose(e)} />
      <div className={Style.modal}>
        <div className={Style.close} onClick={(e) => handleButtonClose(e)}>
          <RSB.CloseIcon type="primary" />
        </div>
        {children}
      </div>
    </section>,
    document.querySelector("#modal")
  );
};

Modal.propTypes = constants.types.modal;

export default Modal;
