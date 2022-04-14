const { CourseCategory, Course, sequelize } = require("../models");

const getCategoryAndCourseList = async (req, res) => {
  try {
    const categoryAndCourseList = await CourseCategory.findAll({
      include: [
        {
          model: Course,
          as: "courses",
        },
      ],
    });
    res.status(200).send(categoryAndCourseList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCourseByCategory = async (req, res) => {
  const { categoryId } = req.query;
  try {
    const [result] = await sequelize.query(
      `
        select 
        courses.id, 
        courses.nameENG, 
        courses.nameVN, 
        courses.descENG, 
        courses.descVN, 
        courses.image, 
        courses.createdAt, 
        courses.updatedAt
        from courses
        inner join coursecategories
        on coursecategories.id = courses.categoryId
        where coursecategories.id = "${categoryId}"
    `
    );
    const categoryName = await CourseCategory.findOne({
      where: {
        id: categoryId,
      },
      attributes: ["nameVN", "nameENG"],
    });
    res.status(200).send({
      categoryName: categoryName,
      courses: result,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCourseDetail = async (req, res) => {
  const { courseId } = req.query;
  try {
    const courseDetail = await Course.findOne({
      where: {
        id: courseId,
      },
    });
    res.status(200).send(courseDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCourse = async (req, res) => {
  const { categoryId, nameENG, nameVN, descENG, descVN } = req.body;
  try {
    const courseId = "COU_" + Math.floor(Math.random() * 999999999).toString();
    const newCourse = await Course.create({
      id: courseId,
      nameENG,
      nameVN,
      descENG,
      descVN,
      categoryId,
    });
    res.status(200).send(newCourse);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCourse = async (req, res) => {
  const { courseId } = req.query;
  const { categoryId, nameENG, nameVN, descENG, descVN } = req.body;
  try {
    await Course.update(
      { categoryId, nameENG, nameVN, descENG, descVN },
      {
        where: {
          id: courseId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeCourse = async (req, res) => {
  const { courseId } = req.query;
  try {
    await Course.destroy({
      where: {
        id: courseId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getCategoryAndCourseList,
  getCourseByCategory,
  getCourseDetail,
  createCourse,
  updateCourse,
  removeCourse,
};
