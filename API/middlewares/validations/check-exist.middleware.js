const { User, Product, Producer, Category, Course } = require("../../models");

const checkUserId = async (req, res, next) => {
  const { userId } = req.query;
  try {
    if (userId) {
      const user = await User.findOne({
        where: {
          id: userId,
        },
      });
      if (user) {
        next();
      } else {
        res.status(404).send(`User is not found`);
      }
    } else {
      res.status(400).send("Bad request");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const checkProductId = async (req, res, next) => {
  const { productId } = req.query;
  try {
    if (productId) {
      const product = await Product.findOne({
        where: {
          id: productId,
        },
      });
      if (product) {
        next();
      } else {
        res.status(404).send(`Product id not found`);
      }
    } else {
      res.status(400).send("Bad request");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const checkProducerId = async (req, res, next) => {
  const { producerId } = req.query;
  try {
    if (producerId) {
      const producer = await Producer.findOne({
        where: {
          id: producerId,
        },
      });
      if (producer) {
        next();
      } else {
        res.status(404).send("Producer id not found");
      }
    } else {
      res.status(400).send("Bad request");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const checkCategoryId = async (req, res, next) => {
  const { categoryId } = req.query;
  try {
    if (categoryId) {
      const category = await Category.findOne({
        where: {
          id: categoryId,
        },
      });
      if(category) {
        next()
      } else {
        res.status(404).send("Category id not found")
      }
    } else {
      res.status(400).send("Bad request");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const checkCourseId = async (req, res, next) => {
  const { courseId } = req.query;
  try {
    if (courseId) {
      const course = await Course.findOne({
        where: {
          id: courseId,
        },
      });
      if(course) {
        next()
      } else {
        res.status(404).send("Category id not found")
      }
    } else {
      res.status(400).send("Bad request");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const checkAccount = async (req, res, next) => {
  const { account } = req.body;
  try {
    const accountInfo = await User.findOne({
      where: {
        account: account,
      },
    });
    if (!accountInfo) {
      next();
    } else {
      res.status(403).send(`Account ${account} is already exist`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  checkUserId,
  checkAccount,
  checkProductId,
  checkProducerId,
  checkCategoryId,
  checkCourseId,
};
