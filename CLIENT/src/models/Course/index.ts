export interface ICourseCategory {
  id?: string;
  nameVN?: string;
  nameENG?: string;
  courses?: ICourse[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface ICourse {
  id?: string;
  nameENG?: string;
  nameVN?: string;
  nameCH?: string;
  descENG?: string;
  descVN?: string;
  descCH?: string;
  image?: string;
  price?: number;
  trainingTime?: number;
  categoryId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
