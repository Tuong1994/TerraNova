import { ICarts } from "../Carts";
import { IOrder } from "./../Order/index";
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
  birthDay?: string;
  gender?: string;
  role?: string;
  orders?: IOrder[];
  carts?: ICarts[];
}
