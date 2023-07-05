import Style from "./profile-links.module.sass";
import constants from "../../../utils-for-application/constants";

import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileLinks = ({ message }) => {
  const navigate = useNavigate();
  const link = useSelector((s) => s.link);

  const links = [
    { name: "Профиль", link: "/profile", page: link.profileMenu.state },
    {
      name: "История заказов",
      link: "/profile/orders",
      page: link.history.state,
    },
    { name: "Выход", link: "/logout", page: link.logout.state },
  ];

  const callback = React.useCallback(
    (e, url) => {
      e.preventDefault();
      navigate(url, { replace: true });
    },
    [navigate]
  );

  return (
    <ul className={Style.list}>
      {links?.map((item, index) => {
        return (
          <li key={`profile_links_${index}`} className={Style.item} >
            <a
              className={Style[`${item.page}`] ?? Style.link}
              href={item.link}
              onClick={(e) => callback(e, item.link)}
            >
              {item.name}
            </a>
          </li>
        );
      })}
      <p className={Style.info}>{message}</p>
    </ul>
  );
};

ProfileLinks.propTypes = constants.types.profileLinks;

export default ProfileLinks;
