import Style from "./burger-ingredients-menu.module.sass";
import constants from "../../../utils-for-application/constants";

import { v4 } from "uuid";
import * as RSB from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredientsMenu = ({ tabs, current }) => {
  const IntoView = (item) => {
    item.ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ul className={Style.list}>
      {tabs?.map((item) => (
        <li key={v4()} className={Style.name}>
          <RSB.Tab
            active={current === item.type}
            value={item.type}
            onClick={() => IntoView(item)}
          >
            <p className={Style.text}>{item.name}</p>
          </RSB.Tab>
        </li>
      ))}
    </ul>
  );
};

BurgerIngredientsMenu.propTypes = constants.types.burgerIngredientsMenu;

export default BurgerIngredientsMenu;
