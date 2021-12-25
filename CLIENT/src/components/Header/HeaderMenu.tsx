import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { headerMenu } from "../../configs/menuList";
import { EMenuName } from "../../interfaces/menu";
import { getMenuList } from "../../redux/actionCreators/MenuCreators";
import { ReducerState } from "../../redux/store";

const HeaderMenu: React.FunctionComponent<{}> = (props) => {
  const { menuList } = useSelector((state: ReducerState) => state.MenuReducer);
  const [tabActive, setTabActive] = React.useState<number>(1);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getMenuList());
  }, []);

  const isEmpty = (obj: any) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  };

  const renderSubMenuData = (data: any) => {
    if (data.name === EMenuName.product) {
      return (
        <div className="list__submenu">
          <div className="submenu__tabs">
            {data.subMenu?.map((subMenu: any, index: number) => {
              return (
                <Link
                  to={subMenu.path}
                  className="tabs__title"
                  key={subMenu.subMenuId || index}
                  onMouseEnter={() => {
                    setTabActive(index);
                  }}
                >
                  {subMenu.name}
                </Link>
              );
            })}
          </div>
          <div className="submenu__content">
            {data.subMenu?.map((subMemu: any, index: number) => {
              return (
                <div
                  className={
                    tabActive === index
                      ? "content__inner content__inner--active"
                      : "content__inner"
                  }
                  key={index}
                >
                  {subMemu.categoryMenu?.map((category: any, index: number) => {
                    return (
                      <Link to="/" className="inner__link" key={index}>
                        {category.name}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      );
    } else if (data.name === EMenuName.course) {
      return (
        <ul className="list__dropdown">
          {data.subMenu?.map((subMenu: any, index: number) => {
            return (
              <li className="dropdown__list" key={index}>
                <Link to={subMenu.path} className="list__link">
                  {subMenu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
  };

  const renderMenuData = () => {
    return menuList.map((menu, index) => {
      return (
        <li className="menu__list" key={menu.menuId || index}>
          <Link to={menu.path} className="list__link">
            {menu.name}
          </Link>
          {menu.name === EMenuName.home ||
          menu.name === EMenuName.aboutUs ||
          menu.name === EMenuName.contact
            ? null
            : renderSubMenuData(menu)}
        </li>
      );
    });
  };

  const renderMenuTemplate = () => {
    return headerMenu.map((menu, index) => {
      return (
        <li className="menu__list" key={index}>
          <Link to={menu.path} className="list__link">
            {menu.name}
          </Link>
          {menu.name === EMenuName.home ||
          menu.name === EMenuName.aboutUs ||
          menu.name === EMenuName.contact ? null : (
            <ul className="list__dropdown">
              {menu.subMenu?.map((subMenu, index) => {
                return (
                  <li className="dropdown__list" key={index}>
                    <Link to={subMenu.path} className="list__link">
                      {subMenu.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <ul className="header__menu">
      {isEmpty(menuList) ? renderMenuData() : renderMenuTemplate()}
    </ul>
  );
};

export default HeaderMenu;
