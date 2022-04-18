import React from "react";
import * as customHook from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { ELangActionTypes } from "../../redux/actionTypes/LangActionTypes";
import { ELoadingActionTypes } from "../../redux/actionTypes/LoadingActionTypes";
import { ReducerState } from "../../redux/store";
import utils from "../../utils";

interface TranslateProps {
  className?: string;
}

const Translate: React.FunctionComponent<TranslateProps> = (props) => {
  const { className } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const menuRef = React.useRef(null);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

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

  customHook.useClickOutSide(menuRef, setShowMenu);

  return (
    <div className={`translate ${className ? className : ""}`}>
      <i
        className="fa-solid fa-globe translate__icon"
        onClick={() => setShowMenu(!showMenu)}
        ref={menuRef}
      ></i>
      <div
        className={
          showMenu
            ? "translate__menu translate__menu--active"
            : "translate__menu"
        }
      >
        <div
          className="menu__item"
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
          {langs?.translate.VN}
        </div>
        <div
          className="menu__item"
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
          {langs?.translate.ENG}
        </div>
      </div>
    </div>
  );
};

export default Translate;
