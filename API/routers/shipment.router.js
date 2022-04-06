const express = require("express");
const {
  getShipmentList,
  getShipmentDetail,
  createShipment,
  updateShipment,
  removeShipment,
} = require("../controllers/shipment.controller");
const shipmentRouter = express.Router();


shipmentRouter.get("/getShipmentList", getShipmentList);

shipmentRouter.get("/getShipmenDetail", getShipmentDetail);

shipmentRouter.post("/createShipment", createShipment);

shipmentRouter.put("/updateShipment", updateShipment);

shipmentRouter.delete("/removeShipment", removeShipment);

module.exports = {
  shipmentRouter,
};
