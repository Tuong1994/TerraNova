export interface ICourseOrder {
    courseId?: string;
    userId?: string;
    register?: {
        name?: string;
        email?: string;
        phone?: string;
        note?: string;
        branch?: string | number;
    }
}