import * as library from "@ya.praktikum/react-developer-burger-ui-components";
import Style from "./app-header.module.sass";
import Links from "../util-components/links/links.jsx";
import { v4 as uuidv4 } from "uuid";

const AppHeader = () => {
  const { Logo, BurgerIcon, ListIcon, ProfileIcon } = library;

  const array = [
    {
      class: `${Style["navigation-item"]} pl-5 pt-4 pr-5 pb-4`,
      image: <BurgerIcon type="primary" />,
      text: "Конструктор",
      link: "#",
      state: "active",
    },
    {
      class: `${Style["navigation-item"]} pl-5 pt-4 pr-5 pb-4`,
      image: <ListIcon type="secondary" />,
      text: "Лента заказов",
      link: "#",
      state: "inactive",
    },
    {
      class: Style.logo,
      image: <Logo />,
      text: "",
      link: "#",
      state: "",
    },
    {
      class: `${Style["navigation-item"]} pl-5 pt-4 pr-5 pb-4`,
      image: <ProfileIcon type="secondary" />,
      text: "Личный кабинет",
      link: "#",
      state: "inactive",
    },
  ];

  return (
    <header className={Style.header}>
      <nav className={Style.navigation}>
        <ul className={Style["navigation-list"]}>
          {array.map((item) => {
            return (
              <li key={uuidv4()} className={item.class}>
                <Links
                  image={item.image}
                  text={item.text}
                  link={item.link}
                  state={item.state}
                />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
