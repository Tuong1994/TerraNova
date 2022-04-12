const { Order } = require("../models");

const getOrderList = async (req, res) => {
  try {
    const orderList = await Order.findAll({
      attributes: [
        ["id", "orderId"],
        "note",
        "totalPay",
        "paymentType",
        "shipmentType",
        "shipmentFee",
        "shipmentDetail",
        "status",
        "products",
        "userId",
        "createdAt",
        "updatedAt",
      ],
      order: [["updatedAt", "DESC"]],
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
        "note",
        "totalPay",
        "paymentType",
        "shipmentType",
        "shipmentFee",
        "shipmentDetail",
        "status",
        "products",
        "userId",
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
  const {
    note,
    totalPay,
    paymentType,
    shipmentType,
    shipmentFee,
    status,
    products,
    shipmentDetail,
    userId,
  } = req.body;
  const orderId = "O_" + Math.floor(Math.random() * 999999999).toString();
  try {
    const newOrder = await Order.create({
      id: orderId,
      note,
      totalPay,
      status,
      paymentType,
      shipmentType,
      shipmentFee,
      shipmentDetail,
      products,
      userId,
    });
    res.status(200).send(newOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateOrder = async (req, res) => {
  const { orderId } = req.query;
  const {
    note,
    totalPay,
    shipmentType,
    shipmentFee,
    status,
    products,
    shipmentDetail,
    userId,
  } = req.body;
  try {
    await Order.update(
      {
        note,
        totalPay,
        status,
        shipmentType,
        shipmentFee,
        shipmentDetail,
        products,
        userId,
      },
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
