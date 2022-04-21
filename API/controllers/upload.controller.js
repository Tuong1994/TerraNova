const { Course } = require("../models");
const { domain } = require("../setting/setting");

const uploadCourseImg = async (req, res) => {
  const { file } = req;
  const { courseId } = req.query;
  const urlImg = `${domain}/${file.path}`;
  try {
    const courseDetail = await Course.findOne({
      where: {
        id: courseId,
      },
    });
    courseDetail.image = urlImg;
    await courseDetail.save();
    res.status(200).send(courseDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
    uploadCourseImg,
}