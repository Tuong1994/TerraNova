import { domain } from "../../configs/setting";

export const productPaths = {
  getProductList: `${domain}/api/productManagement/getProductList`,
  getProductByCategory: `${domain}/api/productManagement/getProductByCategory`,
  getProductByProducer: `${domain}/api/productManagement/getProductByProducer`,
  getProductDetail: `${domain}/api/productManagement/getProductDetail`,
  getProductByFreeText: `${domain}/api/productManagement/getProductByFreeText`,
  createProduct: `${domain}/api/productManagement/createProduct`,
  updateProduct: `${domain}/api/productManagement/updateProduct`,
  removeProduct: `${domain}/api/productManagement/removeProduct`,
};
