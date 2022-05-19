export enum EMovieStatus {
  showing = 1,
  comming = 2,
}

export enum EMovieType {
  action = 1,
  comedy = 2,
  sciFi = 3,
  horror = 4,
  thriller = 5,
  drama = 6,
  adventure = 7,
}

export enum EMovieCountry {
  america = 1,
  korean = 2,
  vietnam = 3,
  china = 4,
  england = 5,
  australia = 6,
}

export interface IMovie {
  id?: string;
  movieId?: string;
  nameVN?: string;
  nameENG?: string;
  nameCH?: string;
  descVN?: string;
  descENG?: string;
  descCH?: string;
  image?: string;
  duration?: string;
  trailer?: string;
  releaseDay?: Date | string;
  status?: number;
  type?: number;
  country?: number;
  actors?: string;
  director?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
