import { ICarts } from "../Carts";
import { IOrder } from "./../Order/index";
import { ICourseOrder } from "../CourseOrder";

export enum EGender {
  male = 1,
  female = 2,
}
export interface IUser {
  id?: string;
  account?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  ward?: string | number;
  district?: string | number;
  province?: string | number;
  birthDay?: string;
  gender?: string | number;
  role?: string;
  orders?: IOrder[];
  carts?: ICarts[];
  courses?: ICourseOrder[];
}
