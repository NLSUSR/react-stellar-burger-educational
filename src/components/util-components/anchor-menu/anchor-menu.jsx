import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Style from "./anchor-menu.module.sass";

const AnchorMenu = ({ tabs, current }) => {
  return (
    <ul className={Style.list}>
      {tabs.map((item, index) => (
        <li key={index} className={Style.name}>
          <Tab
            active={current === item.type}
            value={item.type}
            onClick={() => {
              item.ref.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
            children={<a className={Style.id}>{item.name}</a>}
          />
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
