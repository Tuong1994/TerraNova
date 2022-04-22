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

module.exports = {
  productType,
  status,
  inventoryStatus,
};
