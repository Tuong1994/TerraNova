const express = require("express");
const {
  getLessonList,
  getLessonDetail,
  createLesson,
  updateLesson,
  removeLesson,
} = require("../controllers/lesson.controller");
const lessonRouter = express.Router();


lessonRouter.get("/getLessonList", getLessonList);

lessonRouter.get("/getLessonDetail", getLessonDetail);

lessonRouter.post("/createLesson", createLesson);

lessonRouter.put("/updateLesson", updateLesson);

lessonRouter.delete("/removeLesson", removeLesson);

module.exports = {
  lessonRouter,
};
