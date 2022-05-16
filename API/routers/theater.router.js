const express = require("express");
const {
  getTheaterList,
  createTheater,
  updateTheater,
  removeTheater,
} = require("../controllers/theater.controller");
const theaterRouter = express.Router();

theaterRouter.get("/getTheaterList", getTheaterList);

theaterRouter.post("/createTheater", createTheater);

theaterRouter.put("/updateTheater", updateTheater);

theaterRouter.delete("/removeTheater", removeTheater);

module.exports = {
  theaterRouter,
};
