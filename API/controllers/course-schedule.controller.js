const { CourseSchedule } = require("../models");

const getCourseScheduleList = async (req, res) => {
  try {
    const courseScheduleList = await CourseSchedule.findAll();
    res.status(200).send(courseScheduleList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCourseScheduleDetail = async (req, res) => {
  const { courseScheduleId } = req.query;
  try {
    const courseScheduleDetail = await CourseSchedule.findOne({
      where: {
        id: courseScheduleId,
      },
    });
    res.statue(200).send(courseScheduleDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCourseSchedule = async (req, res) => {
  const { startDate, dateType, branch, courseId } = req.body;
  try {
    const courseScheduleId =
      "COUS_" + Math.floor(Math.random() * 999999999).toString();
    const newCourseSchedule = await CourseSchedule.create({
      id: courseScheduleId,
      startDate,
      dateType,
      branch,
      courseId,
    });
    res.status(200).send(newCourseSchedule);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCourseSchedule = async (req, res) => {
  const { courseScheduleId } = req.query;
  const { startDate, dateType, branch, courseId } = req.body;
  try {
    await CourseSchedule.update(
      { startDate, dateType, branch, courseId },
      {
        where: {
          id: courseScheduleId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeCourseSchedule = async (req, res) => {
  const { courseScheduleId } = req.query;
  try {
    await CourseSchedule.destroy({
      where: {
        id: courseScheduleId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getCourseScheduleList,
  getCourseScheduleDetail,
  createCourseSchedule,
  updateCourseSchedule,
  removeCourseSchedule,
};
