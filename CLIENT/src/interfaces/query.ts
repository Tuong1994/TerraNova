export interface IQueryList {
  isPaging?: boolean;
  page?: number | string;
  limits?: number;
  categoryId?: string;
  producerId?: string;
  productId?: string;
  cartsId?: string;
  userId?: string;
  courseId?: string;
  orderId?: string;
  descId?: string;
  courseOrderId?: string;
  lessonId?: string;
  courseScheduleId?: string;
  commentId?: string;
  cineplexId?: string;
  cinemaId?: string;
  movieId?: string;
  movieScheduleId?: string;
  ticketId?: string;
  productType?: string;
  freeText?: string;
  filter?: string | number;
  sortBy?: number;
}

export enum ESortBy {
  newest = 1,
  oldest = 2,
}
