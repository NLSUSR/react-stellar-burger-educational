import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import Style from "./AppHeader.module.sass";
import Links from "../hocs/Links/Links.jsx";

const AppHeader = () => {
  const { Logo, BurgerIcon, ListIcon, ProfileIcon } = library;

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

export default AppHeader;
