const { key } = require("../../setting/setting");
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  // const token = req.header("accessToken");
  const headers = req.header("Authorization");

  try {
    const secretKey = key;
    if (headers) {
      const token = headers.slice(7, headers.length);
      const decode = jwt.verify(token, secretKey);
      req.user = decode;
      next();
    } else {
      res.status(401).send("You need to sign in first");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const authorize = (arr) => async (req, res, next) => {
  const { user } = req;
  if (arr.findIndex((role) => role === user.role) > -1) {
    next();
  } else {
    res.status(401).send("You have not authorize");
  }
};

module.exports = {
  authenticate,
  authorize,
};
