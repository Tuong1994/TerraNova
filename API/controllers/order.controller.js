const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { Order } = require("../models");

const getOrderList = async (req, res) => {
  const { page, limits, filter, freeText, sortBy } = req.query;
  const pageNumber = parseInt(page);
  const itemPerPage = parseInt(limits);
  try {
    let orderList = [];

    let getSort = () => {
      if (sortBy) {
        if (parseInt(sortBy) === 1) {
          return "DESC";
        } else {
          return "ASC";
        }
      }
    };

    if (filter && filter !== "all") {
      if (freeText) {
        orderList = await Order.findAll({
          order: [["updatedAt", getSort() || "DESC"]],
          where: {
            status: filter,
            id: {
              [Op.like]: `%${freeText}%`,
            },
          },
        });
      } else {
        orderList = await Order.findAll({
          order: [["updatedAt", getSort() || "DESC"]],
          where: {
            status: filter,
          },
        });
      }
    } else if (freeText) {
      orderList = await Order.findAll({
        order: [["updatedAt", getSort() || "DESC"]],
        where: {
          id: {
            [Op.like]: `%${freeText}%`,
          },
        },
      });
    } else {
      orderList = await Order.findAll({
        order: [["updatedAt", getSort() || "DESC"]],
      });
    }

    if (page) {
      const total = orderList.length;
      const start = (pageNumber - 1) * itemPerPage;
      const end = start + itemPerPage;
      const orders = orderList.slice(start, end);
      res.status(200).send({
        total: total,
        page: pageNumber,
        limits: itemPerPage,
        orders: orders,
      });
    }
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
