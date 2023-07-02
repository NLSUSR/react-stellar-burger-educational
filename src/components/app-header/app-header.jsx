import Style from "./app-header.module.sass";
import HeaderLinks from "../utils-for-components/header-links/header-links";
import rootActions from "../../services/store/actions/root-action";
import constants from "../../utils-for-application/constants";

import React from "react";
import { v4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import * as RSB from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  const link = useSelector((s) => s.link);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(rootActions.link.default());
  }, [dispatch]);

  const array = [
    {
      class: Style.constructor,
      image: <RSB.BurgerIcon type={link?.constructor.type ?? "secondary"} />,
      text: "Конструктор",
      link: "/",
      state: link?.constructor.state ?? "inactive",
    },
    {
      class: Style.order_feed,
      image: <RSB.ListIcon type={link?.feed.type ?? "secondary"} />,
      text: "Лента заказов",
      link: "/feed",
      state: link?.feed.state ?? "inactive",
    },
    {
      class: Style.logotype,
      image: <RSB.Logo />,
      text: "",
      link: "/",
      state: "",
    },
    {
      class: Style.personal_area,
      image: <RSB.ProfileIcon type={link?.profile.type ?? "secondary"} />,
      text: "Личный кабинет",
      link: "/profile",
      state: link?.profile.state ?? "inactive",
    },
  ];

  return (
    <header className={Style.header}>
      <nav className={Style.navigation}>
        <ul className={Style.list}>
          {array?.map((item) => {
            return (
              <li key={v4()}>
                <HeaderLinks element={item} />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

AppHeader.propTypes = constants.types.appHeader;

export default AppHeader;
