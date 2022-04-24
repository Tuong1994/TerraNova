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
}

export enum EProductStatus {
  new = 1,
}

export enum EInventoryStatus {
  inStock = 1,
  outOfStock = 2,
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
  name?: string | number;
  content?: string;
}
export interface IProduct {
  id?: string;
  productId?: string;
  producerName?: string;
  productType?: string;
  name?: string;
  image?: any;
  price?: number;
  description?: IDescription[];
  status?: number;
  inventoryStatus?: number;
  stockAmount?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
