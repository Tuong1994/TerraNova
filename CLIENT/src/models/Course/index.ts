export enum ECourseCategory {
  design = "desgin",
  mindset = "mindset",
  frontEnd = "frontEnd",
  backEnd = "backEnd",
  fullStack = "fullStack",
  mobile = "mobile",
}
export interface ICourseCategory {
  id?: string;
  nameVN?: string;
  nameENG?: string;
  nameCH?: string;
  courses?: ICourse[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface ILesson {
  id?: string;
  lessonId?: string;
  nameENG?: string;
  nameVN?: string;
  nameCH?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export interface ICourse {
  id?: string;
  courseId?: string;
  nameENG?: string;
  nameVN?: string;
  nameCH?: string;
  descENG?: string;
  descVN?: string;
  descCH?: string;
  image?: string;
  price?: number;
  trainingTime?: number;
  lessons?: ILesson[];
  categoryId?: string;
  category?: ICourseCategory;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
