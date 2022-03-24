const express = require("express");
const categoryRouter = express.Router();
const {
  getCategoryList,
  getCategoryDetail,
  getCategoryWithProducer,
} = require("../controllers/category.controller");

categoryRouter.get("/getCategoryList", getCategoryList);

categoryRouter.get("/getCategoryDetail", getCategoryDetail);

categoryRouter.get(
  "/getCategoryWithProducer",
  getCategoryWithProducer
);

module.exports = {
  categoryRouter,
};
