import React from "react";
import * as customHook from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { ELangActionTypes } from "../../redux/actionTypes/LangActionTypes";
import { ELoadingActionTypes } from "../../redux/actionTypes/LoadingActionTypes";
import { ReducerState } from "../../redux/store";
import { ELangs } from "../../interfaces/lang";
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

  customHook.useClickOutSide(menuRef, setShowMenu);

  const langs = utils.changeLang(lang);

  const langList = [
    {
      id: 1,
      title: langs?.translate.VN,
      key: ELangs.VN,
      imgSrc: "/img/flags/VN.png",
    },
    {
      id: 2,
      title: langs?.translate.ENG,
      key: ELangs.ENG,
      imgSrc: "/img/flags/ENG.png",
    },
    {
      id: 3,
      title: langs?.translate.CH,
      key: ELangs.CH,
      imgSrc: "/img/flags/CH.png",
    },
  ];

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

  const changeLang = (v: string) => {
    activeLoading();
    if (v === ELangs.VN) {
      setTimeout(() => {
        dispatch({
          type: ELangActionTypes.CHANGE_VN,
          payload: ELangs.VN,
        });
      }, 1000);
    } else if (v === ELangs.ENG) {
      setTimeout(() => {
        dispatch({
          type: ELangActionTypes.CHANGE_ENG,
          payload: ELangs.ENG,
        });
      }, 1000);
    } else if (v === ELangs.CH) {
      setTimeout(() => {
        dispatch({
          type: ELangActionTypes.CHANGE_CH,
          payload: ELangs.CH,
        });
      }, 1000);
    }
  };

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
        {langList.map((item) => {
          return (
            <div
              key={item.id}
              className="menu__item"
              onClick={() => changeLang(item.key)}
            >
              <span className="item__title">{item.title}</span>
              <div className="item__flag">
                <img src={item.imgSrc} alt={item.title} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Translate;
