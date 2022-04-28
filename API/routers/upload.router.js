const express = require("express");
const {
  uploadCourseImg,
  uploadAvatar,
} = require("../controllers/upload.controller");
const {
  courseUpload,
  userUpload,
} = require("../middlewares/upload/upload.middleware");
const {
  authenticate,
} = require("../middlewares/auths/check-verify.middleware");
const uploadRouter = express.Router();

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
