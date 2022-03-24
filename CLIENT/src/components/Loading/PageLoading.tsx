import React from "react";
import * as customHook from "../../hooks/index";
import { useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";

const PageLoading: React.FunctionComponent<{}> = (props) => {
  const { pageLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  customHook.useOverFlow(pageLoading);

  const renderLoading = () => {
    if (pageLoading) {
      return (
        <div className="page-loading">
          <div className="page-loading__item">
            <div className="item__wrapper"></div>
          </div>
          <div className="page-loading__item">
            <div className="item__wrapper item__left">
              <div className="wrapper__content">T</div>
            </div>
          </div>
          <div className="page-loading__item">
            <div className="item__wrapper item__right">
              <div className="wrapper__text">
                <div className="wrapper__inner">ERRA</div>
                <div className="wrapper__inner">NOVA</div>
              </div>
              <div className="wrapper__line">
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="page-loading__item">
            <div className="item__wrapper"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="page-loading page-loading--hide">
          <div className="page-loading__item">
            <div className="item__wrapper item__wrapper--active"></div>
          </div>
          <div className="page-loading__item">
            <div className="item__wrapper item__left item__wrapper--active">
              <div className="wrapper__content">T</div>
            </div>
          </div>
          <div className="page-loading__item">
            <div className="item__wrapper item__right item__wrapper--active">
              <div className="wrapper__text">
                <div className="wrapper__inner">ERRA</div>
                <div className="wrapper__inner">NOVA</div>
              </div>
              <div className="wrapper__line">
                <div className="line"></div>
              </div>
            </div>
          </div>
          <div className="page-loading__item">
            <div className="item__wrapper item__wrapper--active"></div>
          </div>
        </div>
      );
    }
  };
  return <>{renderLoading()}</>;
};

export default PageLoading;
