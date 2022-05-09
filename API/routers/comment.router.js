const express = require("express");
const {
  getCommentList,
  updateComment,
  createComment,
  removeComment,
} = require("../controllers/comment.controller");
const commentRouter = express.Router();


commentRouter.get("/getCommentList", getCommentList);

commentRouter.post("/createComment", createComment);

commentRouter.put("/updateComment", updateComment);

commentRouter.delete("/removeComment", removeComment);

module.exports = {
  commentRouter,
};
