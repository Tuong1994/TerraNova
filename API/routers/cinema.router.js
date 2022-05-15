const express = require("express");
const { getCinemaList, getCinemaDetail, createCinema, updateCinema, removeCinema } = require("../controllers/cinema.controller");
const cinemaRouter = express.Router();

cinemaRouter.get("/getCinemaList", getCinemaList);

cinemaRouter.get("/getCinemaDetail", getCinemaDetail);

cinemaRouter.post("/createCinema", createCinema);

cinemaRouter.put("/updateCinema", updateCinema);

cinemaRouter.delete("/removeCinema", removeCinema)

module.exports = {
  cinemaRouter,
};
