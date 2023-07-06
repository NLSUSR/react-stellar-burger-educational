import Identification from "../utils-for-pages/identification/identification";
import rootDispatcher from "../../services/store/dispatchers/root-dispacher";
import constants from "../../utils-for-application/constants";

import { useDispatch } from "react-redux";
import React from "react";

const Login = () => {
  const dispatch = useDispatch();

  const callback = React.useCallback((e, value) => {
    e.preventDefault();
    dispatch(rootDispatcher.login(value));
  }, []);

  const button = {
    state: "submit",
    name: "Войти",
    submit: callback,
  };

  return (
    <Identification {...constants.loginData} buttons={{ submit: button }} />
  );
};

export default Login;
