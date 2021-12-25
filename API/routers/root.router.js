const express = require("express");
const rootRouter = express.Router();
const { authRouter } = require("./auth.router");
const { categoryRouter } = require("./category.router");
const { menuRouter } = require("./menu.router");
const { productRouter } = require("./product.router");
const { userRouter } = require("./user.router");

rootRouter.use("/userManagement", userRouter)
rootRouter.use("/authManagement", authRouter)
rootRouter.use("/categoryManagement", categoryRouter);
rootRouter.use("/productManagement", productRouter);
rootRouter.use("/menuManagement", menuRouter);

module.exports = {
    rootRouter,
}