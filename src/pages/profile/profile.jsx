import Style from "./profile.module.sass";
import ProfileLinks from "../utils-for-pages/profile-links/profile-links";
import Form from "../utils-for-pages/form/form";
import rootActions from "../../services/store/actions/root-action";
import rootDispatcher from "../../services/store/dispatchers/root-dispacher";
import constants from "../../utils-for-application/constants";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();

  const user = useSelector((s) => s.user.response?.user ?? "");

  const callback = (e, value) => {
    e.preventDefault();
    dispatch(rootDispatcher.profile(value));
  };

  const resetCallback = (e, setValue, setDisabler) => {
    e.preventDefault();
    setDisabler("disabled");
    setValue({
      code: "",
      email: user?.email ?? "",
      name: user?.name ?? "",
      password: "",
    });
  };

  React.useEffect(() => {
    dispatch(rootActions.link.default());
    dispatch(rootActions.link.profile(true));
    dispatch(rootActions.link.profileMenu(true));
  }, [dispatch]);

  const submit = { state: "submit", name: "Сохранить", submit: callback };
  const reset = { state: "reset", name: "Отменить", reset: resetCallback };

  return (
    <section className={Style.container}>
      <div className={Style.content}>
        <ProfileLinks message={constants.messages.profile} />
        <Form
          {...constants.profileInputs}
          buttons={{ submit: submit, reset: reset }}
        />
      </div>
    </section>
  );
};

export default Profile;
