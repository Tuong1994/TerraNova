import React from "react";
import * as customHooks from "../../hooks/index";
import { headerMenu } from "../../configs/menuList";
import { EMenuName } from "../../interfaces/menu";
import { EUserActionTypes } from "../../redux/actionTypes/UserActionTypes";
import { ELoadingActionTypes } from "../../redux/actionTypes/LoadingActionTypes";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import ButtonLoading from "../../components/Loading/ButtonLoading";
import Carts from "../../components/Carts";

interface IRHeaderMenuProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<boolean>;
}

const RHeaderMenu: React.FunctionComponent<IRHeaderMenuProps> = (props) => {
  const { showMenu, setShowMenu } = props;
  const { account } = useSelector((state: ReducerState) => state.UserReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [menuData, setMenuData] = React.useState<any>([]);
  const [subMenuData, setSubMenuData] = React.useState<boolean>(false);
  const [menuTemplate, setMenuTemplate] = React.useState<any>(headerMenu);
  const [isShow, setIsShow] = React.useState<boolean>(false);

  const menuRef = React.useRef(null);
  const menuSettingRef = React.useRef(null);

  const dispatch = useDispatch();

  React.useEffect(() => {
    setMenuData(headerMenu);
  }, []);

  customHooks.useClickOutSide(menuRef, setShowMenu);
  customHooks.useClickOutSide(menuSettingRef, setIsShow);
  customHooks.useOverFlow(showMenu);

  const handleLogout = () => {
    dispatch({
      type: ELoadingActionTypes.OPEN_BUTTON_LOADING,
    });
    setTimeout(() => {
      dispatch({
        type: EUserActionTypes.LOG_OUT,
      });
      dispatch({
        type: ELoadingActionTypes.CLOSE_BUTTON_LOADING,
      });
    }, 1000);
  };

  const isEmpty = (obj: any) => {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return true;
      }
    }
    return false;
  };

  const renderHeaderMenuData = () => {
    return menuData.map((menu: any, index: number) => {
      let list = [...menuData];
      return (
        <li
          className="menu__list"
          key={menu.menuId}
          onClick={() => {
            if (list[index].active) {
              list[index].active = false;
            } else {
              list[index].active = true;
            }
            setMenuData(list);
          }}
        >
          <span className="list__link">{menu.name}</span>

          {menu.name !== EMenuName.home &&
          menu.name !== EMenuName.contact &&
          menu.name !== EMenuName.aboutUs ? (
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
                      setSubMenuData(subMenuItem.active);
                    }}
                  >
                    <Link to="/" className="list__link">
                      {subMenuItem.name}
                    </Link>
                    <ul
                      className={
                        subMenuData
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
      );
    });
  };

  const renderUserLogin = () => {
    if (isEmpty(account)) {
      return (
        <div className="login__user" ref={menuSettingRef}>
          <Link
            to="/"
            className="user__info"
            onClick={() => {
              setIsShow(!isShow);
            }}
          >
            <img
              className="info__avatar"
              src="../img/avatar.png"
              alt="avatar"
            />
            <span>
              {account?.firstName} {account?.lastName}
            </span>
          </Link>
          <Carts className="wrapper__carts" />
          <div
            className={
              isShow ? "user__setting user__setting--active" : "user__setting"
            }
            ref={menuSettingRef}
          >
            <Link to="/" className="setting__link">
              Account setting
            </Link>
            <div
              className={
                buttonLoading
                  ? "setting__link setting__link--loading"
                  : "setting__link"
              }
              onClick={handleLogout}
            >
              <ButtonLoading />
              <span>Log out</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="login__wrapper">
          <Link to="/signIn" className="wrapper__button">
            Sign in
          </Link>
          <Link to="/signUp" className="wrapper__button">
            Sign up
          </Link>
          <Carts className="wrapper__carts" />
        </div>
      );
    }
  };

  return (
    <div
      className={
        showMenu
          ? "header__responsive header__responsive--active"
          : "header__responsive"
      }
    >
      <div
        className={
          showMenu
            ? "responsive__button responsive__button--active"
            : "responsive__button"
        }
        onClick={() => {
          setShowMenu(false);
        }}
        ref={menuRef}
      >
        <i className="fa fa-times"></i>
      </div>
      <div
        className={
          showMenu
            ? "responsive__wrapper responsive__wrapper--active"
            : "responsive__wrapper"
        }
        ref={menuRef}
      >
        <div className="wrapper__login">{renderUserLogin()}</div>

        <div className="wrapper__line"></div>

        <ul className="wrapper__menu">{renderHeaderMenuData()}</ul>
      </div>
    </div>
  );
};

export default RHeaderMenu;
