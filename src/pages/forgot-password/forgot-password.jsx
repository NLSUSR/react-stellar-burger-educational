import Identification from "../utils-for-pages/identification/identification";
import rootDispatcher from "../../services/store/dispatchers/root-dispacher";
import constants from "../../utils-for-application/constants";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const callback = (e, value) => {
    e.preventDefault();
    dispatch(rootDispatcher.forgotPassword(value, navigate));
    navigate("/reset-password", { state: "forgot-password" });
  };

  const button = { state: "submit", name: "Восстановить", submit: callback };

  return (
    <Identification
      {...constants.forgotPasswordData}
      buttons={{ submit: button }}
    />
  );
};

export default ForgotPassword;
