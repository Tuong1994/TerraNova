const { bookTicket } = require("../controllers/ticket.controller");
const express = require("express");
const ticketRouter = express.Router();

ticketRouter.post("/bookTicket", bookTicket)

module.exports = {
  ticketRouter,
};
