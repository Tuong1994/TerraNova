import axiosClient from "../../axios";
import * as apiPath from "../../paths";
import { IQueryList } from "./../../interfaces/query";
import { IDescription } from "../../models/Product";
import { toast } from "react-toastify";
import { getListQuery } from "./../../configs/setting";
import { getProductDetail } from "./ProductCreators";

export const createDescription = (
  query: IQueryList,
  data: IDescription,
  success?: string,
  err?: string
) => {
  return async (dispatch: any) => {
    try {
      await axiosClient.post(apiPath.descriptionPaths.createDescription, data);
      dispatch(getProductDetail(query));
      toast.success(success);
    } catch (error) {
      toast.error(err);
    }
  };
};

export const removeDescription = (
  query: IQueryList,
  success?: string,
  err?: string
) => {
  return async (dispatch: any) => {
    try {
      await axiosClient.delete(
        apiPath.descriptionPaths.removeDescription,
        getListQuery(query as IQueryList)
      );
      dispatch(getProductDetail(query));
      toast.success(success);
    } catch (error) {
      toast.error(err);
    }
  };
};
