import React from "react";
import axiosClient from "../../axios";
import * as apiPath from "../../paths";
import { IQueryList } from "../../interfaces/query";
import { Dispatch } from "redux";
import { ACCESSTOKEN, getListQuery } from "../../configs/setting";
import { ECommentActionTypes } from "../actionTypes/CommentActionTypes";
import { IComment } from "../../models/Comment";
import { getProductDetail } from "./ProductCreators";
import { getMovieDetail } from "./MovieCreators";
import actions from "../../configs/actions";

const token = localStorage.getItem(ACCESSTOKEN) || "";

export const getCommentList = (query: IQueryList) => {
  return async (dispatch: Dispatch) => {
    try {
      const result = await axiosClient.get(
        apiPath.commentPaths.getCommentList,
        getListQuery(query as IQueryList)
      );
      dispatch({
        type: ECommentActionTypes.GET_COMMENT_LIST,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createComment = (
  data: IComment,
  query: IQueryList,
  setState?: React.Dispatch<React.SetStateAction<any>>
) => {
  return (dispatch: any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.post(apiPath.commentPaths.createComment, data, token);
        if (query.productId) {
          dispatch(getProductDetail(query));
        } else if (query.movieId) {
          dispatch(getMovieDetail(query));
        }
        setState && setState(null);
        dispatch(actions.closeButtonLoading);
      } catch (error) {
        console.log(error);
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};

export const updateComment = (
  query: IQueryList,
  data: IComment,
  setState?: React.Dispatch<React.SetStateAction<any>>
) => {
  return (dispatch: any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.put(
          apiPath.commentPaths.updateComment,
          getListQuery(query as IQueryList),
          data,
          token
        );
        if (query.productId) {
          dispatch(getProductDetail(query));
        } else if (query.movieId) {
          dispatch(getMovieDetail(query));
        }
        setState && setState(null);
        dispatch(actions.closeButtonLoading);
      } catch (error) {
        console.log(error);
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};

export const removeComment = (query: IQueryList) => {
  return (dispatch: any) => {
    dispatch(actions.openButtonLoading);
    setTimeout(async () => {
      try {
        await axiosClient.delete(
          apiPath.commentPaths.removeComment,
          getListQuery(query as IQueryList),
          token
        );
        if (query.productId) {
          dispatch(getProductDetail(query));
        } else if (query.movieId) {
          dispatch(getMovieDetail(query));
        }
        dispatch(actions.closeButtonLoading);
      } catch (error) {
        console.log(error);
        dispatch(actions.closeButtonLoading);
      }
    }, 1000);
  };
};
