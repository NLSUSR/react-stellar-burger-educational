import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Style from "./anchor-menu.module.sass";
import { v4 as uuidv4 } from "uuid";

const AnchorMenu = ({ tabs, current }) => {
  const IntoView = (item) => {
    item.ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ul className={Style.list}>
      {tabs.map((item) => (
        <li key={uuidv4()} className={Style.name}>
          <Tab
            active={current === item.type}
            value={item.type}
            onClick={() => IntoView(item)}
          >
            <p className={Style.text}>{item.name}</p>
          </Tab>
        </li>
      ))}
    </ul>
  );
};

AnchorMenu.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  current: PropTypes.string.isRequired,
};

export default AnchorMenu;
