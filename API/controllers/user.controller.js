const bcryptjs = require("bcryptjs");
const { User } = require("../models");

const getUserList = async (req, res) => {
  try {
    const userList = await User.findAll({
      attributes: [
        ["id", "userId"],
        "account",
        "firstName",
        "lastName",
        "email",
        "phone",
        "address",
        "birthDay",
        "gender",
        "role",
      ],
    });
    res.status(200).send(userList);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserDetail = async (req, res) => {
  const { userId } = req.query;
  try {
    const userDetail = await User.findOne({
      where: {
        id: userId,
      },
      attributes: [
        ["id", "userId"],
        "account",
        "firstName",
        "lastName",
        "email",
        "phone",
        "address",
        "birthDay",
        "gender",
        "role",
      ],
    });
    res.status(200).send(userDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createUser = async (req, res) => {
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
    role,
  } = req.body;
  try {
    const userId = "User_" + Math.floor(Math.random() * 100000).toString();
    const salt = bcryptjs.genSaltSync(10);
    const hashPassword = bcryptjs.hashSync(password, salt);
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
      role,
    });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req, res) => {
  const { userId } = req.query;
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
    role,
  } = req.body;
  try {
    await User.update(
      {
        account,
        password,
        firstName,
        lastName,
        email,
        address,
        phone,
        birthDay,
        gender,
        role,
      },
      {
        where: {
          id: userId,
        },
      }
    );
    res.status(200).send("Update success");
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeUser = async (req, res) => {
  const { userId } = req.query;
  try {
    await User.destroy({
      where: {
        id: userId,
      },
    });
    res.status(200).send("Remove success");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getUserList,
  getUserDetail,
  createUser,
  updateUser,
  removeUser,
};
