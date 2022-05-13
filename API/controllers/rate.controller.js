const { Rate } = require("../models");

const getRateList = async (req, res) => {
  try {
    const rateList = await Rate.findAll();
    res.status(200).send(rateList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getRateDetail = async (req, res) => {
  const { rateId } = req.query;
  try {
    const rateDetail = await Rate.findOne({
      where: {
        id: rateId,
      },
    });
    res.status(200).send(rateDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createRate = async (req, res) => {
  const { ratePoint, userId, courseId, productId } = req.body;
  try {
    const rateId = "RA_" + Math.floor(Math.random() * 999999999).toString();
    const newRate = await Rate.create({
      id: rateId,
      ratePoint,
      userId,
      courseId,
      productId,
    });
    res.status(200).send(newRate);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateRate = async (req, res) => {
  const { rateId } = req.query;
  const { ratePoint, userId, courseId, productId } = req.body;
  try {
    await Rate.update(
      { ratePoint, userId, courseId, productId },
      {
        where: {
          id: rateId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeRate = async (req, res) => {
  const { rateId } = req.query;
  try {
    await Rate.destroy({
      where: {
        id: rateId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
    getRateList,
    getRateDetail,
    createRate,
    updateRate,
    removeRate,
}
