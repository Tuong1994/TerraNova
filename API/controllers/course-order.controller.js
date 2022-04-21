const { CourseOrder } = require("../models");

const getCourseOrderList = async (req, res) => {
  try {
    const courseOrderList = await CourseOrder.findAll();
    res.status(200).send(courseOrderList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCourseOrderDetail = async (req, res) => {
  const { courseOrderId } = req.query;
  try {
    const courseOrderDetail = await CourseOrder.findOne({
      where: {
        id: courseOrderId,
      },
    });
    res.status(200).send(courseOrderDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCourseOrder = async (req, res) => {
  const { courseId, userId, register } = req.body;
  try {
    const courseOrderId =
      "COUO_" + Math.floor(Math.random() * 999999999).toString();
    const newCourseOrder = await CourseOrder.create({
      id: courseOrderId,
      courseId,
      userId,
      register
    });
    res.status(200).send(newCourseOrder);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCourseOrder = async (req, res) => {
  const { courseOrderId } = req.query;
  const { courseId, userId, register } = req.body;
  try {
    await CourseOrder.update(
      { courseId, userId, register },
      {
        where: {
          id: courseOrderId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeCourseOrder = async (req, res) => {
  const { courseOrderId } = req.query;
  try {
    await CourseOrder.destroy({
      where: {
        id: courseOrderId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getCourseOrderList,
  getCourseOrderDetail,
  createCourseOrder,
  updateCourseOrder,
  removeCourseOrder,
};
