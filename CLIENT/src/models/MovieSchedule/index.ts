import { ISeat } from "../Seat";

export interface IMovieInfo {
  cinemaId?: string;
  cinemaName?: string;
  address?: string;
  movieId?: string;
  movieNameENG?: string;
  movieNameVN?: string;
  movieNameCH?: string;
  theaterId?: string;
  theaterName?: string;
}
export interface IMovieSchedule {
  id?: string;
  movieScheduleId?: string;
  showTime?: Date | string;
  movieId?: string;
  theaterId?: string;
  cinemaId?: string;
  seats?: ISeat[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IMovieScheduleDetail {
  id?: string;
  seats?: ISeat[];
  movieInfo?: IMovieInfo
}
