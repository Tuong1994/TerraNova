const productType = {
  cpu: "cpu",
  mainboard: "mainboard",
  ram: "ram",
  hdd: "hdd",
  ssd: "ssd",
  vga: "vga",
  psu: "psu",
};

const getProductFieldByCategory = (id) => {
  if (id == productType.cpu) {
    return `select 
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
        pcspecs.tdp
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`;
  } else if (id == productType.mainboard) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        pcspecs.socket,
        pcspecs.chipset,
        pcspecs.ram
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`;
  } else if (id === productType.ram) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        pcspecs.capacity,
        pcspecs.ramBus
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`;
  } else if (id == productType.hdd) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        pcspecs.type,
        pcspecs.size
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`;
  } else if (id == productType.ssd) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        pcspecs.type,
        pcspecs.size
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`;
  } else if (id == productType.vga) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        pcspecs.graphicEngine,
        pcspecs.videoMemory,
        pcspecs.cudaCore,
        pcspecs.memoryInterface
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`;
  } else if (id == productType.psu) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        pcspecs.model,
        pcspecs.outputCapacity,
        pcspecs.efficiency
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        where categories.id = "${id}"`;
  }
};

const getProductFieldByProducer = (categoryId, producerId) => {
  if (categoryId == productType.cpu) {
    return `select 
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
        pcspecs.tdp
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`;
  } else if (categoryId == productType.mainboard) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        pcspecs.socket,
        pcspecs.chipset,
        pcspecs.ram
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`;
  } else if (categoryId === productType.ram) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        pcspecs.capacity,
        pcspecs.ramBus
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`;
  } else if (categoryId == productType.hdd) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        pcspecs.type,
        pcspecs.size
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`;
  } else if (categoryId == productType.ssd) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        pcspecs.type,
        pcspecs.size
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`;
  } else if (categoryId == productType.vga) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        pcspecs.graphicEngine,
        pcspecs.videoMemory,
        pcspecs.cudaCore,
        pcspecs.memoryInterface
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`;
  } else if (categoryId == productType.psu) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        pcspecs.model,
        pcspecs.outputCapacity,
        pcspecs.efficiency
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join categories
        on categories.id = products.categoryId
        inner join producers
        on producers.id = products.producerId
        where categories.id = "${categoryId}" and producers.id = "${producerId}"`;
  }
};

const getProductDetailField = (id, type) => {
  if (type == productType.cpu) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        producers.name as producerName,
        pcspecs.totalCores,
        pcspecs.totalThreads,
        pcspecs.baseFrequency,
        pcspecs.cache,
        pcspecs.busSpeed,
        pcspecs.tdp
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `;
  } else if (type == productType.mainboard) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        producers.name as producerName,
        pcspecs.socket,
        pcspecs.chipset,
        pcspecs.ram
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `;
  } else if (type === productType.ram) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        producers.name as producerName,
        pcspecs.capacity,
        pcspecs.ramBus
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `;
  } else if (type == productType.hdd) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        producers.name as producerName,
        pcspecs.type,
        pcspecs.size
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `;
  } else if (type == productType.ssd) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        producers.name as producerName,
        pcspecs.type,
        pcspecs.size
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `;
  } else if (type == productType.vga) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        producers.name as producerName,
        pcspecs.graphicEngine,
        pcspecs.videoMemory,
        pcspecs.cudaCore,
        pcspecs.memoryInterface
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `;
  } else if (type == productType.psu) {
    return `select 
        products.id as productId,
        products.name,
        products.image,
        products.price,
        products.productType,
        producers.name as producerName,
        pcspecs.model,
        pcspecs.outputCapacity,
        pcspecs.efficiency
        from products
        inner join pcspecs
        on pcspecs.productId = products.id
        inner join producers
        on producers.id = products.producerId
        where products.id = "${id}"
    `;
  }
};

module.exports = {
  productType,
  getProductFieldByCategory,
  getProductFieldByProducer,
  getProductDetailField,
};
