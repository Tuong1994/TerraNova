import React from "react";
import * as customHook from "../../hooks/index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReducerState } from "../../redux/store";
import { EUserActionTypes } from "../../redux/actionTypes/UserActionTypes";
import { ELoadingActionTypes } from "../../redux/actionTypes/LoadingActionTypes";
import utils from "../../utils";
import Carts from "../Carts";
import ButtonLoading from "../Loading/ButtonLoading";

const HeaderLogin: React.FunctionComponent<{}> = (props) => {
  const { account } = useSelector((state: ReducerState) => state.UserReducer);
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
    }, 1000);
  };

  const renderLoginInfo = () => {
    if (utils.checkObjectEmpty(account)) {
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
          <Carts />
          <div
            className={
              isShow ? "user__setting user__setting--active" : "user__setting"
            }
            ref={menuSettingRef}
          >
            <Link to="/" className="setting__link">
              {langs?.headerMenu.accountSetting}
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
          <Carts />
        </div>
      );
    }
  };

  return <div className="features__login">{renderLoginInfo()}</div>;
};

export default HeaderLogin;
