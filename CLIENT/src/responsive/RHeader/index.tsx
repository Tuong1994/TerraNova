import React from "react";
import * as customHooks from "../../hooks/index";
import { Link } from "react-router-dom";
import { headerMenuEng, headerMenuVN } from "../../configs/menuList";
import { EUserActionTypes } from "../../redux/actionTypes/UserActionTypes";
import { ELoadingActionTypes } from "../../redux/actionTypes/LoadingActionTypes";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { ELangActionTypes } from "../../redux/actionTypes/LangActionTypes";
import { history } from "../../App";
import Carts from "../../components/Carts";
import Menu from "./Menu";
import LoggedIn from "./LoggedIn";
import ProductMenu from "./ProductMenu";
import utils from "../../utils";
import CourseMenu from "./CourseMenu";

interface IRHeaderMenuProps {
  showMenu: boolean;
  setShowMenu: React.Dispatch<boolean>;
}

const RHeaderMenu: React.FunctionComponent<IRHeaderMenuProps> = (props) => {
  const { showMenu, setShowMenu } = props;

  const { user } = useSelector((state: ReducerState) => state.UserReducer);
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [menuList, setMenuList] = React.useState<any>([]);
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [showProductMenu, setShowProductMenu] = React.useState<boolean>(false);
  const [showCourseMenu, setShowCourseMenu] = React.useState<boolean>(false);

  const menuRef = React.useRef(null);
  const menuSettingRef = React.useRef(null);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  React.useEffect(() => {
    if (lang === "ENG") {
      setMenuList(headerMenuEng);
    } else if (lang === "VN") {
      setMenuList(headerMenuVN);
    }
  }, [lang]);

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
      history.push("/");
    }, 1000);
  };

  const activeLoading = () => {
    dispatch({
      type: ELoadingActionTypes.OPEN_PAGE_LOADING,
    });
    setTimeout(() => {
      dispatch({
        type: ELoadingActionTypes.CLOSE_PAGE_LOADING,
      });
    }, 2000);
  };

  const renderHeaderMenu = () => {
    return (
      <div className="menu__list">
        {menuList.map((menu: any, index: number) => {
          return (
            <Menu
              key={index}
              menu={menu}
              langs={langs}
              setShowCourseMenu={setShowCourseMenu}
              setShowProductMenu={setShowProductMenu}
            />
          );
        })}
        ;
      </div>
    );
  };

  const renderUserLogin = () => {
    if (utils.checkObjectEmpty(user)) {
      return (
        <LoggedIn
          menuRef={menuSettingRef}
          user={user}
          isShow={isShow}
          langs={langs}
          handleLogout={handleLogout}
          setIsShow={setIsShow}
        />
      );
    } else {
      return (
        <div className="login__wrapper">
          <Link to="/signIn" className="wrapper__button">
            {langs?.form.signIn}
          </Link>
          <Link to="/signUp" className="wrapper__button">
            {langs?.form.signUp}
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
      {/* Close Button */}
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

      {/* Sidebar */}
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

        <ul className="wrapper__menu">
          {renderHeaderMenu()}
          <ProductMenu
            menu={menuList}
            isShow={showProductMenu}
            onHide={() => setShowProductMenu(false)}
            onHideMenu={() => setShowMenu(false)}
          />
          <CourseMenu
            menu={menuList}
            isShow={showCourseMenu}
            onHide={() => setShowCourseMenu(false)}
            onHideMenu={() => setShowMenu(false)}
          />
        </ul>

        <div className="wrapper__line"></div>

        <div className="wrapper__translate">
          <div
            className="translate__button"
            onClick={() => {
              activeLoading();
              setTimeout(() => {
                dispatch({
                  type: ELangActionTypes.CHANGE_VN,
                  payload: "VN",
                });
              }, 1000);
            }}
          >
            VN
          </div>
          <div
            className="translate__button"
            onClick={() => {
              activeLoading();
              setTimeout(() => {
                dispatch({
                  type: ELangActionTypes.CHANGE_ENG,
                  payload: "ENG",
                });
              }, 1000);
            }}
          >
            ENG
          </div>
        </div>
      </div>
    </div>
  );
};

export default RHeaderMenu;
