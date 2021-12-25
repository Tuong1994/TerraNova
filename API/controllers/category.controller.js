const { Category } = require("../models");

const getCategoryList = async (req, res) => {
  try {
    const categoryList = await Category.findAll({
      attributes: [["id", "categoryId"], "name"],
    });
    res.status(200).send(categoryList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCategoryDetail = async (req, res) => {
  const { categoryId } = req.query;
  try {
    const categoryDetail = await Category.findOne({
      where: {
        id: categoryId,
      },
      attributes: [["id", "categoryId"], "name"],
    });
    res.status(200).send(categoryDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getCategoryList,
  getCategoryDetail,
};
