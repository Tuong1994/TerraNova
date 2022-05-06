const express = require("express");
const userRouter = express.Router();
const {
  getUserList,
  getUserDetail,
  createUser,
  updateUser,
  removeUser,
  getUserWithOrder,
  changePassword,
} = require("../controllers/user.controller");
const {
  authenticate,
  authorize,
} = require("../middlewares/auths/check-verify.middleware");
const { userUpload } = require("../middlewares/upload/upload.middleware");
const {
  checkUserId,
  checkAccount,
} = require("../middlewares/validations/check-exist.middleware");



userRouter.get("/getUserList", getUserList);

userRouter.get("/getUserWithOrder", getUserWithOrder);

userRouter.get("/getUserDetail", checkUserId, getUserDetail);

userRouter.post(
  "/createUser",
  authenticate,
  authorize(["ADMIN"]),
  userUpload(),
  checkAccount,
  createUser
);

userRouter.put("/updateUser", authenticate, authorize(["ADMIN", "USER"]), userUpload(), updateUser);

userRouter.delete(
  "/removeUser",
  authenticate,
  authorize(["ADMIN"]),
  removeUser
);

userRouter.post("/changePassword", authenticate, changePassword)

module.exports = {
  userRouter,
};
