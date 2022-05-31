const { Ticket, MovieSchedule, Seat } = require("../models");

const bookTicket = async (req, res) => {
  const { movieScheduleId, seats, userId } = req.body;
  try {
    // const ticketId = "T_" + Math.floor(Math.random() * 999999999).toString();
    // const newBookTicket = await Ticket.create({
    //   id: ticketId,
    //   movieScheduleId,
    //   seats,
    //   userId,
    // });
    const movieScheduleDetail = await MovieSchedule.findOne({
      where: {
        id: movieScheduleId,
      },
      include: [
        {
          model: Seat,
          as: "seats",
          through: {
            attributes: [],
          },
        },
      ],
    });

    if(movieScheduleDetail) {
      for(let i = 0; i < seats.length; i++) {
        const seatId = seats[i].id;
        const index = movieScheduleDetail?.seats?.findIndex(i => i.id === seatId);
        if(index !== -1) {
          // movieScheduleDetail.seats[index].isBooked = true
          // await movieScheduleDetail?.seats?.save();
          console.log(movieScheduleDetail.seats[index].isBooked)
        }
      }
      res.status(200).send(movieScheduleDetail);
    }

  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  bookTicket,
};
