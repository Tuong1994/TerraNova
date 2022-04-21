const { CourseCategory, Course, CourseOrder, sequelize } = require("../models");

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
  const { categoryId, page, limits } = req.query;
  const pageNumber = parseInt(page);
  const itemPerPage = parseInt(limits);
  try {
    const [result] = await sequelize.query(
      `
        select 
        courses.id, 
        courses.nameENG, 
        courses.nameVN, 
        courses.nameCH,
        courses.descENG, 
        courses.descVN,
        courses.descCH, 
        courses.image, 
        courses.price,
        courses.trainingTime,
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
    if (page) {
      const total = result.length;
      const start = (pageNumber - 1) * itemPerPage;
      const end = start + itemPerPage;
      const courses = result.slice(start, end);
      res.status(200).send({
        categoryName: categoryName,
        course: {
          courseList: courses,
          total: total,
          page: pageNumber,
          limits: itemPerPage,
        },
      });
    }
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
      include: [
        {
          model: CourseOrder,
          as: "students",
          attributes: ["userId", "createdAt", "updatedAt"],
        },
      ],
    });
    res.status(200).send(courseDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCourse = async (req, res) => {
  const {
    categoryId,
    nameENG,
    nameVN,
    nameCH,
    descENG,
    descVN,
    descCH,
    price,
    trainingTime,
  } = req.body;
  try {
    const courseId = "COU_" + Math.floor(Math.random() * 999999999).toString();
    const newCourse = await Course.create({
      id: courseId,
      nameENG,
      nameVN,
      nameCH,
      descENG,
      descVN,
      descCH,
      price,
      trainingTime,
      categoryId,
    });
    res.status(200).send(newCourse);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCourse = async (req, res) => {
  const { courseId } = req.query;
  const {
    categoryId,
    nameENG,
    nameVN,
    nameCH,
    descENG,
    descVN,
    descCH,
    price,
    trainingTime,
  } = req.body;
  try {
    await Course.update(
      {
        categoryId,
        nameENG,
        nameVN,
        nameCH,
        descENG,
        descVN,
        descCH,
        price,
        trainingTime,
      },
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
