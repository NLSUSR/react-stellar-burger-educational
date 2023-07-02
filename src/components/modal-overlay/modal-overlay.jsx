import constants from "../../utils-for-application/constants";
import Style from "./modal-overlay.module.sass";

const ModalOverlay = ({ close }) => {
  return <div className={Style.overlay} onClick={close} />;
};

ModalOverlay.propTypes = constants.types.modalOverlay

export default ModalOverlay;
