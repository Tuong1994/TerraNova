const express = require("express");
const rootRouter = express.Router();
const { authRouter } = require("./auth.router");
const { cartsRouter } = require("./carts.router");
const { categoryRouter } = require("./category.router");
const { courseRouter } = require("./course.router");
const { orderRouter } = require("./order.router");
const { productRouter } = require("./product.router");
const { userRouter } = require("./user.router");

rootRouter.use("/userManagement", userRouter)
rootRouter.use("/authManagement", authRouter)
rootRouter.use("/categoryManagement", categoryRouter);
rootRouter.use("/productManagement", productRouter);
rootRouter.use("/orderManagement", orderRouter);
rootRouter.use("/cartsManagement", cartsRouter);
rootRouter.use("/courseManagement", courseRouter);

module.exports = {
    rootRouter,
}