const express = require("express");
const { getCartsList, getCartsDetail, createCarts, updateCarts, removeCarts } = require("../controllers/carts.controller");
const cartsRouter = express.Router();

cartsRouter.get("/getCartsList", getCartsList);

cartsRouter.get("/getCartsDetail", getCartsDetail);

cartsRouter.post("/createCarts", createCarts);

cartsRouter.put("/updateCarts", updateCarts);

cartsRouter.delete("/removeCarts", removeCarts)

module.exports = {
    cartsRouter,
}