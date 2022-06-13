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
  const { body, userName, userId, parentId, productId, courseId, movieId } =
    req.body;
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
      movieId,
    });
    res.status(200).send(newComment);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateComment = async (req, res) => {
  const { commentId } = req.query;
  const { body, userName, userId, parentId, productId, courseId, movieId } =
    req.body;
  try {
    await Comment.update(
      { body, userName, userId, parentId, productId, courseId, movieId },
      {
        where: {
          id: commentId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeComment = async (req, res) => {
  const { commentId } = req.query;
  try {
    await Comment.destroy({
      where: {
        id: commentId,
      },
    });
    const childComment = await Comment.findOne({
      where: {
        parentId: commentId,
      },
    });
    if (childComment) {
      childComment.parentId = "";
      await childComment.save();
    }
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getCommentList,
  createComment,
  updateComment,
  removeComment,
};
