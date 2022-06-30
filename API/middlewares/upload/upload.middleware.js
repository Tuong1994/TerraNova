const multer = require("multer");

const productUpload = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/img/product");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname.replace(/\\/g, "/")}`);
    },
  });
  const upload = multer({
    storage,
  });
  return upload.array("image", 10);
};

const courseUpload = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/img/course");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname.replace(/\\/g, "/")}`);
    },
  });
  const upload = multer({
    storage,
  });
  return upload.single("image");
};

const movieUpload = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/img/movie");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname.replace(/\\/g, "/")}`);
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
      cb(null, `${Date.now()}_${file.originalname.replace(/\\/g, "/")}`);
    },
  });
  const upload = multer({
    storage,
  });
  return upload.single("avatar");
};

module.exports = {
  productUpload,
  courseUpload,
  userUpload,
  movieUpload,
};
