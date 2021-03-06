import { IQueryList } from "../interfaces/query";

export const ACCESSTOKEN = "accessToken";
export const ACCOUNT = "account";
export const QUERY = "query";
export const CARTS = "carts";

export const domain = "http://localhost:4000";

export const getListQuery = (query: IQueryList): string => {
  let rs = "?";
  let {
    page = 1,
    limits = 2,
    categoryId,
    producerId,
    productId,
    cartsId,
    userId,
    orderId,
    courseId,
    descId,
    courseOrderId,
    courseScheduleId,
    lessonId,
    commentId,
    cineplexId,
    cinemaId,
    movieId,
    movieScheduleId,
    ticketId,
    productType,
    freeText,
    filter,
    sortBy,
    isPaging,
  } = query || ({} as IQueryList);

  page < 1 && (page = 1);
  limits > 10 && (limits = 10);
  limits < 10 && (limits = 10);

  page && limits && (rs += `&page=${page}&limits=${limits}`);
  categoryId && (rs += `&categoryId=${categoryId}`);
  producerId && (rs += `&producerId=${producerId}`);
  productId && (rs += `&productId=${productId}`);
  cartsId && (rs += `&cartsId=${cartsId}`);
  userId && (rs += `&userId=${userId}`);
  orderId && (rs += `&orderId=${orderId}`);
  courseId && (rs += `&courseId=${courseId}`);
  descId && (rs += `&descId=${descId}`);
  courseOrderId && (rs += `&courseOrderId=${courseOrderId}`);
  courseScheduleId && (rs += `&courseScheduleId=${courseScheduleId}`);
  commentId && (rs += `&commentId=${commentId}`);
  lessonId && (rs += `&lessonId=${lessonId}`);
  productType && (rs += `&productType=${productType}`);
  freeText && (rs += `&freeText=${freeText}`);
  filter && (rs += `&filter=${filter}`);
  sortBy && (rs += `&sortBy=${sortBy}`);
  isPaging && (rs += `&isPaging=${isPaging}`);
  cineplexId && (rs += `&cineplexId=${cineplexId}`);
  cinemaId && (rs += `&cinemaId=${cinemaId}`);
  movieId && (rs += `&movieId=${movieId}`);
  movieScheduleId && (rs += `&movieScheduleId=${movieScheduleId}`);
  ticketId && (rs += `&ticketId=${ticketId}`)
  return rs;
};

