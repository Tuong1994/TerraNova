const express = require("express");
const ticketRouter = express.Router();
const {
  createTicket,
  getTicketList,
  updateTicket,
  removeTicket,
} = require("../controllers/ticket.controller");
const {
  authenticate,
} = require("../middlewares/auths/check-verify.middleware");

ticketRouter.get("/getTicketList", getTicketList);

ticketRouter.post(
  "/bookTicket",
   authenticate,
  createTicket
);

ticketRouter.put("/updateTicket", updateTicket);

ticketRouter.delete("/removeTicket", authenticate, removeTicket);

module.exports = {
  ticketRouter,
};
