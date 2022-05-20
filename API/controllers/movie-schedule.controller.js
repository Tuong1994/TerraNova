const { MovieSchedule } = require("../models");

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
  createMovieSchedule,
  updateMovieSchedule,
  removeMovieSchedule,
};
