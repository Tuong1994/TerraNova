const { Theater } = require("../models");

const getTheaterList = async (req, res) => {
  try {
    const theaterList = await Theater.findAll({
      order: [["updatedAt", "DESC"]],
    });
    res.status(200).send(theaterList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createTheater = async (req, res) => {
  const { name } = req.body;
  try {
    const theaterId = "TH_" + Math.floor(Math.random() * 999999999).toString();
    const newTheater = await Theater.create({
      id: theaterId,
      name,
    });
    res.status(200).send(newTheater);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTheater = async (req, res) => {
  const { theaterId } = req.query;
  const { name } = req.body;
  try {
    await Theater.update(
      { name },
      {
        where: {
          id: theaterId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeTheater = async (req, res) => {
  const { theaterId } = req.query;
  try {
    await Theater.destroy({
      where: {
        id: theaterId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getTheaterList,
  createTheater,
  updateTheater,
  removeTheater,
};
