import React from "react";
import { useDispatch } from "react-redux";
import * as customHook from "../../hooks";
import { LangActionTypes } from "../../redux/actionTypes/LangActionTypes";

interface TranslateProps {
  className?: string;
}

const Translate: React.FunctionComponent<TranslateProps> = (props) => {
  const { className } = props;

  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const menuRef = React.useRef(null);
  const dispatch = useDispatch()

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
        <div className="menu__item" onClick={() => {
          dispatch({
            type: LangActionTypes.CHANGE_VN,
            payload: "VN"
          })
        }}>VN</div>
        <div className="menu__item" onClick={() => {
          dispatch({
            type: LangActionTypes.CHANGE_ENG,
            payload: "ENG"
          })
        }}>ENG</div>
      </div>
    </div>
  );
};

export default Translate;
