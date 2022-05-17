import { IMovie } from "../Movie";

export interface ICinema {
  id?: string;
  cinemaId?: string;
  name?: string;
  address?: string;
  cineplexId?: string;
  movies?: IMovie[];
  movieList?: IMovie[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
