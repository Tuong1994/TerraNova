const express = require("express");
const {
  getLessonList,
  getLessonDetail,
  createLesson,
  updateLesson,
  removeLesson,
} = require("../controllers/lesson.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auths/check-verify.middleware");
const lessonRouter = express.Router();

lessonRouter.get("/getLessonList", getLessonList);

lessonRouter.get("/getLessonDetail", getLessonDetail);

lessonRouter.post(
  "/createLesson",
  authenticate,
  authorize(["ADMIN"]),
  createLesson
);

lessonRouter.put(
  "/updateLesson",
  authenticate,
  authorize(["ADMIN"]),
  updateLesson
);

lessonRouter.delete(
  "/removeLesson",
  authenticate,
  authorize(["ADMIN"]),
  removeLesson
);

module.exports = {
  lessonRouter,
};
