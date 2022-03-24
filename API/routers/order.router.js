const express = require("express");
const {
  getOrderList,
  getOrderDetail,
  createOrder,
  updateOrder,
  removeOrder,
} = require("../controllers/order.controller");
const orderRouter = express.Router();

orderRouter.get("/getOrderList", getOrderList);

orderRouter.get("/getOrderDetail", getOrderDetail);

orderRouter.post("/createOrder", createOrder);

orderRouter.put("/updateOrder", updateOrder);

orderRouter.delete("/removeOrder", removeOrder);

module.exports = {
  orderRouter,
};
