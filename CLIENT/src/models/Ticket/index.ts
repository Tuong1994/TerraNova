import { ISeat } from "./../Seat/index";

export interface IContact {
  email?: string;
  phone?: string;
}
export interface ITicket {
  id?: string;
  ticketId?: string;
  movieScheduleId?: string;
  userId?: string;
  seats?: ISeat[];
  contact?: IContact;
  paymentType?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
