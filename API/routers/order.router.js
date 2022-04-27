const express = require("express");
const {
  getOrderList,
  getOrderDetail,
  createOrder,
  updateOrder,
  removeOrder,
} = require("../controllers/order.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auths/check-verify.middleware");
const orderRouter = express.Router();

orderRouter.get("/getOrderList", getOrderList);

orderRouter.get("/getOrderDetail", getOrderDetail);

orderRouter.post("/createOrder", createOrder);

orderRouter.put(
  "/updateOrder",
  authenticate,
  authorize(["ADMIN", "USER"]),
  updateOrder
);

orderRouter.delete(
  "/removeOrder",
  authenticate,
  authorize(["ADMIN", "USER"]),
  removeOrder
);

module.exports = {
  orderRouter,
};
