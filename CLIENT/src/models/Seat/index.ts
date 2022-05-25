export interface ISeat {
  id?: string;
  seatId?: string;
  name?: string;
  type?: number;
  isBooked?: boolean;
  price?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
