import { IQueryList } from "../interfaces/query";

export const ACCESSTOKEN = "accessToken";
export const ACCOUNT = "account";

export const domain = "http://localhost:4000";

export const getListQuery = (query: IQueryList): string => {
  let rs = "?";
  let {
    page = 1,
    limits = 2,
    categoryId,
    producerId,
    productId,
  } = query || ({} as IQueryList);

  page < 1 && (page = 1);
  limits > 10 && (limits = 10);
  limits < 10 && (limits = 10);

  page && limits && (rs += `&page=${page}&limits=${limits}`);
  categoryId && (rs += `&categoryId=${categoryId}`);
  producerId && (rs += `&producerId=${producerId}`);
  productId && (rs += `&productId=${productId}`);
  return rs;
};
