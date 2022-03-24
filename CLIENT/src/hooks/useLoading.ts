import React from "react";
import { useDispatch } from "react-redux";
import { ELoadingActionTypes } from "../redux/actionTypes/LoadingActionTypes";

const useLoading = (data?: any) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: ELoadingActionTypes.OPEN_PAGE_LOADING,
    });
    if (data) {
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
