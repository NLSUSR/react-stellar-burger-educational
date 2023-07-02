import Style from "./header-links.module.sass";
import constants from "../../../utils-for-application/constants";

import { useNavigate } from "react-router-dom";

const HeaderLinks = ({ element }) => {
  const navigate = useNavigate();

  const link = () => {
    navigate(element.link, { replace: true });
  };

  const state = () => {
    return element.state === "active"
      ? "#F2F2F3"
      : element.state === "inactive"
      ? "#8585AD"
      : null;
  };

  return (
    <section className={element.class} onClick={link}>
      <div className={Style.link}>
        {element.image}
        <p className={Style.text} style={{ color: state() }}>
          {element.text}
        </p>
      </div>
    </section>
  );
};

HeaderLinks.propTypes = constants.types.headerLinks;

export default HeaderLinks;
