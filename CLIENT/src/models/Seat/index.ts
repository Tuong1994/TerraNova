export enum ESeatType {
  regular = 1,
  vip = 2,
}
export interface ISeat {
  id?: string;
  seatId?: string;
  name?: string;
  lineName?: string;
  type?: number;
  isBooked?: boolean;
  price?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
