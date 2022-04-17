const productType = {
  cpu: "cpu",
  mainboard: "mainboard",
  ram: "ram",
  hdd: "hdd",
  ssd: "ssd",
  vga: "vga",
  psu: "psu",
};

const status = {
  new: 1,
};

const inventoryStatus = {
  stocking: 1,
  outOfStock: 2,
};

const productFields = {
  cpu: `select 
  products.id as productId,
  products.name,
  products.image,
  products.price,
  products.productType,
  pcspecs.totalCores,
  pcspecs.totalThreads,
  pcspecs.baseFrequency,
  pcspecs.cache,
  pcspecs.busSpeed,
  pcspecs.tdp`,
  mainboard: `select 
  products.id as productId,
  products.name,
  products.image,
  products.price,
  products.productType,
  pcspecs.socket,
  pcspecs.chipset,
  pcspecs.ram`,
  ram: `select 
  products.id as productId,
  products.name,
  products.image,
  products.price,
  products.productType,
  pcspecs.capacity,
  pcspecs.ramBus`,
  hdd: `select 
  products.id as productId,
  products.name,
  products.image,
  products.price,
  products.productType,
  pcspecs.type,
  pcspecs.size`,
  ssd: `select 
  products.id as productId,
  products.name,
  products.image,
  products.price,
  products.productType,
  pcspecs.type,
  pcspecs.size`,
  vga: `select 
  products.id as productId,
  products.name,
  products.image,
  products.price,
  products.productType,
  pcspecs.graphicEngine,
  pcspecs.videoMemory,
  pcspecs.cudaCore,
  pcspecs.memoryInterface`,
  psu: `select 
  products.id as productId,
  products.name,
  products.image,
  products.price,
  products.productType,
  pcspecs.model,
  pcspecs.outputCapacity,
  pcspecs.efficiency`,
};

const getProductFieldByCategory = (id) => {
  if (id == productType.cpu) {
    return (
      productFields.cpu +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`
    );
  } else if (id == productType.mainboard) {
    return (
      productFields.mainboard +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`
    );
  } else if (id === productType.ram) {
    return (
      productFields.ram +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`
    );
  } else if (id == productType.hdd) {
    return (
      productFields.hdd +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`
    );
  } else if (id == productType.ssd) {
    return (
      productFields.ssd +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`
    );
  } else if (id == productType.vga) {
    return (
      productFields.vga +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`
    );
  } else if (id == productType.psu) {
    return (
      productFields.psu +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`
    );
  }
};

const getProductFieldByProducer = (categoryId, producerId) => {
  if (categoryId == productType.cpu) {
    return (
      productFields.cpu +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`
    );
  } else if (categoryId == productType.mainboard) {
    return (
      productFields.mainboard +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`
    );
  } else if (categoryId === productType.ram) {
    return (
      productFields.ram +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`
    );
  } else if (categoryId == productType.hdd) {
    return (
      productFields.hdd +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`
    );
  } else if (categoryId == productType.ssd) {
    return (
      productFields.ssd +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`
    );
  } else if (categoryId == productType.vga) {
    return (
      productFields.vga +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`
    );
  } else if (categoryId == productType.psu) {
    return (
      productFields.psu +
      `
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`
    );
  }
};

const getProductDetailField = (id, type) => {
  if (type == productType.cpu) {
    return (
      productFields.cpu +
      `,
        products.status,
        products.inventoryStatus,
        products.stockAmount,
        producers.name as producerName
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `
    );
  } else if (type == productType.mainboard) {
    return (
      productFields.mainboard +
      `,
        products.status,
        products.inventoryStatus,
        products.stockAmount,
        producers.name as producerName
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `
    );
  } else if (type === productType.ram) {
    return (
      productFields.ram +
      `,
        products.status,
        products.inventoryStatus,
        products.stockAmount,
        producers.name as producerName
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `
    );
  } else if (type == productType.hdd) {
    return (
      productFields.hdd +
      `,
        products.status,
        products.inventoryStatus,
        products.stockAmount,
        producers.name as producerName
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `
    );
  } else if (type == productType.ssd) {
    return (
      productFields.ssd +
      `,
        products.status,
        products.inventoryStatus,
        products.stockAmount,
        producers.name as producerName
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `
    );
  } else if (type == productType.vga) {
    return (
      productFields.vga +
      `,
        products.status,
        products.inventoryStatus,
        products.stockAmount,
        producers.name as producerName
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `
    );
  } else if (type == productType.psu) {
    return (
      productFields.psu +
      `,
        products.status,
        products.inventoryStatus,
        products.stockAmount,
        producers.name as producerName
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `
    );
  }
};

const getProductByFreeText = (id, freeText) => {
  if (freeText) {
    return ` select 
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
   inner join categories
   on products.categoryId = categories.id
   where categories.id = "${id}" and products.name like "%${freeText}%"`;
  }
};

module.exports = {
  productType,
  status,
  inventoryStatus,
  getProductFieldByCategory,
  getProductFieldByProducer,
  getProductDetailField,
  getProductByFreeText,
};
