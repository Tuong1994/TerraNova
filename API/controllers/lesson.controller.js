const { Lesson } = require("../models");

const getLessonList = async (req, res) => {
  try {
    const lessonList = await Lesson.findAll();
    res.status(200).send(lessonList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getLessonDetail = async (req, res) => {
  const { lessonId } = req.query;
  try {
    const lessonDetail = await Lesson.findOne({
      where: {
        id: lessonId,
      },
    });
    res.status(200).send(lessonDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createLesson = async (req, res) => {
  const { nameENG, nameVN, nameCH, courseId } = req.body;
  try {
    const lessonId = "L_" + Math.floor(Math.random() * 999999999).toString();
    const newLesson = await Lesson.create({
      id: lessonId,
      nameENG,
      nameVN,
      nameCH,
      courseId,
    });
    res.status(200).send(newLesson);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateLesson = async (req, res) => {
  const { lessonId } = req.query;
  const { nameENG, nameVN, nameCH, courseId } = req.body;
  try {
    await Lesson.update(
      { nameENG, nameVN, nameCH, courseId },
      {
        where: {
          id: lessonId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeLesson = async (req, res) => {
  const { lessonId } = req.query;
  try {
    await Lesson.destroy({
      where: {
        id: lessonId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getLessonList,
  getLessonDetail,
  createLesson,
  updateLesson,
  removeLesson,
};
