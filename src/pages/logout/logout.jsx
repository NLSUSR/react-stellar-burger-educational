import Style from "./logout.module.sass";
import ProfileLinks from "../utils-for-pages/profile-links/profile-links";
import rootDispatcher from "../../services/store/dispatchers/root-dispacher";
import rootActions from "../../services/store/actions/root-action";
import constants from "../../utils-for-application/constants";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as RSB from "@ya.praktikum/react-developer-burger-ui-components";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const callback = () => {
    dispatch(rootDispatcher.logout(navigate));
  };

  const click = () => {
    navigate("/profile", { replace: true });
  };

  React.useEffect(() => {
    dispatch(rootActions.link.default());
    dispatch(rootActions.link.profile(true));
    dispatch(rootActions.link.logout(true));
  }, [dispatch]);

  return (
    <section className={Style.container}>
      <div className={Style.content}>
        <ProfileLinks message={constants.messages.logout} />
        <div className={Style.wrapper}>
          <RSB.Button
            extraClass={Style.button}
            htmlType="button"
            children={"Выйти"}
            onClick={callback}
          />
          <RSB.Button
            extraClass={Style.button}
            htmlType="button"
            children={"Остаться"}
            onClick={click}
          />
        </div>
      </div>
    </section>
  );
};

export default Logout;
