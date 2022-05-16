const { Seat } = require("../models");

const getSeatList = async (req, res) => {
  try {
    const seatList = await Seat.findAll({
      order: [["updatedAt", "DESC"]],
    });
    res.status(200).send(seatList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createSeat = async (req, res) => {
  const { name, type, price, isBooked } = req.body;
  try {
    const seatId = "SE_" + Math.floor(Math.random() * 999999999).toString();
    const newSeat = await Seat.create({
      id: seatId,
      name,
      type,
      price,
      isBooked,
    });
    res.status(200).send(newSeat);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateSeat = async (req, res) => {
  const { seatId } = req.query;
  const { name, type, price, isBooked } = req.body;
  try {
    await Seat.update(
      { name, type, price, isBooked },
      {
        where: {
          id: seatId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeSeat = async (req, res) => {
  const { seatId } = req.query;
  try {
    await Seat.destroy({
      where: {
        id: seatId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getSeatList,
  createSeat,
  updateSeat,
  removeSeat,
};
