const { User, Product } = require("../../models");

const checkExist = (model) => async (req, res, next) => {
  const { account } = req.body;
  const { userId } = req.query;
  try {
    // if (account) {
    //   const account = await model.findOne({
    //     where: {
    //       account,
    //     },
    //   });
    //   if (!account) {
    //     next();
    //   } else {
    //     res.status(403).send(`Account ${account} is already exist`);
    //   }
    // }

    if (userId) {
      const userId = await model.findOne({
        where: {
          id: userId,
        },
      });
      if (userId) {
        next();
      } else {
        res.status(404).send(`Id ${id} not found`);
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

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
        res.status(404).send(`Product not found`);
      }
    } else {
      res.status(400).send("Bad request");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  checkExist,
  checkUserId,
  checkAccount,
  checkProductId
};
