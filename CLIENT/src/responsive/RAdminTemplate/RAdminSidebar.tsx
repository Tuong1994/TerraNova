import React from "react";
import { Link } from "react-router-dom";
import { adminMenuENG, adminMenuVN, adminMenuCH } from "../../configs/menuList";
import { ELangs } from "../../interfaces/lang";

interface RAdminSidebarProps {
  lang: string;
}

const RAdminSidebar: React.FunctionComponent<RAdminSidebarProps> = (props) => {
  const { lang } = props;

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

  const renderMenuList = () => {
    return menuList.map((menu: any) => {
      return (
        <Link to={menu.path} key={menu.id} className="link">
          <i className={`link__icon ${menu.icon}`}></i>
          <span className="link__name">{menu.name}</span>
        </Link>
      );
    });
  };
  return (
    <React.Fragment>
      <div className="wrapper__link">{renderMenuList()}</div>
    </React.Fragment>
  );
};

export default RAdminSidebar;
