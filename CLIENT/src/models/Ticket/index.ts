import { ISeat } from "./../Seat/index";

export interface ITicket {
  id?: string;
  ticketId?: string;
  movieScheduleId?: string;
  seats?: ISeat[];
  userId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
