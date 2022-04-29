import React from "react";
import { adminMenuCH, adminMenuENG, adminMenuVN } from "../../../configs/menuList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { ESideBarActionTypes } from "../../../redux/actionTypes/SideBarActionTypes";
import { ELangs } from "../../../interfaces/lang";

interface MenuProps {
  lang: string;
}

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const { lang } = props;

  const path = document.location.pathname;
  const id = path.slice(1, path.length);

  const { menuId } = useSelector((state: ReducerState) => state.SideBarReducer);

  const [menuList, setMenuList] = React.useState<any>([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    getMenuByLang();
  }, [lang]);

  const getMenuByLang = () => {
    switch(lang) {
      case ELangs.ENG: {
        setMenuList(adminMenuENG);
        break;
      }
      case ELangs.VN: {
        setMenuList(adminMenuVN);
        break;
      }
      case ELangs.CH: {
        setMenuList(adminMenuCH);
        break;
      }
    }
  }

  const handleChangeMenu = (menu: any) => {
    dispatch({
      type: ESideBarActionTypes.ADD_ID,
      payload: menu.id,
    });
  };

  const renderMenu = () => {
    return menuList.map((menu: any) => {
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
