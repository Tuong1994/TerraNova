const express = require("express");
const {
  getMovieList,
  getMovieDetail,
  createMovie,
  updateMovie,
  removeMovie,
} = require("../controllers/movie.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auths/check-verify.middleware");
const { movieUpload } = require("../middlewares/upload/upload.middleware");
const movieRouter = express.Router();

movieRouter.get("/getMovieList", getMovieList);

movieRouter.get("/getMovieDetail", getMovieDetail);

movieRouter.post(
  "/createMovie",
  authenticate,
  authorize(["ADMIN"]),
  movieUpload(),
  createMovie
);

movieRouter.put(
  "/updateMovie",
  authenticate,
  authorize(["ADMIN"]),
  movieUpload(),
  updateMovie
);

movieRouter.delete(
  "/removeMovie",
  authenticate,
  authorize(["ADMIN"]),
  removeMovie
);

module.exports = {
  movieRouter,
};
