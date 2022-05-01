const express = require("express");
const productRouter = express.Router();
const {
  getProductList,
  createProduct,
  updateProduct,
  removeProduct,
  getProducerAndProduct,
  getProductByCategory,
  getProductDetail,
  getProductByProducer,
  getProductByFreeText,
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
const { productUpload } = require("../middlewares/upload/upload.middleware");


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
  "/getProductDetail",
  checkProductId,
  getProductDetail
);

productRouter.get("/getProductByFreeText", getProductByFreeText)

productRouter.post(
  "/createProduct",
  // authenticate,
  // authorize(["ADMIN"]),
  productUpload(),
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
  // authenticate,
  // authorize(["ADMIN"]),
  checkProductId,
  removeProduct
);

module.exports = {
  productRouter,
};
