import "./application.module.sass";
import Allocator from "../../services/hocs/allocator";
import rootDispatcher from "../../services/store/dispatchers/root-dispacher";

import React from "react";
import { useDispatch } from "react-redux";

const Application = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(rootDispatcher.getData());
  }, []);

  React.useEffect(() => {
    dispatch(rootDispatcher.checkAuthorization());
  }, []);

  return <Allocator />;
};

export default Application;
