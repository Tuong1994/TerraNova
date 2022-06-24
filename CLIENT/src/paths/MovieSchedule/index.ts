import { domain } from "../../configs/setting";

export const movieSchedulePaths = {
  getMovieScheduleList: `${domain}/api/movieScheduleManagement/getMovieScheduleList`,
  getMovieScheduleDetail: `${domain}/api/movieScheduleManagement/getMovieScheduleDetail`,
  createMovieSchedule: `${domain}/api/movieScheduleManagement/createMovieSchedule`,
  removeMovieSchedule: `${domain}/api/movieScheduleManagement/removeMovieSchedule`,
};
