const express = require("express");
const {
  getMovieScheduleList,
  getMovieScheduleDetail,
  createMovieSchedule,
  updateMovieSchedule,
  removeMovieSchedule,
} = require("../controllers/movie-schedule.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auths/check-verify.middleware");
const movieScheduleRouter = express.Router();


movieScheduleRouter.get("/getMovieScheduleList", getMovieScheduleList);

movieScheduleRouter.get("/getMovieScheduleDetail", getMovieScheduleDetail);

movieScheduleRouter.post(
  "/createMovieSchedule",
  authenticate,
  authorize(["ADMIN"]),
  createMovieSchedule
);

movieScheduleRouter.put(
  "/updateMovieSchedule",
  authenticate,
  authorize(["ADMIN"]),
  updateMovieSchedule
);

movieScheduleRouter.delete(
  "/removeMovieSchedule",
  authenticate,
  authorize(["ADMIN"]),
  removeMovieSchedule
);

module.exports = {
  movieScheduleRouter,
};
