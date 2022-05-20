const express = require("express");
const {
  getCineplexDetail,
  getCineplexList,
  createCineplex,
  updateCineplex,
  removeCineplex,
} = require("../controllers/cineplex.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auths/check-verify.middleware");
const cineplexRouter = express.Router();

cineplexRouter.get("/getCineplexList", getCineplexList);

cineplexRouter.get("/getCineplexDetail", getCineplexDetail);

cineplexRouter.post(
  "/createCineplex",
  authenticate,
  authorize(["ADMIN"]),
  createCineplex
);

cineplexRouter.put(
  "/updateCineplex",
  authenticate,
  authorize(["ADMIN"]),
  updateCineplex
);

cineplexRouter.delete(
  "/removeCineplex",
  authenticate,
  authorize(["ADMIN"]),
  removeCineplex
);

module.exports = {
  cineplexRouter,
};
