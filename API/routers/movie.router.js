const express = require("express");
const {
  getMovieList,
  getMovieDetail,
  createMovie,
  updateMovie,
  removeMovie,
} = require("../controllers/movie.controller");
const movieRouter = express.Router();

movieRouter.get("/getMovieList", getMovieList);

movieRouter.get("/getMovieDetail", getMovieDetail);

movieRouter.post("/createMovie", createMovie);

movieRouter.put("/updateMovie", updateMovie);

movieRouter.delete("/removeMovie", removeMovie);

module.exports = {
  movieRouter,
};
