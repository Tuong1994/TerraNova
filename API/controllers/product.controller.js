const {
  Category,
  Producer,
  Product,
  sequelize,
} = require("../models");

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

const getProductByCategory = async (req, res) => {
  const { categoryId, page, limits } = req.query;
  const pageNumber = parseInt(page);
  const limitItem = parseInt(limits);
  try {
    const productListByCategory = await Category.findOne({
      where: {
        id: categoryId,
      },
      attributes: [["id", "categoryId"], "name"],
      include: [
        {
          model: Product,
          as: "productList",
          attributes: [["id", "productId"], "name", "price", "image"],
        },
      ],
    });
    if (page) {
      let total = productListByCategory.productList.length;
      let start = (pageNumber - 1) * limitItem;
      let end = start + limitItem;
      let productList = productListByCategory.productList.slice(start, end);
      let name = productListByCategory.name;
      res.status(200).send({
        totalProduct: total,
        page: page,
        limits: limits,
        categoryName: name,
        productListPerPage: productList,
      });
      return;
    }
    res.status(200).send(productListByCategory);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getProductByProducer = async (req, res) => {
  const { categoryId, producerId } = req.query;
  try {
    const [result] = await sequelize.query(`
      select 
      products.id as productId, 
      products.name,
      products.image,
      products.price

	    from products
      inner join categories 
      on categories.id = products.categoryId
      inner join producers
      on producers.id = products.producerId
	    where categories.id = "${categoryId}" and producers.id = "${producerId}";
    `);
    const producerDetail = await Producer.findOne({
      where: {
        id: producerId,
      },
      attributes: ["name"],
    });
    res.status(200).send({
      producerName: producerDetail.name,
      productList: result,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAccessoriesDetail = async (req, res) => {
  const { productId } = req.query;
  try {
      const [result] = await sequelize.query(`
      select
      products.id as productId,
      products.name,
      products.image,
      products.price,
      products.productType,

      producers.name as producerName,

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
      inner join producers
      on producers.id = products.producerId
      where products.id = "${productId}"
    `, {
      model: Product,
    });
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
