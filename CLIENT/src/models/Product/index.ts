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
  stocking = 2,
  outOfStock = 3,
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
export interface IAccessories {
  productId?: string;
  producerName?: string;
  productType?: string;
  name?: string;
  image?: any;
  price?: number;
  description?: string;
  totalCores?: string;
  totalThreads?: string;
  baseFrequency?: string;
  cache?: string;
  busSpeed?: string;
  tdp?: string;
  socket?: string;
  chipset?: string;
  ram?: string;
  capacity?: string;
  ramBus?: string;
  type?: string;
  size?: string;
  graphicEngine?: string;
  videoMemory?: string;
  cudaCore?: string;
  memoryInterface?: string;
  model: string;
  outputCapacity?: string;
  efficiency?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
