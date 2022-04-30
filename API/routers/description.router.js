const express = require("express");
const {
  getDescriptionList,
  createDescription,
  updateDescription,
  removeDescription,
} = require("../controllers/description.controller");
const descriptionRouter = express.Router();

descriptionRouter.get("/getDescriptionList", getDescriptionList);

descriptionRouter.post("/createDescription", createDescription);

descriptionRouter.put("/updateDescription", updateDescription);

descriptionRouter.delete("/removeDescription", removeDescription);

module.exports = {
  descriptionRouter,
};
