const {
  Cineplex,
  Cinema,
  Theater,
  Movie,
  MovieSchedule,
  Rate,
} = require("../models");
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

    if (filter && filter !== 0) {
      if (freeText) {
        movieList = await Movie.findAll({
          order: [["updatedAt", getSort() || "DESC"]],
          where: {
            status: filter,
            nameEng: {
              [Op.like]: `%${freeText}%`,
            },
          },
        });
      } else {
        movieList = await Movie.findAll({
          order: [["updatedAt", getSort() || "DESC"]],
          where: {
            status: filter,
          },
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
        const end = start + itemPerPage;
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
        total: movieList.length,
        page: 0,
        limits: itemPerPage,
        movies: movieList,
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
      include: [
        {
          model: Cineplex,
          as: "cineplexes",
          attributes: ["id", "name", "logo"],
          through: {
            attributes: [],
            where: {
              movie_id: movieId,
            },
          },
          include: [
            {
              model: Cinema,
              as: "cinemas",
              attributes: ["id", "name", "address", "image"],
              include: [
                {
                  model: Theater,
                  as: "theaters",
                  attributes: ["id", "name"],
                  through: {
                    attributes: [],
                  },
                  include: [
                    {
                      model: MovieSchedule,
                      as: "schedules",
                      attributes: ["id", "showTime", "movieId", "theaterId"],
                      where: {
                        movieId: movieId,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          model: Rate,
          as: "rates",
        },
      ],
    });
    if (movieDetail) {
      let ratePoint = 0;
      if (movieDetail.rates.length > 0) {
        const fivePointRes = movieDetail.rates.filter((i) => i.ratePoint === 5);
        const fourPointRes = movieDetail.rates.filter((i) => i.ratePoint === 4);
        const threePointRes = movieDetail.rates.filter(
          (i) => i.ratePoint === 3
        );
        const twoPointRes = movieDetail.rates.filter((i) => i.ratePoint === 2);
        const onePointRes = movieDetail.rates.filter((i) => i.ratePoint === 1);
        const totalScores =
          fivePointRes.length * 5 +
          fourPointRes.length * 4 +
          threePointRes.length * 3 +
          twoPointRes.length * 2 +
          onePointRes.length * 1;
        const totalRes =
          fivePointRes.length +
          fourPointRes.length +
          threePointRes.length +
          twoPointRes.length +
          onePointRes.length;
        ratePoint = Math.ceil(totalScores / totalRes);

        const movie = {
          id: movieDetail.id,
          nameENG: movieDetail.nameENG,
          nameVN: movieDetail.nameVN,
          nameCH: movieDetail.nameCH,
          descENG: movieDetail.descENG,
          descVN: movieDetail.descVN,
          descCH: movieDetail.descCH,
          image: movieDetail.image,
          duration: movieDetail.duration,
          trailer: movieDetail.trailer,
          releaseDay: movieDetail.releaseDay,
          status: movieDetail.status,
          type: movieDetail.type,
          actors: movieDetail.actors,
          director: movieDetail.director,
          country: movieDetail.country,
          createdAt: movieDetail.createdAt,
          updatedAt: movieDetail.updatedAt,
          cineplexes: movieDetail.cineplexes || [],
          ratePoint: ratePoint,
        };
        res.status(200).send(movie)
      } else {
        res.status(200).send(movieDetail);
      }
    }
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
