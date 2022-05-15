import React from "react";
import { Link } from "react-router-dom";
import { userMenuENG, userMenuVN, userMenuCH } from "../../../configs/menuList";
import { ELangs } from "../../../interfaces/lang";

interface MenuProps {
  lang: string;
}

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const { lang } = props;
  const path = document.location.pathname;

  const [menuList, setMenuList] = React.useState<any>([]);

  React.useEffect(() => {
    if (lang) {
      getMenuByLang();
    }
  }, [lang]);

  const getMenuByLang = () => {
    switch (lang) {
      case ELangs.ENG: {
        setMenuList(userMenuENG);
        break;
      }
      case ELangs.VN: {
        setMenuList(userMenuVN);
        break;
      }
      case ELangs.CH: {
        setMenuList(userMenuCH);
        break;
      }
    }
  };

  const renderMenu = () => {
    return menuList.map((item: any) => {
      return (
        <Link
          key={item.id}
          to={item.path}
          className={`menu__link ${
            path === item.path ? "menu__link--active" : ""
          }`}
        >
          {item.name}
        </Link>
      );
    });
  };

  return <div className="sidebar__menu">{renderMenu()}</div>;
};

export default Menu;
