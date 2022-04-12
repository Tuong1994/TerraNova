const { Carts } = require("../models");

const getCartsList = async (req, res) => {
  try {
    const cartsList = await Carts.findAll({
      order: [["updatedAt", "DESC"]],
      attributes: [["id", "cartsId"], "products", "userId", "createdAt", "updatedAt"],
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
      attributes: [["id", "cartsId"], "products", "userId", "createdAt", "updatedAt"],
    });
    res.status(200).send(cartsDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCarts = async (req, res) => {
  const { products, userId } = req.body;
  try {
    const cartsId = "C_" + Math.floor(Math.random() * 999999999).toString();
    const newCarts = await Carts.create({
      id: cartsId,
      products,
      userId,
    });
    res.status(200).send(newCarts);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCarts = async (req, res) => {
  const { cartsId } = req.query;
  const { products, userId } = req.body;
  try {
    await Carts.update(
      { products, userId },
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
