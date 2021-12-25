import { IQueryList } from "../interfaces/query";

export const ACCESSTOKEN = "accessToken";
export const ACCOUNT = "account";

export const domain = "http://localhost:4000";

export const getListQuery = (query: IQueryList): string => {
  let { page = 1, limits = 10 } = query || ({} as IQueryList);
  let rs = "?";

  page < 1 && (page = 1);
  limits > 10 && (limits = 10);
  limits < 10 && (limits = 10);

  rs += `&page=${page}&limits=${limits}`;
  return rs;
};
