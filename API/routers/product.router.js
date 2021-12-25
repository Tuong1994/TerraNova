const express = require("express");
const productRouter = express.Router();
const {
  getProductList,
  getProductDetail,
  createProduct,
  updateProduct,
  removeProduct,
  getCategoryWithProducerAndProduct,
  getProducerAndProduct,
} = require("../controllers/product.controller");
const {
  checkProductId,
} = require("../middlewares/validations/check-exist.middleware");
const {
  authenticate,
} = require("../middlewares/auths/check-verify.middleware");


productRouter.get(
  "/getCategoryWithProducerAndProduct",
  getCategoryWithProducerAndProduct
);

productRouter.get("/getProducerAndProduct", getProducerAndProduct);

productRouter.get("/getProductList", getProductList);

productRouter.get("/getProductDetail", checkProductId, getProductDetail);

productRouter.post("/createProduct", authenticate, createProduct);

productRouter.put(
  "/updateProduct",
  authenticate,
  checkProductId,
  updateProduct
);

productRouter.delete("/removeProduct", checkProductId, removeProduct);

module.exports = {
  productRouter,
};
