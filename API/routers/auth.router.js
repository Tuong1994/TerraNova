const express = require("express");
const { signIn, signUp } = require("../controllers/auth.controller");
const { checkAccount } = require("../middlewares/validations/check-exist.middleware");
const authRouter = express.Router();

authRouter.post("/signIn", signIn);

authRouter.post("/signUp", checkAccount, signUp)

module.exports = {
  authRouter,
};
