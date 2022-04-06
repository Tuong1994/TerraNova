import React from "react";
import {Link} from "react-router-dom"
import { ILangs } from "../../interfaces/lang";

interface MenuProps {
    menu: any;
    subMenu: any;
    list: any;
    index: number;
    langs: ILangs;
    setMenu(list: any): void;
    setSubMenu(active: boolean): void;
};

const Menu: React.FunctionComponent<MenuProps> = props => {
    const {menu, subMenu, list, index, langs, setMenu, setSubMenu} = props;

    return <React.Fragment>
        <li
          className="menu__list"
          key={menu.menuId}
          onClick={() => {
            if (list[index].active) {
              list[index].active = false;
            } else {
              list[index].active = true;
            }
            setMenu(list);
          }}
        >
          <span className="list__link">{menu.name}</span>

          {menu.name !== langs?.headerMenu.home &&
          menu.name !== langs?.headerMenu.contact &&
          menu.name !== langs?.headerMenu.aboutUs ? (
            <ul
              className={
                menu.active
                  ? "list__submenu list__submenu--active"
                  : "list__submenu"
              }
            >
              {menu.subMenu?.map((subMenuItem: any, index: number) => {
                return (
                  <li
                    key={index}
                    className="submenu__list"
                    onClick={() => {
                      if (subMenuItem.active === true) {
                        subMenuItem.active = false;
                      } else {
                        subMenuItem.active = true;
                      }
                      setSubMenu(subMenuItem.active);
                    }}
                  >
                    <Link to="/" className="list__link">
                      {subMenuItem.name}
                    </Link>
                    <ul
                      className={
                        subMenu
                          ? "list__inner list__inner--active"
                          : "list__inner"
                      }
                    >
                      {subMenuItem.categoryMenu?.map(
                        (category: any, index: number) => {
                          return (
                            <li
                              className="inner__list"
                              key={category.categoryId}
                            >
                              <Link to="/" className="list__link">
                                {category.name}
                              </Link>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </li>
    </React.Fragment>
}

export default Menu;