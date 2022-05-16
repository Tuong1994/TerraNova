import { ICinema } from "../Cinema";

export interface ICineplex {
  id?: string;
  cineplexId?: string;
  name?: string;
  logo?: string;
  cinemas?: ICinema[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
