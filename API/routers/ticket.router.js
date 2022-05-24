const { getTicketDetail } = require("../controllers/ticket.controller");

const express = require("express");
const ticketRouter = express.Router();

ticketRouter.get("/getTicketDetail", getTicketDetail);

module.exports = {
  ticketRouter,
};
