import React from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../models/User";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { ILangs } from "../../interfaces/lang";
import Carts from "../../components/Carts";
import ButtonLoading from "../../components/Loading/ButtonLoading";
import Translate from "../../components/Translate";

interface LoggedInProps {
  menuRef: any;
  user?: IUser | null;
  isShow: boolean;
  langs: ILangs;
  handleLogout(): void;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoggedIn = (props: LoggedInProps, ref: any) => {
  const { menuRef, user, isShow, langs, setIsShow, handleLogout } = props;

  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  return (
    <div className="login__user" ref={menuRef}>
      <div
        className="user__info"
        onClick={() => {
          setIsShow(!isShow);
        }}
      >
        <img className="info__avatar" src={`${user?.avatar || "/img/avatar.png"}`} alt="avatar" />
        <span>
          {user?.firstName} {user?.lastName}
        </span>
      </div>
      <Carts className="wrapper__carts" />
      <div
        className={
          isShow ? "user__setting user__setting--active" : "user__setting"
        }
        ref={menuRef}
      >
        <Link to="/user" className="setting__link">
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
};

export default React.forwardRef(LoggedIn);
