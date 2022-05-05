const { Producer, Product, Description } = require("../models");
const { domain } = require("../setting/setting");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const getProducerAndProduct = async (req, res) => {
  try {
    const producerAndProduct = await Producer.findAll({
      attributes: [["id", "producerId"], "name"],
      include: [
        {
          model: Product,
          attributes: [
            ["id", "productId"],
            "name",
            "image",
            "price",
            "description",
          ],
        },
      ],
    });
    res.status(200).send(producerAndProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductList = async (req, res) => {
  const { page, limits, filter, sortBy, freeText } = req.query;
  const pageNumber = parseInt(page);
  const itemPerPage = parseInt(limits);
  try {
    let products = [];

    let getSort = () => {
      if (sortBy) {
        if (parseInt(sortBy) === 1) {
          return "DESC";
        } else {
          return "ASC";
        }
      }
    };

    if (filter && filter !== "all") {
      if (freeText) {
        products = await Product.findAll({
          order: [["updatedAt", getSort() || "DESC"]],
          where: {
            categoryId: filter,
            name: {
              [Op.like]: `%${freeText}%`,
            },
          },
          include: [
            {
              model: Description,
              as: "description",
            },
          ],
        });
      } else {
        products = await Product.findAll({
          order: [["updatedAt", getSort() || "DESC"]],
          where: {
            categoryId: filter,
          },
          include: [
            {
              model: Description,
              as: "description",
            },
          ],
        });
      }
    } else if (freeText) {
      products = await Product.findAll({
        order: [["updatedAt", getSort() || "DESC"]],
        where: {
          name: {
            [Op.like]: `%${freeText}%`,
          },
        },
        include: [
          {
            model: Description,
            as: "description",
          },
        ],
      });
    } else {
      products = await Product.findAll({
        order: [["updatedAt", getSort() || "DESC"]],
        include: [
          {
            model: Description,
            as: "description",
          },
        ],
      });
    }
    if (page) {
      let total = products.length;
      let start = (pageNumber - 1) * itemPerPage;
      let end = start + itemPerPage;
      const productListPerPage = products.slice(start, end);
      res.status(200).send({
        totalProduct: total,
        page: pageNumber,
        limits: itemPerPage,
        productListPerPage: productListPerPage,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductByCategory = async (req, res) => {
  const { categoryId, page, limits } = req.query;
  const pageNumber = parseInt(page);
  const limitItem = parseInt(limits);

  try {
    if (page) {
      const products = await Product.findAll({
        where: {
          categoryId: categoryId,
        },
        attributes: [["id", "productId"], "name", "image", "price"],
        include: [
          {
            model: Description,
            as: "description",
            attributes: ["name", "content"],
          },
        ],
      });

      let total = products.length;
      let start = (pageNumber - 1) * limitItem;
      let end = start + limitItem;
      let productList = products.slice(start, end);

      res.status(200).send({
        totalProduct: total,
        page: page,
        limits: limits,
        productListPerPage: productList,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductByProducer = async (req, res) => {
  const { categoryId, producerId, page, limits } = req.query;
  const pageNumber = parseInt(page);
  const limitItem = parseInt(limits);

  try {
    const producerDetail = await Producer.findOne({
      where: {
        id: producerId,
      },
    });

    if (page) {
      const products = await Product.findAll({
        where: {
          categoryId: categoryId,
          producerId: producerId,
        },
        attributes: [["id", "productId"], "name", "image", "price"],
        include: [
          {
            model: Description,
            as: "description",
            attributes: ["name", "content"],
          },
        ],
      });

      let total = products.length;
      let start = (pageNumber - 1) * limitItem;
      let end = start + limitItem;
      let productList = products.slice(start, end);
      res.status(200).send({
        totalProduct: total,
        page: page,
        limits: limits,
        producerName: producerDetail.name,
        productListPerPage: productList,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductDetail = async (req, res) => {
  const { productId } = req.query;
  try {
    const productDetail = await Product.findOne({
      where: {
        id: productId,
      },
      include: [
        {
          model: Description,
          as: "description",
          attributes: ["id", "name", "content"],
        },
      ],
    });
    res.status(200).send(productDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductByFreeText = async (req, res) => {
  const { freeText } = req.query;
  const _defaultCurrentPage = 1;
  const _defaultItemPerPage = 10;
  try {
    const products = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${freeText}%`,
        },
      },
      attributes: [["id", "productId"], "name", "image", "price"],
      include: [
        {
          model: Description,
          as: "description",
          attributes: ["name", "content"],
        },
      ],
    });
    let total = products.length;
    let start = (_defaultCurrentPage - 1) * _defaultItemPerPage;
    let end = start + _defaultItemPerPage;
    const productListPerPage = products.slice(start, end);
    res.status(200).send({
      totalProduct: total,
      page: _defaultCurrentPage,
      limits: _defaultItemPerPage,
      productListPerPage: productListPerPage,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const createProduct = async (req, res) => {
  const { files } = req;
  const {
    name,
    cost,
    profit,
    price,
    status,
    inventoryStatus,
    stockAmount,
    description,
    categoryId,
    producerId,
  } = req.body;
  try {
    const productId = "P_" + Math.floor(Math.random() * 999999999).toString();
    const urlImgArr = files.map((file) => {
      return `${domain}/${file.path}`;
    });

    const newProduct = await Product.create({
      id: productId,
      name,
      cost,
      profit,
      price,
      image: urlImgArr,
      status,
      inventoryStatus,
      stockAmount,
      categoryId,
      producerId,
    });
    if (newProduct) {
      if (description) {
        const descArr = JSON.parse(description);
        const newArr = descArr.map((desc) => {
          const descId =
            "D_" + Math.floor(Math.random() * 999999999).toString();
          return {
            id: descId,
            name: desc.name,
            content: desc.content,
            productId: newProduct.id,
          };
        });
        await Description.bulkCreate(newArr);
        res.status(200).send(newProduct);
      } else {
        res.status(200).send(newProduct);
      }
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProduct = async (req, res) => {
  const { files } = req;
  const { productId } = req.query;
  const {
    name,
    cost,
    profit,
    price,
    status,
    inventoryStatus,
    stockAmount,
    categoryId,
    producerId,
    defaultImgs,
  } = req.body;
  try {
    let defaultImgArr = [];
    let urlArr = [];
    let urlImgArr = [];
    if (files.length > 0) {
      urlImgArr = files.map((file) => {
        return `${domain}/${file.path}`;
      });
    }
    if (defaultImgs) {
      defaultImgArr = JSON.parse(defaultImgs);
      urlArr = defaultImgArr.concat(urlImgArr);
    }

    await Product.update(
      {
        name,
        image: JSON.parse(defaultImgs) || urlImgArr || urlArr || null,
        cost,
        profit,
        price,
        status,
        inventoryStatus,
        stockAmount,
        categoryId,
        producerId,
      },
      {
        where: {
          id: productId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeProduct = async (req, res) => {
  const { productId } = req.query;
  const { descIds } = req.body;
  try {
    await Product.destroy({
      where: {
        id: productId,
      },
    });
    if(descIds) {
      await Description.destroy({
        where: {
          id: descIds
        }
      })
    }
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getProducerAndProduct,
  getProductList,
  getProductByProducer,
  getProductByCategory,
  getProductDetail,
  getProductByFreeText,
  createProduct,
  updateProduct,
  removeProduct,
};
