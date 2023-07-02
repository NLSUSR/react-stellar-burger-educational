import Identification from "../utils-for-pages/identification/identification";
import rootDispatcher from "../../services/store/dispatchers/root-dispacher";
import constants from "../../utils-for-application/constants";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const callback = (e, value) => {
    e.preventDefault();
    dispatch(rootDispatcher.register(value, navigate));
  };

  const button = {
    state: "submit",
    name: "Зарегистрироваться",
    submit: callback,
  };
  return (
    <Identification {...constants.registerData} buttons={{ submit: button }} />
  );
};

export default Register;
