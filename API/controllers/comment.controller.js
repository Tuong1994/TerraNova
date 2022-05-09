const { Comment } = require("../models");

const getCommentList = async (req, res) => {
  try {
    const commentList = await Comment.findAll();
    res.status(200).send(commentList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createComment = async (req, res) => {
  const { body, userName, userId, parentId, productId, courseId } = req.body;
  try {
    const commentId = "COM_" + Math.floor(Math.random() * 999999999).toString();
    const newComment = await Comment.create({
      id: commentId,
      body,
      userName,
      userId,
      parentId,
      productId,
      courseId,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
