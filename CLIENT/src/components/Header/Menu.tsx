import React from "react";
import { EMenuName } from "../../interfaces/menu";
import { Link } from "react-router-dom";
import SubMenu from "./SubMenu";

interface MenuProps {
  menu: any;
  getProductByCategory(id: string): void;
  getProductByProducer(categoryId: string, producerId: string): void;
}

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const { menu, getProductByCategory, getProductByProducer } = props;
  const [tabActive, setTabActive] = React.useState<number>(-1);
  const [categoryActive, setCategoryActive] = React.useState<number>(-1);

  const renderSubMenu = (data: any) => {
    if (data.name === EMenuName.product) {
      return (
        // Menu Product
        <SubMenu
          data={data}
          tabActive={tabActive}
          categoryActive={categoryActive}
          setTabActive={setTabActive}
          setCategoryActive={setCategoryActive}
          getProductByCategory={getProductByCategory}
          getProductByProducer={getProductByProducer}
        />
      );
    } else if (data.name === EMenuName.course) {
      return (
        // Menu Course
        <ul className="list__dropdown">
          {data.subMenu?.map((subMenu: any, index: number) => {
            return (
              <li className="dropdown__list" key={index}>
                <Link to={subMenu.path} className="list__link">
                  {subMenu.name}
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }
  };

  return (
    <div>
      <li className="menu__list" key={menu.menuId}>
        {menu.name === EMenuName.product || menu.name === EMenuName.course ? (
          <span className="list__link">{menu.name}</span>
        ) : (
          <Link to={menu.path} className="list__link">
            {menu.name}
          </Link>
        )}
        {menu.name === EMenuName.home ||
        menu.name === EMenuName.aboutUs ||
        menu.name === EMenuName.contact
          ? null
          : renderSubMenu(menu)}
      </li>
    </div>
  );
};

export default Menu;
