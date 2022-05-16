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
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
