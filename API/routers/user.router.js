const express = require("express");
const userRouter = express.Router();
const {
  getUserList,
  getUserDetail,
  createUser,
  updateUser,
  removeUser,
  getUserWithOrder,
} = require("../controllers/user.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auths/check-verify.middleware");
const {
  checkUserId,
  checkAccount,
} = require("../middlewares/validations/check-exist.middleware");



userRouter.get("/getUserList", getUserList);

userRouter.get("/getUserDetail", checkUserId, getUserDetail);

userRouter.post(
  "/createUser",
  // authenticate,
  // authorize(["ADMIN"]),
  checkAccount,
  createUser
);

userRouter.put("/updateUser", authenticate, authorize(["ADMIN", "USER"]), updateUser);

userRouter.delete(
  "/removeUser",
  authenticate,
  authorize(["ADMIN"]),
  removeUser
);

userRouter.get("/getUserWithOrder", getUserWithOrder);

module.exports = {
  userRouter,
};
