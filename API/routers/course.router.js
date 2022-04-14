const express = require("express");
const courseRouter = express.Router();
const {
  getCategoryAndCourseList,
  getCourseByCategory,
  getCourseDetail,
  createCourse,
} = require("../controllers/course.controller");

courseRouter.get("/getCategoryAndCourseList", getCategoryAndCourseList);

courseRouter.get("/getCourseByCategory", getCourseByCategory);

courseRouter.get("/getCourseDetail", getCourseDetail);

courseRouter.post("/createCourse", createCourse);

module.exports = {
  courseRouter,
};
