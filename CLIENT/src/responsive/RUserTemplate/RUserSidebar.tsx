import React from "react";
import { Link } from "react-router-dom";
import { userMenuENG } from "../../configs/menuList";

interface RUserSidebarProps {}

const RUserSidebar: React.FunctionComponent<RUserSidebarProps> = (props) => {
  const renderMenu = () => {
    return userMenuENG.map((menu) => {
      return (
        <Link className="wrapper__link" to={menu.path} key={menu.id}>
          <i className={menu.icon}></i>
        </Link>
      );
    });
  };

  return <div className="user-sidebar__responsive">
      <div className="responsive__wrapper">{renderMenu()}</div>
  </div>;
};

export default RUserSidebar;
