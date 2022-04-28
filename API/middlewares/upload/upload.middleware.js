const multer = require("multer");

const courseUpload = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/img/course");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  const upload = multer({ storage });
  return upload.single("image");
};

const userUpload = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/img/user");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  const upload = multer({ storage });
  return upload.single("avatar");
};

module.exports = {
  courseUpload,
  userUpload,
};
