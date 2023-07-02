import Style from "./form.module.sass";
import constants from "../../../utils-for-application/constants";

import React from "react";
import { useSelector } from "react-redux";
import * as RSB from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation } from "react-router-dom";

const Form = (props) => {
  const { buttons, code, email, name, password } = props;

  const location = useLocation();

  const user = useSelector((s) => s.user.getUser.response?.user);

  const [value, setValue] = React.useState({
    name: user?.name ?? "",
    email: user?.email ?? "",
    password: "",
  });

  const [disabler, setDisabler] = React.useState("enabled");

  React.useEffect(() => {
    if (location.pathname === "/profile") {
      setDisabler("disabled");
    }
  }, [setDisabler, location]);

  const onChange = (e) => {
    e.preventDefault();
    setDisabler("enabled");
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <form
      action={"#"}
      className={Style.form}
      onReset={(e) => buttons?.reset.reset(e, setValue, setDisabler)}
      onSubmit={(e) => buttons?.submit.submit(e, value)}
    >
      <fieldset className={Style.fieldset}>
        <RSB.Input
          extraClass={Style[`${name?.state}`] ?? Style.disabled}
          disabled={name?.state === "disabled" ? true : false}
          type={name?.type}
          icon={name?.icon ? "EditIcon" : null}
          placeholder={name?.placeholder}
          onChange={(e) => onChange(e)}
          name={"name"}
          value={value?.name}
          autoComplete="off"
        />
        <RSB.EmailInput
          extraClass={Style[`${email?.state}`] ?? Style.disabled}
          disabled={email?.state === "disabled" ? true : false}
          type={email?.type}
          icon={email?.icon ? "EditIcon" : null}
          placeholder={email?.placeholder}
          onChange={(e) => onChange(e)}
          name={"email"}
          value={value?.email}
          autoComplete="off"
        />
        <RSB.PasswordInput
          extraClass={Style[`${password?.state}`] ?? Style.disabled}
          disabled={password?.state === "disabled" ? true : false}
          type={password?.type}
          icon={password?.icon ? "EditIcon" : null}
          placeholder={password?.placeholder}
          onChange={(e) => onChange(e)}
          name={"password"}
          value={value?.password}
          autoComplete="off"
        />
        <RSB.Input
          extraClass={Style[`${code?.state}`] ?? Style.disabled}
          disabled={code?.state === "disabled" ? true : false}
          type={code?.type}
          placeholder={code?.placeholder}
          onChange={(e) => onChange(e)}
          name={"code"}
          value={value?.code ?? ""}
        />
      </fieldset>
      <div className={Style[`${disabler}`]} style={{ flexDirection: "row" }}>
        {buttons.reset?.state === "reset" ? (
          <RSB.Button
            extraClass={Style[`${buttons?.reset.state}`] ?? Style.disabled}
            htmlType="reset"
            type="secondary"
            children={buttons?.reset.name}
            disabled={buttons?.reset.state === "disabled" ? true : false}
          />
        ) : null}
        <RSB.Button
          extraClass={Style[`${buttons?.submit.state}`] ?? Style.disabled}
          htmlType="submit"
          children={buttons?.submit.name}
          disabled={buttons?.submit.state === "disabled" ? true : false}
        />
      </div>
    </form>
  );
};

Form.propTypes = constants.types.form;

export default Form;
