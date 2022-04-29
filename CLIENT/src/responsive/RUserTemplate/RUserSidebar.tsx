import React from "react";
import { useSelector } from "react-redux";
import { userMenuENG } from "../../configs/menuList";
import { Link } from "react-router-dom";
import { ERole } from "../../models/User";
import { ReducerState } from "../../redux/store";

interface RUserSidebarProps {}

const RUserSidebar: React.FunctionComponent<RUserSidebarProps> = (props) => {
  const { user } = useSelector((state: ReducerState) => state.UserReducer);

  const renderMenu = () => {
    return userMenuENG.map((menu) => {
      return (
        <Link className="list__link" to={menu.path} key={menu.id}>
          <i className={menu.icon}></i>
        </Link>
      );
    });
  };

  return (
    <div className="user-sidebar__responsive">
      <div className="responsive__wrapper">
        <div className="wrapper__list">{renderMenu()}</div>
        {user && user?.role === ERole.admin && (
          <Link to="/admin" className="wrapper__admin">
            <i className="fa-solid fa-user-shield"></i>
          </Link>
        )}
      </div>
    </div>
  );
};

export default RUserSidebar;
