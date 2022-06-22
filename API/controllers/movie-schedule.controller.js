const {
  MovieSchedule,
  Cinema,
  Movie,
  Theater,
  Seat,
  MovieSchedule_Seat,
} = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const getMovieScheduleList = async (req, res) => {
  const { page, limits, freeText, sortBy } = req.query;
  const pageNumber = parseInt(page);
  const itemPerPage = parseInt(limits);
  try {
    let movieScheduleList = [];

    const getSort = () => {
      if (sortBy) {
        if (parseInt(sortBy) === 1) {
          return "DESC";
        } else {
          return "ASC";
        }
      }
    };

    if (freeText) {
      movieScheduleList = await MovieSchedule.findAll({
        order: [["updatedAt", getSort() || "DESC"]],
        where: {
          showtime: {
            [Op.like]: `%${freeText}%`,
          },
        },
        include: [
          {
            model: Movie,
            as: "movie",
          },
          {
            model: Cinema,
            as: "cinema",
          },
        ],
      });
    } else {
      movieScheduleList = await MovieSchedule.findAll({
        order: [["updatedAt", "DESC"]],
        include: [
          {
            model: Movie,
            as: "movie",
          },
          {
            model: Cinema,
            as: "cinema",
          },
        ],
      });
    }

    if (page) {
      const total = movieScheduleList.length;
      const start = (pageNumber - 1) * itemPerPage;
      const end = start + itemPerPage;
      const schedules = movieScheduleList.slice(start, end);
      res.status(200).send({
        total: total,
        page: pageNumber,
        limits: itemPerPage,
        schedules: schedules,
      });
    }
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
      const scheduleSeatList = await MovieSchedule_Seat.findAll({
        where: {
          movieSchedule_id: movieScheduleId,
          isBooked: true,
        },
      });

      let seatList = [];
      if (scheduleSeatList?.length > 0) {
        const idArr = scheduleSeatList.map((i) => {
          return i.seat_id;
        });

        seatList = idArr?.reduce((arr, item) => {
          const index = arr.findIndex((i) => i.id === item);
          if (index !== -1) {
            arr[index].isBooked = true;
          }
          return arr;
        }, movieScheduleDetail.seats);
      }

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
        if (seatList.length > 0) {
          res.send({
            id: movieScheduleDetail.id,
            movieInfo: movieInfo,
            seats: seatList,
          });
        } else {
          res.send({
            id: movieScheduleDetail.id,
            movieInfo: movieInfo,
            seats: movieScheduleDetail.seats,
          });
        }
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const createMovieSchedule = async (req, res) => {
  const { showtime, movieId, cinemaId, theaterId } = req.body;
  try {
    const movieScheduleId =
      "MS_" + Math.floor(Math.random() * 999999999).toString();
    const newMovieSchedule = await MovieSchedule.create({
      id: movieScheduleId,
      showtime,
      movieId,
      cinemaId,
      theaterId,
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
