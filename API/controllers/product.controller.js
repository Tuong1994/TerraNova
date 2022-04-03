const { Category, Producer, Product, sequelize } = require("../models");
const {
  getProductFieldByCategory,
  getProductFieldByProducer,
  getProductDetailField,
  getProductByFreeText,
} = require("../interface/product");

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
  const { page, limits } = req.query;
  const pageNumber = parseInt(page);
  const itemPerPage = parseInt(limits);
  try {
    const [result] = await sequelize.query(`
      select 
      products.id as productId, 
      products.name,
      products.image,
      products.price,

      pcspecs.totalCores,
      pcspecs.totalThreads,
      pcspecs.baseFrequency,
      pcspecs.cache,
      pcspecs.busSpeed,
      pcspecs.tdp,
      pcspecs.socket,
      pcspecs.chipset,
      pcspecs.ram,
      pcspecs.capacity,
      pcspecs.ramBus,
      pcspecs.type,
      pcspecs.size,
      pcspecs.graphicEngine,
      pcspecs.videoMemory,
      pcspecs.cudaCore,
      pcspecs.memoryInterface,
      pcspecs.model,
      pcspecs.outputCapacity,
      pcspecs.Efficiency

      from products
      inner join pcspecs
      on pcspecs.productId = products.id
    `);
    if (page) {
      let total = result.length;
      let start = (pageNumber - 1) * itemPerPage;
      let end = start + itemPerPage;
      const productListPerPage = result.slice(start, end);
      res.status(200).send({
        productListPerPage: productListPerPage,
        totalProduct: total,
        page: pageNumber,
        limits: itemPerPage,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductByCategory = async (req, res) => {
  const { categoryId, page, limits, freeText } = req.query;
  const pageNumber = parseInt(page);
  const limitItem = parseInt(limits);

  try {
    const categoryDetail = await Category.findOne({
      where: {
        id: categoryId,
      },
    });
    if (page) {
      const selectedFields = () => {
        if (freeText) {
          return getProductByFreeText(categoryId, freeText);
        } else {
          return getProductFieldByCategory(categoryId);
        }
      };
      const [result] = await sequelize.query(selectedFields());
      let total = result.length;
      let start = (pageNumber - 1) * limitItem;
      let end = start + limitItem;
      let productList = result.slice(start, end);
      let name = categoryDetail.name;

      res.status(200).send({
        totalProduct: total,
        page: page,
        limits: limits,
        categoryName: name,
        productListPerPage: productList,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductByProducer = async (req, res) => {
  const { categoryId, producerId, page, limits, freeText } = req.query;
  const pageNumber = parseInt(page);
  const limitItem = parseInt(limits);

  try {
    const producerDetail = await Producer.findOne({
      where: {
        id: producerId,
      },
    });

    if (page) {
      const selectedFields = () => {
        if (freeText) {
          return getProductByFreeText(categoryId, freeText);
        } else {
          return getProductFieldByProducer(categoryId, producerId);
        }
      };
      const [result] = await sequelize.query(selectedFields());
      let total = result.length;
      let start = (pageNumber - 1) * limitItem;
      let end = start + limitItem;
      let productList = result.slice(start, end);
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

const getAccessoriesDetail = async (req, res) => {
  const { productId, productType } = req.query;
  try {
    const [result] = await sequelize.query(
      getProductDetailField(productId, productType),
      {
        model: Product,
      }
    );
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    const productId = `#P_${Math.floor(Math.random * 10000)}`;
    const newProduct = await Product.create({
      id: productId,
      name,
      price,
      description,
    });
    res.status(200).send(newProduct);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateProduct = async (req, res) => {
  const { productId } = req.query;
  const { name, price, description } = req.body;
  try {
    await Product.update(
      { name, price, description },
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
  try {
    await Product.destroy({
      where: {
        id: productId,
      },
    });
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
  getAccessoriesDetail,
  createProduct,
  updateProduct,
  removeProduct,
};
