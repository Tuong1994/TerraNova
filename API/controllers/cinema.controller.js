const { Cinema, Movie } = require("../models");

const getCinemaList = async (req, res) => {
  try {
    const cinemaList = await Cinema.findAll({
      order: [["updatedAt", "DESC"]],
      include: [
        {
          model: Movie,
          as: "movies",
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.status(200).send(cinemaList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCinemaDetail = async (req, res) => {
  const { cinemaId } = req.query;
  try {
    const cinemaDetail = await Cinema.findOne({
      where: {
        id: cinemaId,
      },
    });
    res.status(200).send(cinemaDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCinema = async (req, res) => {
  const { name, address } = req.body;
  try {
    const cinemaId = "CINE_" + Math.floor(Math.random() * 999999999).toString();
    const newCinema = await Cinema.create({
      id: cinemaId,
      name,
      address,
    });
    res.status(200).send(newCinema);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCinema = async (req, res) => {
  const { cinemaId } = req.query;
  const { name, address } = req.body;
  try {
    await Cinema.update(
      { name, address },
      {
        where: {
          id: cinemaId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeCinema = async (req, res) => {
  const { cinemaId } = req.query;
  try {
    await Cinema.destroy({
      where: {
        id: cinemaId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getCinemaList,
  getCinemaDetail,
  createCinema,
  updateCinema,
  removeCinema,
};
