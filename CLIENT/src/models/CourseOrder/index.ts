export interface ICourseOrder {
  id?: string;
  courseOrderId?: string;
  courseId?: string;
  userId?: string;
  register?: {
    name?: string;
    email?: string;
    phone?: string;
    note?: string;
    dateType?: string | number;
    branch?: string | number;
  };
  course?: {
    nameENG?: string;
    nameVN?: string;
    nameCH?: string;
    trainingTime?: number | string;
    price?: number;
  };
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
