import { IMovie } from "../Movie";
import { ITheater } from "../Theater";

export interface ICinema {
  id?: string;
  cinemaId?: string;
  name?: string;
  address?: string;
  cineplexId?: string;
  movies?: IMovie[];
  movieList?: IMovie[];
  theaters?: ITheater[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
