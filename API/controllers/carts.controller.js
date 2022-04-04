const { Carts } = require("../models");

const getCartsList = async (req, res) => {
  try {
    const cartsList = await Carts.findAll({
      attributes: [
        ["id", "cartsId"],
        "productId",
        "productName",
        "price",
        "amount",
      ],
    });
    res.status(200).send(cartsList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCartsDetail = async (req, res) => {
  const { cartsId } = req.query;
  try {
    const cartsDetail = await Carts.findOne({
      where: {
        id: cartsId,
      },
      attributes: [
        ["id", "cartsId"],
        "productId",
        "productName",
        "price",
        "amount",
      ],
    });
    res.status(200).send(cartsDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCarts = async (req, res) => {
  const { productId, productName, amount, price } = req.body;
  try {
    const cartsId = "C_" + Math.floor(Math.random() * 999999999).toString();
    const newCarts = await Carts.create({
      id: cartsId,
      productId,
      productName,
      amount,
      price,
    });
    res.status(200).send(newCarts);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCarts = async (req, res) => {
  const { cartsId } = req.query;
  const { productId, productName, amount, price } = req.body;
  try {
    await Carts.update(
      { productId, productName, amount, price },
      {
        where: {
          id: cartsId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeCarts = async (req, res) => {
  const { cartsId } = req.query;
  try {
    await Carts.destroy({
      where: {
        id: cartsId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getCartsList,
  getCartsDetail,
  createCarts,
  updateCarts,
  removeCarts,
};
