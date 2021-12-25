import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReducerState } from "../../redux/store";
import { EUserActionTypes } from "../../redux/actionTypes/UserActionTypes";
import Carts from "../Carts/Carts";
import * as customHook from "../../hooks/index";
import Spinner from "../Spinner/Spinner";
import { ELoadingActionTypes } from "../../redux/actionTypes/LoadingActionTypes";

const HeaderLogin: React.FunctionComponent<{}> = (props) => {
  const { account } = useSelector((state: ReducerState) => state.UserReducer);
  const { isLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const menuSettingRef = React.useRef<any>(null);

  customHook.useClickOutSide(menuSettingRef, setIsShow);

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

  const renderLoginInfo = () => {
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
          <Carts />
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
                isLoading
                  ? "setting__link setting__link--loading"
                  : "setting__link"
              }
              onClick={handleLogout}
            >
              <Spinner />
              <span>Log out</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="login__wrapper">
          <Link to="/signIn" className="button--round">
            Sign in
          </Link>
          <Link to="/signUp" className="button--round">
            Sign up
          </Link>
          <Carts />
        </div>
      );
    }
  };

  return <div className="header__login">{renderLoginInfo()}</div>;
};

export default HeaderLogin;
