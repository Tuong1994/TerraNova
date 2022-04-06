import React from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../models/User";
import Carts from "../../components/Carts";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import ButtonLoading from "../../components/Loading/ButtonLoading";

interface LoggedInProps {
  menuRef: any;
  account?: IUser | null;
  isShow: boolean;
  handleLogout(): void;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoggedIn = (props: LoggedInProps, ref: any) => {
  const { menuRef, account, isShow, setIsShow, handleLogout } = props;

  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  return (
    <div className="login__user" ref={menuRef}>
      <Link
        to="/"
        className="user__info"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        <img className="info__avatar" src="../img/avatar.png" alt="avatar" />
        <span>
          {account?.firstName} {account?.lastName}
        </span>
      </Link>
      <Carts className="wrapper__carts" />
      <div
        className={
          isShow ? "user__setting user__setting--active" : "user__setting"
        }
        ref={menuRef}
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
};

export default React.forwardRef(LoggedIn);
