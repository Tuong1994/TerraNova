import React from "react";
import { adminMenu } from "../../../configs/menuList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { ESideBarActionTypes } from "../../../redux/actionTypes/SideBarActionTypes";

const Menu: React.FunctionComponent<{}> = (props) => {
  const path = document.location.pathname;
  const id = path.slice(1, path.length);

  const { menuId } = useSelector((state: ReducerState) => state.SideBarReducer);

  const dispatch = useDispatch();

  const handleChangeMenu = (menu: any) => {
    dispatch({
      type: ESideBarActionTypes.ADD_ID,
      payload: menu.id
    })
  };

  const renderMenu = () => {
    return adminMenu.map((menu) => {
      return (
        <Link
          key={menu.id}
          to={menu.path}
          className={`menu__link ${
            menuId === menu.id ? "menu__link--active" : ""
          }`}
          onClick={() => handleChangeMenu(menu)}
        >
          <i className={`link__icon ${menu.icon}`}></i>
          <span className="link__name">{menu.name}</span>
        </Link>
      );
    });
  };
  return <div className="sidebar__menu">{renderMenu()}</div>;
};

export default Menu;
