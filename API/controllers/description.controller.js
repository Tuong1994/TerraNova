const { Description } = require("../models");

const getDescriptionList = async (req, res) => {
  try {
    const descriptionList = await Description.findAll({
      order: [["updatedAt", "DESC"]]
    });
    res.status(200).send(descriptionList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createDescription = async (req, res) => {
  const { name, content, productId } = req.body;
  try {
    const descId = "D_" + Math.floor(Math.random * 999999999).toString();
    const newDescription = await Description.create({
      id: descId,
      name,
      content,
      productId,
    });
    res.status(200).send(newDescription);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateDescription = async (req, res) => {
  const { descId } = req.query;
  const { name, content, productId } = req.body;
  try {
    await Description.update(
      { name, content, productId },
      {
        where: {
          id: descId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeDescription = async (req, res) => {
  const { descId } = req.query;
  try {
    await Description.destroy({
      where: {
        id: descId,
      },
    });
    res.status(200).send("Remove success")
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getDescriptionList,
  createDescription,
  updateDescription,
  removeDescription
};
