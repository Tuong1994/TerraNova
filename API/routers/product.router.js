const express = require("express");
const productRouter = express.Router();
const {
  getProductList,
  createProduct,
  updateProduct,
  removeProduct,
  getProducerAndProduct,
  getProductByCategory,
  getAccessoriesDetail,
  getProductByProducer,
} = require("../controllers/product.controller");
const {
  checkProductId,
  checkProducerId,
  checkCategoryId,
} = require("../middlewares/validations/check-exist.middleware");
const {
  authenticate,
  authorize,
} = require("../middlewares/auths/check-verify.middleware");

productRouter.get("/getProducerAndProduct", getProducerAndProduct);

productRouter.get("/getProductList", getProductList);

productRouter.get(
  "/getProductByProducer",
  checkProducerId,
  getProductByProducer
);

productRouter.get(
  "/getProductByCategory",
  checkCategoryId,
  getProductByCategory
);

productRouter.get(
  "/getAccessoriesDetail",
  checkProductId,
  getAccessoriesDetail
);

productRouter.post(
  "/createProduct",
  authenticate,
  authorize(["ADMIN"]),
  createProduct
);

productRouter.put(
  "/updateProduct",
  authenticate,
  authorize(["ADMIN"]),
  checkProductId,
  updateProduct
);

productRouter.delete(
  "/removeProduct",
  authenticate,
  authorize(["ADMIN"]),
  checkProductId,
  removeProduct
);

module.exports = {
  productRouter,
};
