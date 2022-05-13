import React from "react";
import { history } from "../../../../App";
import { ACCESSTOKEN } from "../../../../configs/setting";
import { useDispatch, useSelector } from "react-redux";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import { ReducerState } from "../../../../redux/store";
import utils from "../../../../utils";

interface ProductRateProps {}

const ProductRate: React.FunctionComponent<ProductRateProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  return (
    <div className="rate__wrapper">
      <div
        className="wrapper__star"
        onClick={() => {
          if (!localStorage.getItem(ACCESSTOKEN)) {
            history.push("/signIn");
          } else {
            dispatch({
              type: EModalActionTypes.OPEN_RATING_MODAL,
            });
          }
        }}
      >
        {[...Array(5)].map((star: any, i: number) => {
          return (
            <label className="star__item" key={i}>
              <i className="fas fa-star" style={{ color: "#e4e5e9" }}></i>
            </label>
          );
        })}
      </div>
      <div className="wrapper__content">
        <p>0/5 - (1 {langs?.rate.voted})</p>
      </div>
    </div>
  );
};

export default ProductRate;
