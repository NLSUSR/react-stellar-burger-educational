import Style from "./logout.module.sass";
import AppHeader from "../../components/app-header/app-header";
import ProfileLinks from "../utils-for-pages/profile-links/profile-links";
import rootDispatcher from "../../services/store/dispatchers/root-dispacher";
import rootActions from "../../services/store/actions/root-action";
import constants from "../../utils-for-application/constants";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as RSB from "@ya.praktikum/react-developer-burger-ui-components";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = useSelector((s) => s.user?.logout?.response);

  const callback = () => {
    dispatch(rootDispatcher.logout());
  };

  React.useEffect(() => {
    if (logout?.success ?? false) {
      navigate("/login", { replace: true });
      document.location.reload();
    }
  }, [logout, navigate]);

  React.useEffect(() => {
    dispatch(rootActions.link.profile(true));
    dispatch(rootActions.link.logout(true));
  }, [dispatch]);

  const click = React.useCallback(
    (e) => {
      e.preventDefault();
      navigate("/profile", { replace: true });
    },
    [navigate]
  );

  return (
    <section className={Style.container}>
      <AppHeader />
      <div className={Style.content}>
        <ProfileLinks message={constants.messages.logout} />
        <div className={Style.wrapper}>
          <RSB.Button
            extraClass={Style.button}
            htmlType="button"
            children={"Выйти"}
            onClick={(e) => callback(e)}
          />
          <RSB.Button
            extraClass={Style.button}
            htmlType="button"
            children={"Остаться"}
            onClick={(e) => click(e)}
          />
        </div>
      </div>
    </section>
  );
};

export default Logout;
