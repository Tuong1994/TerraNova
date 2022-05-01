const express = require("express");
const {
  uploadCourseImg,
  uploadAvatar,
  uploadProductImg,
} = require("../controllers/upload.controller");
const {
  courseUpload,
  userUpload,
  productUpload,
} = require("../middlewares/upload/upload.middleware");
const {
  authenticate,
} = require("../middlewares/auths/check-verify.middleware");
const uploadRouter = express.Router();



uploadRouter.post("/uploadProductImg", productUpload(), uploadProductImg);

uploadRouter.post(
  "/uploadCourseImg",
  authenticate,
  courseUpload(),
  uploadCourseImg
);

uploadRouter.post("/uploadAvatar", authenticate, userUpload(), uploadAvatar);

module.exports = {
  uploadRouter,
};
