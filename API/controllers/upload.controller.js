const { Course, User } = require("../models");
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

const uploadAvatar = async (req, res) => {
  const { file } = req;
  const { userId } = req.query;
  const urlImg = `${domain}/${file.path}`;
  try {
    const userDetail = await User.findOne({
      where: {
        id: userId,
      },
    });
    userDetail.avatar = urlImg;
    await userDetail.save();
    res.status(200).send(userDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  uploadCourseImg,
  uploadAvatar
};
