export interface IQueryList {
  page?: number;
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
  productType?: string;
  freeText?: string;
  filter?: string;
  sortBy?: number;
}

export enum ESortBy {
  newest = 1,
  oldest = 2,
}
