export interface IComment {
    id?: string;
    commentId?: string;
    body?: string;
    userName?: string;
    userId?: string;
    parentId?: string;
    productId?: string;
    courseId?: string;
    movieId?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  }