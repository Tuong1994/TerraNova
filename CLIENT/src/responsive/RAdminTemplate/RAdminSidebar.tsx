import React from "react";
import { Link } from "react-router-dom";
import { adminMenu } from "../../configs/menuList";

const RAdminSidebar: React.FunctionComponent<{}> = (props) => {
  const renderMenuList = () => {
    return adminMenu.map((menu, index) => {
      return (
        <Link to={menu.path} key={index} className="link">
          <i className={`link__icon ${menu.icon}`}></i>
          <span className="link__name">{menu.name}</span>
        </Link>
      );
    });
  };
  return (
    <div className="menu__wrapper">
      <div className="wrapper__link">{renderMenuList()}</div>
    </div>
  );
};

export default RAdminSidebar;
