const { Producer, Product, sequelize } = require("../models");

const getCategoryWithProducerAndProduct = async (req, res) => {
  try {
    const [result] = await sequelize.query(`
      select categories.id as categoryId,
      categories.name,
      producers.id as producerId,
      producers.name
      from categories
      inner join category_producers
      on categories.id = category_producers.category_id
      inner join producers
      on producers.id = category_producers.producer_id
    `);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

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
  try {
    const [result] = await sequelize.query(`
      select 
      products.id as productId, 
      products.name,
      products.image,
      products.price,

      computerdescs.totalCores,
      computerdescs.totalThreads,
      computerdescs.baseFrequency,
      computerdescs.cache,
      computerdescs.busSpeed,
      computerdescs.tdp,
      computerdescs.socket,
      computerdescs.chipset,
      computerdescs.ram,
      computerdescs.capacity,
      computerdescs.ramBus,
      computerdescs.type,
      computerdescs.size,
      computerdescs.graphicEngine,
      computerdescs.videoMemory,
      computerdescs.cudaCore,
      computerdescs.memoryInterface,
      computerdescs.model,
      computerdescs.outputCapacity,
      computerdescs.Efficiency
      from products
      inner join computerdescs
      on computerdescs.productId = products.id
    `);
    if (page) {
      let total = result.length;
      let start = (page - 1) * limits;
      let end = start + limits;
      const productListPerPage = result.slice(start, end);
      res.status(200).send({
        productListPerPage: productListPerPage,
        totalProduct: total,
        page: page,
        limits: limits,
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
    });
    res.status(200).send(productDetail);
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
  getCategoryWithProducerAndProduct,
  getProducerAndProduct,
  getProductList,
  getProductDetail,
  createProduct,
  updateProduct,
  removeProduct,
};
