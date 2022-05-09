const express = require("express");
const rootRouter = express.Router();
const { authRouter } = require("./auth.router");
const { cartsRouter } = require("./carts.router");
const { categoryRouter } = require("./category.router");
const { commentRouter } = require("./comment.router");
const { courseOrderRouter } = require("./course-order.router");
const { courseScheduleRouter } = require("./course-schedule.router");
const { courseRouter } = require("./course.router");
const { descriptionRouter } = require("./description.router");
const { lessonRouter } = require("./lesson.router");
const { orderRouter } = require("./order.router");
const { productRouter } = require("./product.router");
const { uploadRouter } = require("./upload.router");
const { userRouter } = require("./user.router");

rootRouter.use("/userManagement", userRouter);
rootRouter.use("/authManagement", authRouter);
rootRouter.use("/categoryManagement", categoryRouter);
rootRouter.use("/productManagement", productRouter);
rootRouter.use("/orderManagement", orderRouter);
rootRouter.use("/cartsManagement", cartsRouter);
rootRouter.use("/courseManagement", courseRouter);
rootRouter.use("/courseOrderManagement", courseOrderRouter);
rootRouter.use("/uploadManagement", uploadRouter);
rootRouter.use("/lessonManagement", lessonRouter);
rootRouter.use("/courseScheduleManagement", courseScheduleRouter);
rootRouter.use("/descriptionManagement", descriptionRouter);
rootRouter.use("/commentManagement", commentRouter)

module.exports = {
  rootRouter,
};
