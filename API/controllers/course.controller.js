const {
  CourseCategory,
  Course,
  CourseOrder,
  CourseSchedule,
  Lesson,
} = require("../models");
const Sequelize = require("sequelize");
const { domain } = require("../setting/setting");
const Op = Sequelize.Op;

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

const getCourseList = async (req, res) => {
  const { page, limits, filter, freeText, sortBy } = req.query;
  const pageNumber = parseInt(page);
  const itemPerPage = parseInt(limits);
  try {
    let courseList = [];

    let getSort = () => {
      if (sortBy) {
        if (parseInt(sortBy) === 1) {
          return "DESC";
        } else {
          return "ASC";
        }
      }
    };

    if (filter && filter !== "all") {
      if (freeText) {
        courseList = await Course.findAll({
          order: [["updatedAt", getSort() || "DESC"]],
          where: {
            categoryId: filter,
            nameENG: {
              [Op.like]: `%${freeText}%`,
            },
          },
          include: [
            {
              model: CourseCategory,
              as: "category",
            },
            {
              model: CourseOrder,
              as: "students",
              attributes: ["userId", "register", "createdAt", "updatedAt"],
            },
            {
              model: Lesson,
              as: "lessons",
            },
            {
              model: CourseSchedule,
              as: "schedules",
            },
          ],
        });
      } else {
        courseList = await Course.findAll({
          order: [["updatedAt", getSort() || "DESC"]],
          where: {
            categoryId: filter,
          },
          include: [
            {
              model: CourseCategory,
              as: "category",
            },
            {
              model: CourseOrder,
              as: "students",
              attributes: ["userId", "register", "createdAt", "updatedAt"],
            },
            {
              model: Lesson,
              as: "lessons",
            },
            {
              model: CourseSchedule,
              as: "schedules",
            },
          ],
        });
      }
    } else if (freeText) {
      courseList = await Course.findAll({
        order: [["updatedAt", getSort() || "DESC"]],
        where: {
          categoryId: filter,
          nameENG: {
            [Op.like]: `%${freeText}%`,
          },
        },
        include: [
          {
            model: CourseCategory,
            as: "category",
          },
          {
            model: CourseOrder,
            as: "students",
            attributes: ["userId", "register", "createdAt", "updatedAt"],
          },
          {
            model: Lesson,
            as: "lessons",
          },
          {
            model: CourseSchedule,
            as: "schedules",
          },
        ],
      });
    } else {
      courseList = await Course.findAll({
        order: [["updatedAt", getSort() || "DESC"]],
        include: [
          {
            model: CourseCategory,
            as: "category",
          },
          {
            model: CourseOrder,
            as: "students",
            attributes: ["userId", "register", "createdAt", "updatedAt"],
          },
          {
            model: Lesson,
            as: "lessons",
          },
          {
            model: CourseSchedule,
            as: "schedules",
          },
        ],
      });
    }

    if (page) {
      const total = courseList.length;
      const start = (pageNumber - 1) * itemPerPage;
      const end = start + itemPerPage;
      const courses = courseList.slice(start, end);
      res.status(200).send({
        total: total,
        page: pageNumber,
        limits: itemPerPage,
        courseList: courses,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCourseByCategory = async (req, res) => {
  const { categoryId, page, limits } = req.query;
  const pageNumber = parseInt(page);
  const itemPerPage = parseInt(limits);
  try {
    const coursesByCategory = await Course.findAll({
      where: {
        categoryId: categoryId,
      },
      include: [
        {
          model: Lesson,
          as: "lessons",
        },
      ],
    });

    const categoryName = await CourseCategory.findOne({
      where: {
        id: categoryId,
      },
      attributes: ["nameVN", "nameENG", "nameCH"],
    });
    if (page) {
      const total = coursesByCategory.length;
      const start = (pageNumber - 1) * itemPerPage;
      const end = start + itemPerPage;
      const courses = coursesByCategory.slice(start, end);
      res.status(200).send({
        categoryName: categoryName,
        course: {
          total: total,
          page: pageNumber,
          limits: itemPerPage,
          courseList: courses,
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
          attributes: ["userId", "register", "createdAt", "updatedAt"],
        },
        {
          model: Lesson,
          as: "lessons",
        },
        {
          model: CourseSchedule,
          as: "schedules",
        },
      ],
    });
    res.status(200).send(courseDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createCourse = async (req, res) => {
  const { file } = req;
  const {
    categoryId,
    nameENG,
    nameVN,
    nameCH,
    descENG,
    descVN,
    descCH,
    cost,
    profit,
    price,
    trainingTime,
    schedule,
    lesson,
  } = req.body;
  try {
    let urlImg = "";
    if (file) {
      urlImg = `${domain}/${file.path}`;
    }
    const courseId = "COU_" + Math.floor(Math.random() * 999999999).toString();
    const newCourse = await Course.create({
      id: courseId,
      nameENG,
      nameVN,
      nameCH,
      descENG,
      descVN,
      descCH,
      image: urlImg,
      cost,
      profit,
      price,
      trainingTime,
      categoryId,
    });

    if (newCourse) {
      if (schedule) {
        const scheduleArr = JSON.parse(schedule);
        const newArr = scheduleArr.map((i) => {
          const scheduleId =
            "COUS_" + Math.floor(Math.random() * 999999999).toString();
          return {
            id: scheduleId,
            ...i,
            courseId: newCourse.id,
          };
        });
        await CourseSchedule.bulkCreate(newArr);
      }
      if (lesson) {
        const lessonArr = JSON.parse(lesson);
        const newArr = lessonArr.map((i) => {
          const lessonId =
            "L_" + Math.floor(Math.random() * 999999999).toString();
          return {
            id: lessonId,
            ...i,
            courseId: newCourse.id,
          };
        });
        await Lesson.bulkCreate(newArr);
      }
    }
    res.status(200).send(newCourse);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCourse = async (req, res) => {
  const { file } = req;
  const { courseId } = req.query;
  const {
    categoryId,
    nameENG,
    nameVN,
    nameCH,
    descENG,
    descVN,
    descCH,
    defaultImg,
    cost,
    profit,
    price,
    trainingTime,
  } = req.body;
  try {
    let urlImg = "";
    if (file) {
      urlImg = `${domain}/${file.path}`;
    } else {
      urlImg = defaultImg;
    }

    await Course.update(
      {
        categoryId,
        nameENG,
        nameVN,
        nameCH,
        image: urlImg,
        descENG,
        descVN,
        descCH,
        cost,
        profit,
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
  const { lessonIds, scheduleIds } = req.body;
  try {
    await Course.destroy({
      where: {
        id: courseId,
      },
    });
    if (lessonIds) {
      await Lesson.destroy({
        where: {
          id: lessonIds,
        },
      });
    }
    if (scheduleIds) {
      await CourseSchedule.destroy({
        where: {
          id: scheduleIds,
        },
      });
    }
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getCategoryAndCourseList,
  getCourseList,
  getCourseByCategory,
  getCourseDetail,
  createCourse,
  updateCourse,
  removeCourse,
};
