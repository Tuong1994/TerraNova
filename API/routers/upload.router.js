const express = require("express");
const { uploadCourseImg } = require("../controllers/upload.controller");
const { courseUpload } = require("../middlewares/upload/upload.middleware");
const uploadRouter = express.Router();

uploadRouter.post("/uploadCourseImg", courseUpload(), uploadCourseImg);

module.exports = {
    uploadRouter
}