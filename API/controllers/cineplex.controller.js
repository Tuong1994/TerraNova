const { Cineplex } = require("../models");

const getCineplexList = async (req, res) => {
  try {
    const cineplexList = await Cineplex.findAll({
      order: [["updatedAt", "DESC"]],
    });
    res.status(200).send(cineplexList);
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
      name
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
