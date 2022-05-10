const express = require("express");
const {
  getCommentList,
  updateComment,
  createComment,
  removeComment,
} = require("../controllers/comment.controller");
const {
  authenticate,
} = require("../middlewares/auths/check-verify.middleware");
const commentRouter = express.Router();

commentRouter.get("/getCommentList", getCommentList);

commentRouter.post("/createComment", authenticate, createComment);

commentRouter.put("/updateComment", authenticate, updateComment);

commentRouter.delete("/removeComment", authenticate, removeComment);

module.exports = {
  commentRouter,
};
