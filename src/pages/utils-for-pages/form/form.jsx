import Style from "./form.module.sass";
import constants from "../../../utils-for-application/constants";
import useForm from "../../../services/hooks/useForm";

import React from "react";
import { useSelector } from "react-redux";
import * as RSB from "@ya.praktikum/react-developer-burger-ui-components";
import { useLocation } from "react-router-dom";

const Form = (props) => {
  const { buttons, code, email, name, password } = props;
  const location = useLocation();
  const user = useSelector((s) => s.user.response?.user);

  const [disabler, setDisabler] = React.useState("enabled");
  const { values, handleChange, setValues } = useForm(
    {
      code: "",
      email: user?.email ?? "",
      name: user?.name ?? "",
      password: "",
    },
    setDisabler
  );

  React.useEffect(() => {
    location.pathname === "/profile"
      ? setDisabler("disabled")
      : setDisabler("enabled");
  }, [setDisabler, location]);

  return (
    <form
      action={"#"}
      className={Style.form}
      onSubmit={(e) => buttons?.submit.submit(e, values)}
      onReset={(e) => buttons?.reset.reset(e, setValues, setDisabler)}
    >
      <fieldset className={Style.fieldset}>
        <RSB.Input
          extraClass={Style[`${name?.state}`] ?? Style.disabled}
          disabled={name?.state === "disabled" ? true : false}
          type={name?.type}
          icon={name?.icon ? "EditIcon" : null}
          placeholder={name?.placeholder}
          onChange={(e) => handleChange(e)}
          name={"name"}
          value={values?.name}
          autoComplete="off"
        />
        <RSB.EmailInput
          extraClass={Style[`${email?.state}`] ?? Style.disabled}
          disabled={email?.state === "disabled" ? true : false}
          type={email?.type}
          icon={email?.icon ? "EditIcon" : null}
          placeholder={email?.placeholder}
          onChange={(e) => handleChange(e)}
          name={"email"}
          value={values?.email}
          autoComplete="off"
        />
        <RSB.PasswordInput
          extraClass={Style[`${password?.state}`] ?? Style.disabled}
          disabled={password?.state === "disabled" ? true : false}
          type={password?.type}
          icon={password?.icon ? "EditIcon" : null}
          placeholder={password?.placeholder}
          onChange={(e) => handleChange(e)}
          name={"password"}
          value={values?.password}
          autoComplete="off"
        />
        <RSB.Input
          extraClass={Style[`${code?.state}`] ?? Style.disabled}
          disabled={code?.state === "disabled" ? true : false}
          type={code?.type}
          placeholder={code?.placeholder}
          onChange={(e) => handleChange(e)}
          name={"code"}
          value={values?.code ?? ""}
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
