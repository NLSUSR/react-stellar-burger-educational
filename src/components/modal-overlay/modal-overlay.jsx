import Style from "./modal-overlay.module.sass";
import React from "react";
import ReactDOM from "react-dom";

const ModalOverlay = ({ forOverlay, closeOverlay }) => {
  const handleOverlayClose = event => { if (event.target === event.currentTarget) { closeOverlay() } };
  const handleEscapeClose = event => { if (event.key === "Escape") { closeOverlay() } };

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
        <div
          onClick={handleOverlayClose}
          className={Style.overlay}
          children={forOverlay}
        />
      ),
      document.querySelector("#modal")
    )
  );
};

export default ModalOverlay;
