const express = require("express");
const {
  uploadCourseImg,
  uploadAvatar,
  uploadProductImg,
  uploadMovieImg,
} = require("../controllers/upload.controller");
const {
  courseUpload,
  userUpload,
  productUpload,
  movieUpload,
} = require("../middlewares/upload/upload.middleware");
const {
  authenticate,
  authorize,
} = require("../middlewares/auths/check-verify.middleware");
const uploadRouter = express.Router();

uploadRouter.post(
  "/uploadProductImg",
  authenticate,
  authorize(["ADMIN"]),
  productUpload(),
  uploadProductImg
);

uploadRouter.post(
  "/uploadCourseImg",
  authenticate,
  authorize(["ADMIN"]),
  courseUpload(),
  uploadCourseImg
);

uploadRouter.post(
  "/uploadMovieImg",
  authenticate,
  authorize(["ADMIN"]),
  movieUpload(),
  uploadMovieImg
);

uploadRouter.post("/uploadAvatar", authenticate, userUpload(), uploadAvatar);

module.exports = {
  uploadRouter,
};
