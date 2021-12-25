const express = require("express");
const categoryRouter = express.Router();
const {
  getCategoryList,
  getCategoryDetail,
} = require("../controllers/category.controller");

categoryRouter.get("/getCategoryList", getCategoryList);

categoryRouter.get("/getCategoryDetail", getCategoryDetail);

module.exports = {
  categoryRouter,
};
