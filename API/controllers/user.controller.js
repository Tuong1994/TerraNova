const { User, Order, Carts, CourseOrder } = require("../models");
const { domain } = require("../setting/setting");
const bcryptjs = require("bcryptjs");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const getUserList = async (req, res) => {
  const { page, limits, filter, freeText, sortBy } = req.query;
  const pageNumber = parseInt(page);
  const itemPerPage = parseInt(limits);
  try {
    let userList = [];

    let getSort = () => {
      if (sortBy) {
        if (parseInt(sortBy) === 1) {
          return "DESC";
        } else {
          return "ASC";
        }
      }
    };

    if (filter && filter !== "all") {
      if (freeText) {
        userList = await User.findAll({
          order: [["updatedAt", getSort() || "DESC"]],
          where: {
            role: filter,
            account: {
              [Op.like]: `%${freeText}%`,
            },
          },
        });
      } else {
        userList = await User.findAll({
          order: [["updatedAt", getSort() || "DESC"]],
          where: {
            role: filter,
          },
        });
      }
    } else if (freeText) {
      userList = await User.findAll({
        order: [["updatedAt", getSort() || "DESC"]],
        where: {
          account: {
            [Op.like]: `%${freeText}%`,
          },
        },
      });
    } else {
      userList = await User.findAll({
        order: [["updatedAt", getSort() || "DESC"]],
      });
    }

    if (page) {
      const total = userList.length;
      const start = (pageNumber - 1) * itemPerPage;
      const end = start + itemPerPage;
      const userPerPage = userList.slice(start, end);
      res.status(200).send({
        total: total,
        page: pageNumber,
        limits: itemPerPage,
        users: userPerPage,
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserWithOrder = async (req, res) => {
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
      include: [
        {
          model: Order,
          as: "orderList",
        },
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
        "id",
        "account",
        "firstName",
        "lastName",
        "email",
        "phone",
        "address",
        "ward",
        "district",
        "province",
        "birthDay",
        "gender",
        "avatar",
        "role",
      ],
      include: [
        {
          model: Order,
          as: "orders",
          attributes: [
            ["id", "orderId"],
            "note",
            "totalPay",
            "paymentType",
            "shipmentType",
            "shipmentFee",
            "shipmentDetail",
            "status",
            "products",
            "userId",
            "createdAt",
            "updatedAt",
          ],
        },
        {
          model: Carts,
          as: "carts",
          attributes: [
            ["id", "cartsId"],
            "products",
            "userId",
            "createdAt",
            "updatedAt",
          ],
        },
        {
          model: CourseOrder,
          as: "courses",
          order: [["createdAt", "DESC"]],
          attributes: [
            ["id", "courseOrderId"],
            "courseId",
            "course",
            "register",
            "createdAt",
            "updatedAt",
          ],
        },
      ],
    });
    res.status(200).send(userDetail);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createUser = async (req, res) => {
  const { file } = req;
  const {
    account,
    password,
    firstName,
    lastName,
    email,
    address,
    ward,
    district,
    province,
    phone,
    birthDay,
    gender,
    role,
  } = req.body;
  try {
    let urlImg = "";
    if (file) {
      urlImg = `${domain}/${file.path}`;
    }
    const userId = "U_" + Math.floor(Math.random() * 999999999).toString();
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
      ward,
      district,
      province,
      phone,
      birthDay,
      avatar: urlImg,
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
  const { file } = req;
  const {
    account,
    firstName,
    lastName,
    email,
    address,
    ward,
    district,
    province,
    phone,
    defaultImg,
    birthDay,
    gender,
    role,
  } = req.body;
  try {
    let urlImg = "";
    if(file) {
      urlImg = `${domain}/${file.path}`
    } else {
      urlImg = defaultImg
    }
    await User.update(
      {
        account,
        firstName,
        lastName,
        email,
        address,
        ward,
        district,
        province,
        phone,
        birthDay,
        gender,
        avatar: urlImg,
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

const changePassword = async (req, res) => {

}

module.exports = {
  getUserList,
  getUserDetail,
  createUser,
  updateUser,
  removeUser,
  getUserWithOrder,
};
