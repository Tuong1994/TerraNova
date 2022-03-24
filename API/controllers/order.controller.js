const { Order } = require("../models");

const getOrderList = async (req, res) => {
  try {
    const orderList = await Order.findAll({
      attributes: [
        ["id", "orderId"],
        "productId",
        "productName",
        "productAmount",
        "userId",
        "userAccount",
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
        "productId",
        "productName",
        "productAmount",
        "userId",
        "userAccount",
      ],
    });
    res.status(200).send(orderDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createOrder = async (req, res) => {
  const { productId, productName, productAmount, userId, userAccount } =
    req.body;
  const orderId = Math.floor(Math.random() * 9999).toString();
  try {
    const newOrder = await Order.create({
      id: `O_${orderId}`,
      productId,
      productName,
      productAmount,
      userId,
      userAccount,
    });
    res.status(200).send(newOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateOrder = async (req, res) => {
  const { orderId } = req.query;
  const { productId, productName, productAmount, userId, userAccount } =
    req.body;
  try {
    await Order.update(
      { productId, productName, productAmount, userId, userAccount },
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
  const {orderId} = req.query;
  try {
    await Order.destroy({
      where: {
        id: orderId,
      }
    });
    res.status(200).send("Remove success")
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getOrderList,
  getOrderDetail,
  createOrder,
  updateOrder,
  removeOrder,
};
