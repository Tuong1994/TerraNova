import { domain } from "../../configs/setting";

export const courseSchedulePaths = {
    getCourseScheduleList: `${domain}/api/courseScheduleManagement/getCourseScheduleList`,
    getCourseScheduleDetail: `${domain}/api/courseScheduleManagement/getCourseScheduleDetail`,
    createCourseSchedule: `${domain}/api/courseScheduleManagement/createCourseSchedule`,
    updateCourseSchedule: `${domain}/api/courseScheduleManagement/updateCourseSchedule`,
    removeCourseSchedule: `${domain}/api/courseScheduleManagement/removeCourseSchedule`,
}