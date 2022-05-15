const express = require("express");
const {
  getCineplexDetail,
  getCineplexList,
  createCineplex,
  updateCineplex,
  removeCineplex,
} = require("../controllers/cineplex.controller");
const cineplexRouter = express.Router();

cineplexRouter.get("/getCineplexList", getCineplexList);

cineplexRouter.get("/getCineplexDetail", getCineplexDetail);

cineplexRouter.post("/createCineplex", createCineplex);

cineplexRouter.put("/updateCineplex", updateCineplex);

cineplexRouter.delete("/removeCineplex", removeCineplex);

module.exports = {
  cineplexRouter,
};
