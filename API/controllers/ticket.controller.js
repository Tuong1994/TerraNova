const {
  Ticket,
  MovieSchedule,
  Cinema,
  Movie,
  Theater,
  Seat,
} = require("../models");

const getTicketDetail = async (req, res) => {
  const { movieScheduleId } = req.query;
  try {
    const movieScheduleDetail = await MovieSchedule.findOne({
      where: {
        id: movieScheduleId,
      },
    });
    if (movieScheduleDetail) {
      const cinemaDetail = await Cinema.findOne({
        where: {
          id: movieScheduleDetail.cinemaId,
        },
      });
      const theaterDetail = await Theater.findOne({
        where: {
          id: movieScheduleDetail.theaterId,
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
      const movieDetail = await Movie.findOne({
        where: {
          id: movieScheduleDetail.movieId,
        },
      });

      res.send(theaterDetail);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getTicketDetail,
};
