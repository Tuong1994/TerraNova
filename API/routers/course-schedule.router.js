const express = require("express");
const {
  getCourseScheduleList,
  getCourseScheduleDetail,
  createCourseSchedule,
  updateCourseSchedule,
  removeCourseSchedule,
} = require("../controllers/course-schedule.controller");
const courseScheduleRouter = express.Router();


courseScheduleRouter.get("/getCourseScheduleList", getCourseScheduleList);

courseScheduleRouter.get("/getCourseScheduleDetail", getCourseScheduleDetail);

courseScheduleRouter.post("/createCourseSchedule", createCourseSchedule);

courseScheduleRouter.put("/updateCourseSchedule", updateCourseSchedule);

courseScheduleRouter.delete("/removeCourseSchedule", removeCourseSchedule);

module.exports = {
  courseScheduleRouter,
};
