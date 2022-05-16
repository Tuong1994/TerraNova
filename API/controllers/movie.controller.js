const { Movie } = require("../models");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const getMovieList = async (req, res) => {
  const { isPaging, page, limits, filter, freeText, sortBy } = req.query;
  const pageNumber = parseInt(page);
  const itemPerPage = parseInt(limits);
  try {
    let movieList = [];

    let getSort = () => {
      if (sortBy) {
        if (parseInt(sortBy) === 1) {
          return "DESC";
        } else {
          return "ASC";
        }
      }
    };

    if (filter) {
      if (freeText) {
        movieList = await Movie.findAll({
          order: [["updatedAt", getSort() || "DESC"]],
          where: {
            nameEng: {
              [Op.like]: `%${freeText}%`,
            },
          },
        });
      } else {
        movieList = await Movie.findAll({
          order: [["updatedAt", getSort() || "DESC"]],
        });
      }
    } else if (freeText) {
      movieList = await Movie.findAll({
        order: [["updatedAt", getSort() || "DESC"]],
        where: {
          nameEng: {
            [Op.like]: `%${freeText}%`,
          },
        },
      });
    } else {
      movieList = await Movie.findAll({
        order: [["updatedAt", getSort() || "DESC"]],
      });
    }

    if (isPaging) {
      if (page) {
        const total = movieList.length;
        const start = (pageNumber - 1) * itemPerPage;
        const end = state + itemPerPage;
        const list = movieList.slice(start, end);
        res.status(200).send({
          total: total,
          page: pageNumber,
          limits: itemPerPage,
          movies: list,
        });
      }
    } else {
      res.status(200).send({
        total: total,
        page: 0,
        limits: itemPerPage,
        movies: list,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getMovieDetail = async (req, res) => {
  const { movieId } = req.query;
  try {
    const movieDetail = await Movie.findOne({
      where: {
        id: movieId,
      },
    });
    res.status(200).send(movieDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createMovie = async (req, res) => {
  const {
    nameENG,
    nameVN,
    nameCH,
    descENG,
    descVN,
    descCH,
    duration,
    trailer,
    releaseDay,
  } = req.body;
  try {
    const movieId = "CPLEX_" + Math.floor(Math.random() * 999999999).toString();
    const newMovie = await Movie.create({
      id: movieId,
      nameENG,
      nameVN,
      nameCH,
      descENG,
      descVN,
      descCH,
      duration,
      trailer,
      releaseDay,
    });
    res.status(200).send(newMovie);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateMovie = async (req, res) => {
  const { movieId } = req.query;
  const {
    nameENG,
    nameVN,
    nameCH,
    descENG,
    descVN,
    descCH,
    duration,
    trailer,
    releaseDay,
  } = req.body;
  try {
    await Movie.update(
      {
        nameENG,
        nameVN,
        nameCH,
        descENG,
        descVN,
        descCH,
        duration,
        trailer,
        releaseDay,
      },
      {
        where: {
          id: movieId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeMovie = async (req, res) => {
  const { movieId } = req.query;
  try {
    await Movie.destroy({
      where: {
        id: movieId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getMovieList,
  getMovieDetail,
  createMovie,
  updateMovie,
  removeMovie,
};
