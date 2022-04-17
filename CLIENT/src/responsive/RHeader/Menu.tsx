import React from "react";
import { ILangs } from "../../interfaces/lang";

interface MenuProps {
  menu: any;
  langs: ILangs;
  setShowProductMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCourseMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const { menu, langs, setShowCourseMenu, setShowProductMenu } = props;

  const handleShowSubMenu = (menu: any) => {
    if (menu.name === langs?.headerMenu.product) {
      setShowProductMenu(true);
    } else if (menu.name === langs?.headerMenu.course) {
      setShowCourseMenu(true);
    }
  };

  return (
    <React.Fragment>
      <li className="list__inner" key={menu.menuId}>
        <span className="inner__link">{menu.name}</span>
        {menu.name !== langs?.headerMenu.home &&
        menu.name !== langs?.headerMenu.movie &&
        menu.name !== langs?.headerMenu.aboutUs ? (
          <span
            className="inner__icon"
            onClick={() => {
              handleShowSubMenu(menu);
            }}
          >
            <i className="fa-solid fa-angle-right"></i>
          </span>
        ) : null}
      </li>
    </React.Fragment>
  );
};

export default Menu;
