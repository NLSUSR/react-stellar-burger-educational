import Style from "./application.module.sass";
import Allocator from "../../services/hocs/allocator";
import rootDispatcher from "../../services/store/dispatchers/root-dispacher";

import React from "react";
import { useDispatch } from "react-redux";
import AppHeader from "../app-header/app-header";
import rootActions from "../../services/store/actions/root-action";

const Application = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(rootDispatcher.getData());
  }, []);

  React.useEffect(() => {
    dispatch(rootDispatcher.checkAuthorization());
  }, []);

  React.useEffect(() => {
    document.location.pathname === "/"
      ? dispatch(rootActions.link.constructor(true))
      : dispatch(rootActions.link.default());
  }, []);

  return (
    <section className={Style.container}>
      <AppHeader />
      <div className={Style.content}>
        <Allocator />
      </div>
    </section>
  );
};

export default Application;
