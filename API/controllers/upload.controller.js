const { Product, Course, User, Movie } = require("../models");
const { domain } = require("../setting/setting");

const uploadProductImg = async (req, res) => {
  const { files } = req;
  const { productId } = req.query;
  const urlImgArr = files.map((file) => {
    return `${domain}/${file.path}`;
  });
  try {
    const productDetail = await Product.findOne({
      where: {
        id: productId,
      },
    });
    productDetail.image = urlImgArr;
    await productDetail.save();
    res.status(200).send(productDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

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

const uploadMovieImg = async (req, res) => {
  const { file } = req;
  const { movieId } = req.query;
  const urlImg = `${domain}/${file.path}`;
  try {
    const movieDetail = await Movie.findOne({
      where: {
        id: movieId,
      },
    });
    movieDetail.image = urlImg;
    await movieDetail.save();
    res.status(200).send(movieDetail);
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
  uploadProductImg,
  uploadCourseImg,
  uploadAvatar,
  uploadMovieImg
};
