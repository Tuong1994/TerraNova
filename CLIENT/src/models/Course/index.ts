import { ISchedule } from "../CourseSchedule";
import { ILesson } from "../Lesson";

export enum ECourseCategory {
  design = "desgin",
  mindset = "mindset",
  frontEnd = "frontEnd",
  backEnd = "backEnd",
  fullStack = "fullStack",
  mobile = "mobile",
}

export enum EDateType {
  even = 1,
  odd = 2,
  last = 3,
}

export enum EBranch {
  one = 1,
  two = 2,
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
  cost?: number;
  profit?: number;
  price?: number;
  trainingTime?: number;
  lessons?: ILesson[];
  schedules?: ISchedule[];
  categoryId?: string;
  category?: ICourseCategory;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
