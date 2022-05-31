const express = require("express");
const ticketRouter = express.Router();
const { bookTicket } = require("../controllers/ticket.controller");
const {
  authenticate,
} = require("../middlewares/auths/check-verify.middleware");

ticketRouter.post("/bookTicket",
//  authenticate, 
 bookTicket);

module.exports = {
  ticketRouter,
};
