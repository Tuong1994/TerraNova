import * as apiPath from "../../paths";
import axiosClient from "../../axios";
import actions from "../../configs/actions";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import { IRate } from "../../models/Rate";
import { ACCESSTOKEN } from "../../configs/setting";
import { IQueryList } from "../../interfaces/query";
import { getProductDetail } from "./ProductCreators";
import { EModalActionTypes } from "../actionTypes/ModalActionTypes";
import utils from "../../utils";
import { getMovieDetail } from "./MovieCreators";

const token = localStorage.getItem(ACCESSTOKEN) || "";

export const createRate = (
  data: IRate,
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return (dispatch: any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(apiPath.ratePaths.createRate, data, token);
        
        if(utils.checkObjectEmpty(query)) {
          if(query?.productId) {
            dispatch(getProductDetail(query));
          } else if (query?.movieId) {
            dispatch(getMovieDetail(query))
          }
        }
        dispatch(actions.closeButtonLoading);
        dispatch({
          type: EModalActionTypes.CLOSE_RATING_MODAL,
        });
        toast.success(success);
      } catch (error) {
        dispatch(actions.closeButtonLoading);
        toast.error(err);
      }
    });
  };
};
