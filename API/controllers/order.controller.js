const { Order } = require("../models");

const getOrderList = async (req, res) => {
  try {
    const orderList = await Order.findAll({
      attributes: [
        ["id", "orderId"],
        "amount",
        "note",
        "totalPay",
        "paymentType",
        "status",
        "productIds",
      ],
    });
    res.status(200).send(orderList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getOrderDetail = async (req, res) => {
  const { orderId } = req.query;
  try {
    const orderDetail = await Order.findOne({
      where: {
        id: orderId,
      },
      attributes: [
        ["id", "orderId"],
        "amount",
        "note",
        "totalPay",
        "paymentType",
        "status",
        "productIds",
      ],
    });
    if (orderDetail) {
      res.status(200).send(orderDetail);
    } else {
      res.status(404).send(`Order not found`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const createOrder = async (req, res) => {
  const { amount, note, totalPay, paymentType, status, productIds, userId } =
    req.body;
  const orderId = "O_" + Math.floor(Math.random() * 999999999).toString();
  try {
    const newOrder = await Order.create({
      id: orderId,
      amount,
      note,
      totalPay,
      paymentType,
      status,
      productIds,
      userId,
    });
    res.status(200).send(newOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateOrder = async (req, res) => {
  const { orderId } = req.query;
  const { amount, note, totalPay, paymentType, status, productIds, userId } =
    req.body;
  try {
    await Order.update(
      { amount, note, totalPay, paymentType, status, productIds, userId },
      {
        where: {
          id: orderId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeOrder = async (req, res) => {
  const { orderId } = req.query;
  try {
    await Order.destroy({
      where: {
        id: orderId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getOrderList,
  getOrderDetail,
  createOrder,
  updateOrder,
  removeOrder,
};
