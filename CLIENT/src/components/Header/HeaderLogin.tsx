import React from "react";
import * as customHook from "../../hooks/index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReducerState } from "../../redux/store";
import { EUserActionTypes } from "../../redux/actionTypes/UserActionTypes";
import { ELoadingActionTypes } from "../../redux/actionTypes/LoadingActionTypes";
import { history } from "../../App";
import { ERole } from "../../models/User";
import ButtonLoading from "../Loading/ButtonLoading";
import utils from "../../utils";

const HeaderLogin: React.FunctionComponent<{}> = (props) => {
  const { user } = useSelector((state: ReducerState) => state.UserReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const menuSettingRef = React.useRef<any>(null);
  const dispatch = useDispatch();

  customHook.useClickOutSide(menuSettingRef, setIsShow);

  const langs = utils.changeLang(lang);

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

  const renderLoginInfo = () => {
    if (utils.checkObjectEmpty(user)) {
      return (
        <div className="login__user" ref={menuSettingRef}>
          <div
            className="user__info"
            onClick={() => {
              setIsShow(!isShow);
            }}
          >
            <img
              className="info__avatar"
              src={user?.avatar || "/img/avatar.png"}
              alt="avatar"
            />
            <span>
              {user?.firstName} {user?.lastName}
            </span>
          </div>

          {/* User setting */}
          <div
            className={
              isShow ? "user__setting user__setting--active" : "user__setting"
            }
            ref={menuSettingRef}
          >
            {user && user?.role === ERole.admin && (
              <Link to="/admin" className="setting__link">
                <i className="fa-solid fa-user-shield"></i>
                <span>{langs?.headerMenu.admin}</span>
              </Link>
            )}

            <Link to="/user" className="setting__link">
              <i className="fa-solid fa-gear"></i>
              <span>{langs?.headerMenu.accountSetting}</span>
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
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <span>{langs?.headerMenu.logOut}</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="login__wrapper">
          <Link to="/signIn" className="button--round">
            {langs?.headerMenu.signIn}
          </Link>
          <Link to="/signUp" className="button--round">
            {langs?.headerMenu.signUp}
          </Link>
        </div>
      );
    }
  };

  return <div className="features__login">{renderLoginInfo()}</div>;
};

export default HeaderLogin;
