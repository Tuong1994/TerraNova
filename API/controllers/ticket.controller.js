const { Ticket, MovieSchedule_Seat } = require("../models");

const getTicketList = async (req, res) => {
  try {
    const ticketList = await Ticket.findAll({
      order: [["updatedAt", "DESC"]],
    });
    res.status(200).send(ticketList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createTicket = async (req, res) => {
  const { movieScheduleId, userId, seats, contact, paymentType } = req.body;
  try {
    const ticketId = "T_" + Math.floor(Math.random() * 999999999).toString();
    const newBookTicket = await Ticket.create({
      id: ticketId,
      movieScheduleId,
      userId,
      seats,
      contact,
      paymentType,
    });
    for (let i = 0; i < seats.length; i++) {
      await MovieSchedule_Seat.update(
        {
          movieSchedule_id: movieScheduleId,
          seat_id: seats[i].id,
          isBooked: true,
        },
        {
          where: {
            movieSchedule_id: movieScheduleId,
            seat_id: seats[i].id,
          },
        }
      );
    }
    res.status(200).send(newBookTicket);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTicket = async (req, res) => {
  const { ticketId } = req.query;
  const { movieScheduleId, seats, userId, contact, paymentType } = req.body;
  try {
    await Ticket.update(
      { movieScheduleId, seats, userId, contact, paymentType },
      {
        where: {
          id: ticketId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeTicket = async (req, res) => {
  const { ticketId } = req.query;
  try {
    const ticketDetail = await Ticket.findOne({
      where: {
        id: ticketId,
      },
    });

    if (ticketDetail) {
      for (let i = 0; i < ticketDetail?.seats?.length; i++) {
        await MovieSchedule_Seat.update(
          {
            movieSchedule_id: ticketDetail?.movieScheduleId,
            seat_id: ticketDetail?.seats[i].id,
            isBooked: false,
          },
          {
            where: {
              movieSchedule_id: ticketDetail?.movieScheduleId,
              seat_id: ticketDetail?.seats[i].id,
            },
          }
        );
      }
      await Ticket.destroy({
        where: {
          id: ticketId,
        },
      });

      res.status(200).send("Remove success");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getTicketList,
  createTicket,
  updateTicket,
  removeTicket,
};
