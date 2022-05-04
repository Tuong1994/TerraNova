const express = require("express");
const courseRouter = express.Router();
const {
  getCategoryAndCourseList,
  getCourseByCategory,
  getCourseDetail,
  createCourse,
  updateCourse,
  removeCourse,
  getCourseList,
} = require("../controllers/course.controller");
const {
  checkCourseId,
} = require("../middlewares/validations/check-exist.middleware");
const { courseUpload } = require("../middlewares/upload/upload.middleware");
const {
  authenticate,
  authorize,
} = require("../middlewares/auths/check-verify.middleware");

courseRouter.get("/getCategoryAndCourseList", getCategoryAndCourseList);

courseRouter.get("/getCourseList", getCourseList);

courseRouter.get("/getCourseByCategory", getCourseByCategory);

courseRouter.get("/getCourseDetail", getCourseDetail);

courseRouter.post(
  "/createCourse",
  authenticate,
  authorize(["ADMIN"]),
  courseUpload(),
  createCourse
);

courseRouter.put(
  "/updateCourse",
  authenticate,
  authorize(["ADMIN"]),
  checkCourseId,
  courseUpload(),
  updateCourse
);

courseRouter.delete(
  "/removeCourse",
  authenticate,
  authorize(["ADMIN"]),
  checkCourseId,
  removeCourse
);

module.exports = {
  courseRouter,
};
