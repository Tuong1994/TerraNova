const { MovieSchedule, Cinema, Movie, Theater, Seat } = require("../models");

const getMovieScheduleList = async (req, res) => {
  try {
    const movieScheduleList = await MovieSchedule.findAll({
      order: [["updatedAt", "DESC"]],
    });
    res.status(200).send(movieScheduleList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getMovieScheduleDetail = async (req, res) => {
  const { movieScheduleId } = req.query;
  try {
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
      });
      const movieDetail = await Movie.findOne({
        where: {
          id: movieScheduleDetail.movieId,
        },
      });

      if (cinemaDetail && theaterDetail && movieDetail) {
        const movieInfo = {
          cinemaId: cinemaDetail.id,
          cinemaName: cinemaDetail.name,
          address: cinemaDetail.address,
          movieId: movieDetail.id,
          movieNameENG: movieDetail.nameENG,
          movieNameVN: movieDetail.nameVN,
          movieNameCH: movieDetail.nameCH,
          theaterId: theaterDetail.id,
          theaterName: theaterDetail.name,
          schedules: movieScheduleDetail.showtime,
        };
        res.send({
          id: movieScheduleDetail.id,
          movieInfo: movieInfo,
          seats: movieScheduleDetail.seats,
        });
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const createMovieSchedule = async (req, res) => {
  const { showtime, movieId } = req.body;
  try {
    const movieScheduleId =
      "MS_" + Math.floor(Math.random() * 999999999).toString();
    const newMovieSchedule = await MovieSchedule.create({
      id: movieScheduleId,
      showtime,
      movieId,
    });
    res.status(200).send(newMovieSchedule);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateMovieSchedule = async (req, res) => {
  const { movieScheduleId } = req.query;
  const { showtime, movieId } = req.body;
  try {
    await MovieSchedule.update(
      { showtime, movieId },
      {
        where: {
          id: movieScheduleId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeMovieSchedule = async (req, res) => {
  const { movieScheduleId } = req.query;
  try {
    await MovieSchedule.destroy({
      where: {
        id: movieScheduleId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getMovieScheduleList,
  getMovieScheduleDetail,
  createMovieSchedule,
  updateMovieSchedule,
  removeMovieSchedule,
};
