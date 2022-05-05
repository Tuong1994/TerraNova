const express = require("express");
const {
  getCourseScheduleList,
  getCourseScheduleDetail,
  createCourseSchedule,
  updateCourseSchedule,
  removeCourseSchedule,
} = require("../controllers/course-schedule.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auths/check-verify.middleware");
const courseScheduleRouter = express.Router();

courseScheduleRouter.get("/getCourseScheduleList", getCourseScheduleList);

courseScheduleRouter.get("/getCourseScheduleDetail", getCourseScheduleDetail);

courseScheduleRouter.post(
  "/createCourseSchedule",
  authenticate,
  authorize(["ADMIN"]),
  createCourseSchedule
);

courseScheduleRouter.put(
  "/updateCourseSchedule",
  authenticate,
  authorize(["ADMIN"]),
  updateCourseSchedule
);

courseScheduleRouter.delete(
  "/removeCourseSchedule",
  authenticate,
  authorize(["ADMIN"]),
  removeCourseSchedule
);

module.exports = {
  courseScheduleRouter,
};
