import { domain } from "../../configs/setting";

export const orderPaths = {
    getOrderList: `${domain}/api/orderManagement/getOrderList`,
    getOrderDetail: `${domain}/api/orderManagement/getOrderDetail`,
    createOrder: `${domain}/api/orderManagement/createOrder`,
    updateOrder: `${domain}/api/orderManagement/updateOrder`,
    removeOrder: `${domain}/api/orderManagement/removeOrder`,
}