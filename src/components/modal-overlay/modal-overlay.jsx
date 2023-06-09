import Style from "./modal-overlay.module.sass";
import PropTypes from "prop-types";
import { Fragment } from "react";

const ModalOverlay = ({ close }) => {
  return (
    <Fragment>
      <div className={Style.overlay} onClick={close} />
    </Fragment>
  );
};

ModalOverlay.propTypes = {
  сlose: PropTypes.func.isRequired,
};

export default ModalOverlay;
