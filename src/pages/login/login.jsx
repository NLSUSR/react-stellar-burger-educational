import Identification from "../utils-for-pages/identification/identification";
import rootDispatcher from "../../services/store/dispatchers/root-dispacher";
import constants from "../../utils-for-application/constants";

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const callback = (e, value) => {
    e.preventDefault();
    dispatch(rootDispatcher.login(value, navigate, location));
  };

  const button = { state: "submit", name: "Войти", submit: callback };

  return (
    <Identification {...constants.loginData} buttons={{ submit: button }} />
  );
};

export default Login;
