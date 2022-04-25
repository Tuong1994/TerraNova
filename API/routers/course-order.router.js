const express = require("express");
const {
  getCourseOrderList,
  getCourseOrderDetail,
  createCourseOrder,
  updateCourseOrder,
  removeCourseOrder,
} = require("../controllers/course-order.controller");
const {
  authenticate,
} = require("../middlewares/auths/check-verify.middleware");
const {
  checkRegisterExits,
} = require("../middlewares/validations/check-exist.middleware");
const courseOrderRouter = express.Router();

courseOrderRouter.get("/getCourseOrderList", getCourseOrderList);

courseOrderRouter.get("/getCourseOrderDetail", getCourseOrderDetail);

courseOrderRouter.post(
  "/createCourseOrder",
  authenticate,
  checkRegisterExits,
  createCourseOrder
);

courseOrderRouter.put("/updateCourseOrder", authenticate, updateCourseOrder);

courseOrderRouter.delete("/removeCourseOrder", removeCourseOrder);

module.exports = {
  courseOrderRouter,
};
