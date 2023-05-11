import Style from "./modal.module.sass";
import ModalOverlay from "../modal-overlay/modal-overlay.jsx";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({ children, closeModal }) => {
  return (
    <ModalOverlay closeOverlay={closeModal} children={
      <div className={Style.modal}>
        <div onClick={closeModal} className={Style.close}>
          <CloseIcon type="primary" />
        </div>
        {children}
      </div>
    } />
  )
};

export default Modal;
