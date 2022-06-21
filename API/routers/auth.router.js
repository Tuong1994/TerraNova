const express = require("express");
const { signIn, signUp } = require("../controllers/auth.controller");
const {
  checkAccount,
} = require("../middlewares/validations/check-exist.middleware");
const authRouter = express.Router();
const passport = require("passport");
const { CLIENT_URL } = require("../setting/setting");

authRouter.post("/signIn", signIn);

authRouter.post("/signUp", checkAccount, signUp);



authRouter.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user
    });
  }
});

authRouter.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

authRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
})

authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = {
  authRouter,
};
