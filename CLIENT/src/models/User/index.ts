import { ICarts } from "../Carts";
import { IOrder } from "./../Order/index";
import { ICourseOrder } from "../CourseOrder";
import { ITicket } from "../Ticket";

export enum EGender {
  male = 1,
  female = 2,
}

export enum ERole {
  admin = "ADMIN",
  user = "USER",
}
export interface IUser {
  id?: string;
  userId?: string;
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
  avatar?: string;
  role?: string;
  orders?: IOrder[];
  carts?: ICarts[];
  tickets?: ITicket[];
  courses?: ICourseOrder[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
