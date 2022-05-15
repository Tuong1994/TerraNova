export interface IRate {
  id?: string;
  rateId?: string;
  ratePoint?: number;
  note?: string;
  userId?: string;
  courseId?: string;
  productId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
