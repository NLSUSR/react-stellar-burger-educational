import Style from "./modal.module.sass";
import ModalOverlay from "../modal-overlay/modal-overlay.jsx";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const Modal = ({ forModal, closeModal }) => {
  return (
    <ModalOverlay closeOverlay={closeModal} forOverlay={
      <div className={Style.modal}>
        <div onClick={closeModal} className={Style.close}>
          <CloseIcon type="primary" />
        </div>
        {forModal}
      </div>
    } />
  )
};

export default Modal;
