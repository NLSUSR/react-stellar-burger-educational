import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { iconPropTypes } from "../../utils/prop-types";
import Style from "./AppHeader.module.sass";
import Links from "../hocs/Links/Links.jsx";

const { Logo, BurgerIcon, ListIcon, ProfileIcon } = library;

const AppHeader = () => {
  return (
    <header className={Style.header}>
      <nav className={Style.navigation}>
        <ul className={Style["navigation-list"]}>
          <li className={`${Style["navigation-item"]} pl-5 pt-4 pr-5 pb-4`}>
            <Links
              image={<BurgerIcon type="primary" />}
              text={"Конструктор"}
              link={"#"}
              state={"active"}
            />
          </li>
          <li className={`${Style["navigation-item"]} pl-5 pt-4 pr-5 pb-4`}>
            <Links
              image={<ListIcon type="secondary" />}
              text={"Лента заказов"}
              link={"#"}
              state={"inactive"}
            />
          </li>
          <li className={Style.logo}>
            <Links image={<Logo />} text={""} link={"#"} state="" title="На главную" />
          </li>
          <li className={`${Style["navigation-item"]} pl-5 pt-4 pr-5 pb-4`}>
            <Links
              image={<ProfileIcon type="secondary" />}
              text={"Личный кабинет"}
              link={"#"}
              state={"inactive"}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

[BurgerIcon, ListIcon, ProfileIcon].forEach(item => { item.propTypes = { iconPropTypes } });

Links.propTypes = {
  image: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  state: PropTypes.string,
};

export default AppHeader;
