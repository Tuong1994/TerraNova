const express = require("express");
const { signIn, signUp } = require("../controllers/auth.controller");
const { checkAccount } = require("../middlewares/validations/check-exist.middleware");
const authRouter = express.Router();
const passport = require('passport')

authRouter.post("/signIn", signIn);

authRouter.post("/signUp", checkAccount, signUp)


authRouter.get('/auth/facebook', passport.authenticate('facebook',{scope:'email'}));

authRouter.get('/auth/facebook/callback',
  passport.authenticate('facebook', { successRedirect : '/', failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

authRouter.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});


function ensureAuthenticated(req, res, next) {
if (req.isAuthenticated()) { return next(); }
res.redirect('/login')
}

module.exports = {
  authRouter,
};
