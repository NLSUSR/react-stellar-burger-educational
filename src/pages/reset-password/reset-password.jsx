import Identification from "../utils-for-pages/identification/identification";
import rootDispatcher from "../../services/store/dispatchers/root-dispacher";
import constants from "../../utils-for-application/constants";

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    location.state !== "forgot-password"
      ? navigate("/forgot-password", { replace: true })
      : navigate("/reset-password", { replace: true });
  }, [location.state, navigate]);

  const callback = (e, value) => {
    e.preventDefault();
    dispatch(rootDispatcher.resetPassword(value, navigate));
  };

  const button = { state: "submit", name: "Сохранить", submit: callback };

  return (
    <Identification
      {...constants.resetPasswordData}
      buttons={{ submit: button }}
    />
  );
};

export default ResetPassword;
