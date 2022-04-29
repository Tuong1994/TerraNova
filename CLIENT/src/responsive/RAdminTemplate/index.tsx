import React from "react";
import * as customHooks from "../../hooks";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import RAdminSidebar from "./RAdminSidebar";

const RAdminTemplate: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [isShow, setIsShow] = React.useState<boolean>(false);

  const menuRef = React.useRef<any>(null);

  customHooks.useClickOutSide(menuRef, setIsShow);

  return (
    <div className="responsive">
      <Logo
        className="responsive__logo"
        leffClassName="logo__left"
        rightClassName="logo__right"
      />

      <div className="responsive__button">
        <Button
          type="button"
          className="button--submit"
          onClick={() => setIsShow(true)}
        >
          <i className="fa fa-bars"></i>
        </Button>
      </div>

      <div
        className={`responsive__menu ${
          isShow ? "responsive__menu--active" : ""
        }`}
      >
        <div className={`menu__close ${isShow ? "menu__close--active" : ""}`}>
          <i className="fa fa-times"></i>
        </div>

        <div
          className={`menu__wrapper ${isShow ? "menu__wrapper--active" : ""}`}
          ref={menuRef}
        >
          <RAdminSidebar lang={lang} />
        </div>

      </div>
    </div>
  );
};

export default RAdminTemplate;
