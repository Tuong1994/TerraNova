const express = require("express");
const {
  getSeatList,
  createSeat,
  updateSeat,
  removeSeat,
} = require("../controllers/seat.controller");
const seatRouter = express.Router();

seatRouter.get("/getSeatList", getSeatList);

seatRouter.post("/createSeat", createSeat);

seatRouter.put("/updateSeat", updateSeat);

seatRouter.delete("/removeSeat", removeSeat);

module.exports = {
  seatRouter,
};
