const { Ticket } = require("../models");

const bookTicket = async (req, res) => {
  const { movieScheduleId, seats, userId } = req.body;
  try {
    const ticketId = "T_" + Math.floor(Math.random() * 999999999).toString();
    const newBookTicket = await Ticket.create({
      id: ticketId,
      movieScheduleId,
      seats,
      userId,
    });
    res.status(200).send(newBookTicket);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  bookTicket,
};
