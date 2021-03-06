const {
  Cineplex,
  Cinema,
  Theater,
  Movie,
  MovieSchedule,
  Rate,
  Comment,
  Cinema_Movie,
} = require("../models");
const { domain, calRatePoint } = require("../setting/setting");
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
            nameENG: {
              [Op.like]: `%${freeText}%`,
            },
          },
          include: [
            {
              model: Rate,
              as: "rates",
            },
          ],
        });
      } else {
        movieList = await Movie.findAll({
          order: [["updatedAt", getSort() || "DESC"]],
          where: {
            status: filter,
          },
          include: [
            {
              model: Rate,
              as: "rates",
            },
          ],
        });
      }
    } else if (freeText) {
      movieList = await Movie.findAll({
        order: [["updatedAt", getSort() || "DESC"]],
        where: {
          nameENG: {
            [Op.like]: `%${freeText}%`,
          },
        },
        include: [
          {
            model: Rate,
            as: "rates",
          },
        ],
      });
    } else {
      movieList = await Movie.findAll({
        order: [["updatedAt", getSort() || "DESC"]],
        include: [
          {
            model: Rate,
            as: "rates",
          },
        ],
      });
    }

    let movies = [];
    if (movieList.length > 0) {
      movies = movieList.map((m) => {
        let ratePoint = 0;
        if (m.rates.length > 0) {
          ratePoint = calRatePoint(m.rates);
        }
        return {
          id: m.id,
          nameENG: m.nameENG,
          nameVN: m.nameVN,
          nameCH: m.nameCH,
          descENG: m.descENG,
          descVN: m.descVN,
          descCH: m.descCH,
          image: m.image,
          duration: m.duration,
          trailer: m.trailer,
          releaseDay: m.releaseDay,
          status: m.status,
          type: m.type,
          actors: m.actors,
          director: m.director,
          country: m.country,
          createdAt: m.createdAt,
          updatedAt: m.updatedAt,
          ratePoint: ratePoint,
        };
      });
    }

    if (isPaging) {
      if (page) {
        const total = movies.length;
        const start = (pageNumber - 1) * itemPerPage;
        const end = start + itemPerPage;
        const list = movies.slice(start, end);
        res.status(200).send({
          total: total,
          page: pageNumber,
          limits: itemPerPage,
          movies: list,
        });
      }
    } else {
      res.status(200).send({
        total: movies.length,
        page: 0,
        limits: itemPerPage,
        movies: movies,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getMovieDetail = async (req, res) => {
  const { movieId } = req.query;
  try {
    // const movieDetail = await Movie.findOne({
    //   where: {
    //     id: movieId,
    //   },
    //   include: [
    //     {
    //       model: Cineplex,
    //       as: "cineplexes",
    //       attributes: ["id", "name", "logo"],
    //       through: {
    //         attributes: [],
    //         where: {
    //           movie_id: movieId,
    //         },
    //       },
    //       include: [
    //         {
    //           model: Cinema,
    //           as: "cinemas",
    //           attributes: ["id", "name", "address", "image"],
    //           include: [
    //             {
    //               model: Theater,
    //               as: "theaters",
    //               attributes: ["id", "name"],
    //               include: [
    //                 {
    //                   model: MovieSchedule,
    //                   as: "schedules",
    //                   attributes: ["id", "showTime", "movieId", "theaterId"],
    //                   where: {
    //                     movieId: movieId,
    //                   },
    //                 },
    //               ],
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       model: Rate,
    //       as: "rates",
    //     },
    //     {
    //       model: Comment,
    //       as: "comments",
    //     },
    //   ],
    // });

    // if (movieDetail) {
    //   if (movieDetail.rates.length > 0) {
    //     const ratePoint = calRatePoint(movieDetail.rates);
    //     const movie = {
    //       id: movieDetail.id,
    //       nameENG: movieDetail.nameENG,
    //       nameVN: movieDetail.nameVN,
    //       nameCH: movieDetail.nameCH,
    //       descENG: movieDetail.descENG,
    //       descVN: movieDetail.descVN,
    //       descCH: movieDetail.descCH,
    //       image: movieDetail.image,
    //       duration: movieDetail.duration,
    //       trailer: movieDetail.trailer,
    //       releaseDay: movieDetail.releaseDay,
    //       status: movieDetail.status,
    //       type: movieDetail.type,
    //       actors: movieDetail.actors,
    //       director: movieDetail.director,
    //       country: movieDetail.country,
    //       createdAt: movieDetail.createdAt,
    //       updatedAt: movieDetail.updatedAt,
    //       cineplexes: movieDetail.cineplexes || [],
    //       comments: movieDetail.comments || [],
    //       ratePoint: ratePoint,
    //     };
    //     res.status(200).send(movie);
    //   } else {
    //     res.status(200).send(movieDetail);
    //   }
    // }
    const movieDetail = await Movie.findOne({
      where: {
        id: movieId,
      },
      include: [
        {
          model: MovieSchedule,
          as: "schedules",
        },
        {
          model: Rate,
          as: "rates",
        },
        {
          model: Comment,
          as: "comments",
        },
      ],
    });

    if (movieDetail) {
      let cineplexes = [];
      if (movieDetail.schedules.length > 0) {
        for (let i = 0; i < movieDetail.schedules.length; i++) {
          const result = await Cineplex.findOne({
            where: {
              id: movieDetail.schedules[i].cineplexId,
            },
            include: [
              {
                model: Cinema,
                as: "cinemas",
                where: {
                  id: movieDetail.schedules[i].cinemaId,
                },
                include: [
                  {
                    model: Theater,
                    as: "theaters",
                    where: {
                      id: movieDetail.schedules[i].theaterId,
                    },
                    through: {
                      attributes: [],
                    },
                    include: [
                      {
                        model: MovieSchedule,
                        as: "schedules",
                        where: {
                          id: movieDetail.schedules[i].id,
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          });
          cineplexes = [...cineplexes, result];
        }
      }

      function duplicateSearch(
        obj,
        fields,
        key,
        list = [],
        duplicate_found = false
      ) {
        if (fields.length == 0) {
          return false;
        } else if (fields.length > 1) {
          for (let row of obj[fields[0]]) {
            duplicate_found = duplicateSearch(
              row,
              fields.slice(1),
              key,
              list,
              duplicate_found
            );
          }
        } else {
          for (let row of obj[fields[0]]) {
            if (list.indexOf(row[key]) == -1) {
              list.push(row[key]);
            } else {
              return true;
            }
          }
        }

        return duplicate_found;
      }

      const ratePoint = calRatePoint(movieDetail.rates);
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
        cineplexes: cineplexes || [],
        comments: movieDetail.comments || [],
        ratePoint: ratePoint,
      };

      console.log(
        duplicateSearch(
          movie,
          ["cineplexes", "cinemas", "theaters"],
          "id"
        )
      );

      res.status(200).send(movie);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const createMovie = async (req, res) => {
  const { file } = req;
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
    actors,
    director,
    status,
    type,
    country,
  } = req.body;
  try {
    let urlImg = "";
    if (file) {
      urlImg = `${domain}/${file.path}`;
    }

    const movieId = "M_" + Math.floor(Math.random() * 999999999).toString();
    const newMovie = await Movie.create({
      id: movieId,
      nameENG,
      nameVN,
      nameCH,
      descENG,
      descVN,
      descCH,
      image: urlImg,
      duration,
      trailer,
      releaseDay,
      actors,
      director,
      status,
      type,
      country,
    });
    res.status(200).send(newMovie);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateMovie = async (req, res) => {
  const { file } = req;
  const { movieId } = req.query;
  const {
    nameENG,
    nameVN,
    nameCH,
    descENG,
    descVN,
    descCH,
    defaultImg,
    duration,
    trailer,
    releaseDay,
    actors,
    director,
    status,
    type,
  } = req.body;
  try {
    let urlImg = "";
    if (file) {
      urlImg = `${domain}/${file.path}`;
    } else {
      urlImg = defaultImg;
    }

    await Movie.update(
      {
        nameENG,
        nameVN,
        nameCH,
        descENG,
        descVN,
        descCH,
        image: urlImg,
        duration,
        trailer,
        releaseDay,
        actors,
        director,
        status,
        type,
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
