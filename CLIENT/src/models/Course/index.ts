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
  descENG?: string;
  descVN?: string;
  image?: string;
  categoryId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
