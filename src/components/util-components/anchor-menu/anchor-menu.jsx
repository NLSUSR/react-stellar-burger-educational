import React from "react";
import PropTypes from "prop-types"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Style from "./anchor-menu.module.sass";

const AnchorMenu = ({ tabs }) => {
  const [current, setCurrent] = React.useState("Булки");

  return (
    <ul className={Style.list}>
      {tabs.map((item, index) => (
        <li key={index} className={Style.item}>
          <Tab
            active={current === item.value}
            value={item.value}
            onClick={setCurrent}
            children={<a href={item.id} className={Style.id}>{item.name}</a>}
          />
        </li>
      ))}
    </ul>
  );
};

AnchorMenu.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default AnchorMenu;
