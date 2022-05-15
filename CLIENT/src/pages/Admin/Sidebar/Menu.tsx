import React from "react";
import {
  adminMenuCH,
  adminMenuENG,
  adminMenuVN,
} from "../../../configs/menuList";
import { Link } from "react-router-dom";
import { ELangs } from "../../../interfaces/lang";

interface MenuProps {
  lang: string;
}

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const { lang } = props;

  const path = document.location.pathname;

  const [menuList, setMenuList] = React.useState<any>([]);

  React.useEffect(() => {
    getMenuByLang();
  }, [lang]);

  const getMenuByLang = () => {
    switch (lang) {
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
  };

  const renderMenu = () => {
    return menuList.map((menu: any) => {
      return (
        <Link
          key={menu.id}
          to={menu.path}
          className={`menu__link ${
            path === menu.path ? "menu__link--active" : ""
          }`}
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
