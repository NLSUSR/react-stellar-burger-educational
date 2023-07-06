import Style from "./empty-page.module.sass";
import ProfileLinks from "../utils-for-pages/profile-links/profile-links";
import constants from "../../utils-for-application/constants";
import rootActions from "../../services/store/actions/root-action";

import React from "react";
import { useDispatch } from "react-redux";


const EmptyPage = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(rootActions.link.default());
    dispatch(rootActions.link.profile(true));
    dispatch(rootActions.link.profileMenu(false))
    dispatch(rootActions.link.history(true));
  }, [dispatch]);

  return (
    <section className={Style.container}>
      <div className={Style.content}>
        <ProfileLinks message={constants.messages.history} />
        <div className={Style.history}></div>
      </div>
    </section>
  );
};

export default EmptyPage;
