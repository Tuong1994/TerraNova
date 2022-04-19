import React from "react";
import { useDispatch } from "react-redux";
import { ELangs, ILangs } from "../../interfaces/lang";
import { ELangActionTypes } from "../../redux/actionTypes/LangActionTypes";
import { ELoadingActionTypes } from "../../redux/actionTypes/LoadingActionTypes";

interface LangMenuProps {
  langs: ILangs;
  isShow: boolean;
  onHide(): void;
  onHideMenu(): void;
}

const LangMenu: React.FunctionComponent<LangMenuProps> = (props) => {
  const { langs, isShow, onHide, onHideMenu } = props;

  const dispatch = useDispatch();

  const langList = [
    {
      id: 1,
      title: langs?.translate.VN,
      key: ELangs.VN,
    },
    {
      id: 2,
      title: langs?.translate.ENG,
      key: ELangs.ENG,
    },
    {
      id: 3,
      title: langs?.translate.CH,
      key: ELangs.CH,
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
    <div className={`menu__lang ${isShow ? "menu__lang--active" : ""}`}>
      <div className="lang__icon" onClick={onHide}>
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div className="lang__list">
        {langList?.map((item: any) => {
          return (
            <div
              className="list__link"
              key={item.id}
              onClick={() => {
                changeLang(item.key);
                onHide();
                onHideMenu();
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LangMenu;
