const express = require("express");
const {
  getCinemaList,
  getCinemaDetail,
  createCinema,
  updateCinema,
  removeCinema,
} = require("../controllers/cinema.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auths/check-verify.middleware");
const cinemaRouter = express.Router();

cinemaRouter.get("/getCinemaList", getCinemaList);

cinemaRouter.get("/getCinemaDetail", getCinemaDetail);

cinemaRouter.post(
  "/createCinema",
  authenticate,
  authorize(["ADMIN"]),
  createCinema
);

cinemaRouter.put(
  "/updateCinema",
  authenticate,
  authorize(["ADMIN"]),
  updateCinema
);

cinemaRouter.delete(
  "/removeCinema",
  authenticate,
  authorize(["ADMIN"]),
  removeCinema
);

module.exports = {
  cinemaRouter,
};
