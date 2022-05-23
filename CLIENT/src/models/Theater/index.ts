import { IMovieSchedule } from "../MovieSchedule";

export interface ITheater {
  id?: string;
  theaterId?: string;
  name?: string;
  schedules?: IMovieSchedule[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
