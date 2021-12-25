const express = require("express");
const { getMenuList } = require("../controllers/menu.controller");
const menuRouter = express.Router();

menuRouter.get("/getMenuList", getMenuList)

module.exports = {
    menuRouter,
}