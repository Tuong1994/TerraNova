const { Cineplex, Cinema, Movie } = require("../models");

const getCineplexList = async (req, res) => {
  const { page, limits } = req.query;
  const pageNumber = parseInt(page);
  const itemPerPage = parseInt(limits);

  try {
    const cineplexList = await Cineplex.findAll({
      order: [["updatedAt", "DESC"]],
    });
    if (page) {
      const total = cineplexList.length;
      const start = (pageNumber - 1) * itemPerPage;
      const end = start + itemPerPage;
      const list = cineplexList.slice(start, end);
      res.status(200).send({
        total: total,
        page: pageNumber,
        limits: itemPerPage,
        cineplexes: list,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCineplexDetail = async (req, res) => {
  const { cineplexId } = req.query;
  try {
    const cineplexDetail = await Cineplex.findOne({
      where: {
        id: cineplexId,
      },
      include: [
        {
          model: Cinema,
          as: "cinemas",
          attributes: ["id", "name", "image", "address"],
          include: [
            {
              model: Movie,
              as: "movieList",
              attributes: ["id", "nameENG", "nameVN", "nameCH", "image"],
              through: {
                attributes: [],
              },
            },
          ],
        },
      ],
    });
    res.status(200).send(cineplexDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCineplex = async (req, res) => {
  const { name } = req.body;
  try {
    const cineplexId =
      "CPLEX_" + Math.floor(Math.random() * 999999999).toString();
    const newCineplex = await Cineplex.create({
      id: cineplexId,
      name,
    });
    res.status(200).send(newCineplex);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCineplex = async (req, res) => {
  const { cineplexId } = req.query;
  const { name } = req.body;
  try {
    await Cineplex.update(
      { name },
      {
        where: {
          id: cineplexId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeCineplex = async (req, res) => {
  const { cineplexId } = req.query;
  try {
    await Cineplex.destroy({
      where: {
        id: cineplexId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getCineplexList,
  getCineplexDetail,
  createCineplex,
  updateCineplex,
  removeCineplex,
};
