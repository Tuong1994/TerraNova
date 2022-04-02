const { User } = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signIn = async (req, res) => {
  const { account, password } = req.body;
  try {
    const userLogin = await User.findOne({
      where: {
        account,
      },
    });
    if (userLogin) {
      const isAuth = bcryptjs.compareSync(password, userLogin.password);
      if (isAuth) {
        const secretKey = "ProPhet@456";
        const payLoad = {
          id: userLogin.id,
          account: userLogin.account,
          firstName: userLogin.firstName,
          lastName: userLogin.lastName,
          email: userLogin.email,
          address: userLogin.address,
          phone: userLogin.phone,
          birthDay: userLogin.birthDay,
          gender: userLogin.gender,
          avatar: userLogin.avatar,
          role: userLogin.role,
        };
        const accessToken = jwt.sign(payLoad, secretKey);
        res.status(200).send({
          message: "Login success",
          userInfo: payLoad,
          accessToken,
        });
      } else {
        res.status(403).send("Password incorrect");
      }
    } else {
      res.status(404).send(`Account ${account} incorrect`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const signUp = async (req, res) => {
  const {
    account,
    password,
    firstName,
    lastName,
    email,
    address,
    phone,
    birthDay,
    gender,
  } = req.body;
  try {
    const userId ="U_" + (Math.floor(Math.random() * 100000)).toString();
    const salt = bcryptjs.genSaltSync(10)
    const hashPassword = bcryptjs.hashSync(password, salt)
    const newUser = await User.create({
      id: userId,
      account,
      password: hashPassword,
      firstName,
      lastName,
      email,
      address,
      phone,
      birthDay,
      avatar: null,
      gender,
      role: "USER",
    });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  signIn,
  signUp,
};
