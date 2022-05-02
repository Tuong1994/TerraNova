export enum EProductType {
  cpu = "cpu",
  ram = "ram",
  vga = "vga",
  hdd = "hdd",
  ssd = "ssd",
  psu = "psu",
  mainboard = "mainboard",
  monitor = "monitor",
  printer = "printer",
  fax = "fax",
  laptop = "laptop",
  pcSet = "pc_set",
}

export enum EProducer {
  asus = "asus",
  asrock = "asrock",
  gigabyte = "gigabyte",
  msi = "msi",
  intel = "intel",
  amd = "amd",
  seagate = "seagate",
  western = "western",
  kingston = "kingston",
  corsair = "corsair",
  deepcool = "deepcool",
  coolermaster = "coolermaster",
  dell = "dell",
  hp = "hp",
  samsung = "samsung",
  lg = "lg",
  viewsonic = "viewsonic"
}

export enum EProductStatus {
  new = 1,
  secondHand = 2,
}

export enum EInventoryStatus {
  inStock = 1,
  outOfStock = 2,
}

export enum EProfit {
  half = 50,
  full = 100,
}
export interface ICategory {
  categoryId?: string;
  name?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export interface IProducer {
  producerId?: string;
  name?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface IDescription {
  id?: number | string;
  name?: string | number;
  content?: string;
}
export interface IProduct {
  id?: string;
  productId?: string;
  producerName?: string;
  name?: string;
  image?: any;
  cost?: number;
  profit?: number;
  price?: number;
  description?: IDescription[];
  status?: number;
  inventoryStatus?: number;
  stockAmount?: number;
  categoryId?: string;
  producerId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
