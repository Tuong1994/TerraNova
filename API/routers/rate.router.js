const express = require("express");
const {
  getRateList,
  getRateDetail,
  createRate,
  updateRate,
  removeRate,
} = require("../controllers/rate.controller");
const rateRouter = express.Router();

rateRouter.get("/getRateList", getRateList);

rateRouter.get("/getRateDetail", getRateDetail);

rateRouter.post("/createRate", createRate);

rateRouter.put("/updateRate", updateRate);

rateRouter.delete("/removeRate", removeRate);

module.exports = {
  rateRouter,
};
