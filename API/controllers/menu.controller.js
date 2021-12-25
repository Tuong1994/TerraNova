const { Menu, SubMenu, Category } = require("../models");

const getMenuList = async (req, res) => {
  try {
    const menuList = await Menu.findAll({
      attributes: [["id", "menuId"], "name", "path", "icon", "active"],
      include: [
        {
          model: SubMenu,
          as: "subMenu",
          order: [
            ["id", "ASC"]
          ],
          attributes: [["id", "subMenuId"], "name", "path", "active"],
          include: [
            {
              model: Category,
              as: "categoryMenu",
              attributes: [["id", "categoryId"], "name"],
            },
          ],
        },
      ],
    });
    res.status(200).send(menuList);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getMenuList,
};
