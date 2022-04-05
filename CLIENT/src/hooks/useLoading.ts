import React from "react";
import { useDispatch } from "react-redux";
import { ELoadingActionTypes } from "../redux/actionTypes/LoadingActionTypes";
import utils from "../utils";

const useLoading = (data?: any) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: ELoadingActionTypes.OPEN_PAGE_LOADING,
    });
    if (utils.checkObjectEmpty(data) || data?.length > 0) {
      setTimeout(() => {
        dispatch({
          type: ELoadingActionTypes.CLOSE_PAGE_LOADING,
        });
      }, 4000);
    }
    setTimeout(() => {
      dispatch({
        type: ELoadingActionTypes.CLOSE_PAGE_LOADING,
      });
    }, 2000);
  }, []);
};

export default useLoading;
