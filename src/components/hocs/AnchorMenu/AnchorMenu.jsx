import React from "react";
import PropTypes from "prop-types"
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Style from "./AnchorMenu.module.sass";

const AnchorMenu = (props) => {
  const { tabs } = props;
  const [current, setCurrent] = React.useState(tabs[0].value);

  return (
    <ul className={Style.list}>
      {tabs.map((item, index) => (
        <li key={index} className={Style.item}>
          <Tab
            active={current === item.value}
            value={item.value}
            onClick={setCurrent}
            children={item.name}
          />
        </li>
      ))}
    </ul>
  );
};

Tab.propTypes = {
  active: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default AnchorMenu;
