import React from "react";
import { adminMenu } from "../../../configs/menuList";
import { Link } from "react-router-dom";

const Menu: React.FunctionComponent<{}> = (props) => {
  const renderMenu = () => {
    return adminMenu.map((menu, index) => {
      return (
        <Link key={index} to={menu.path} className="menu__link">
          <i className={`link__icon ${menu.icon}`}></i>
          <span className="link__name">{menu.name}</span>
        </Link>
      );
    });
  };
  return <div className="sidebar__menu">{renderMenu()}</div>;
};

export default Menu;
