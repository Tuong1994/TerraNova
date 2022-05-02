const multer = require("multer");

const FILESIZE = "1000000";
const fileTypes = /jpeg|jpg|png/;

const productUpload = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/img/product");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  const upload = multer({
    storage,
    limits: { fileSize: FILESIZE },
    fileFilter: (req, file, cb) => {
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("File is not valid");
    },
  });
  return upload.array("image", 10);
};

const courseUpload = () => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/img/course");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`);
    },
  });
  const upload = multer({
    storage,
    limits: { fileSize: FILESIZE },
    fileFilter: (req, file, cb) => {
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("File is not valid");
    },
  });
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
  const upload = multer({
    storage,
    limits: { fileSize: FILESIZE },
    fileFilter: (req, file, cb) => {
      const mimeType = fileTypes.test(file.mimetype);
      const extname = fileTypes.test(path.extname(file.originalname));
      if (mimeType && extname) {
        return cb(null, true);
      }
      cb("File is not valid");
    },
  });
  return upload.single("avatar");
};

module.exports = {
  productUpload,
  courseUpload,
  userUpload,
};
