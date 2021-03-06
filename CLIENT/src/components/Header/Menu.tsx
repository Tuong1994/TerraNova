import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import SubMenu from "./SubMenu";
import utils from "../../utils";

interface MenuProps {
  menu: any;
  getProductByCategory(id: string): void;
  getProductByProducer(categoryId: string, producerId: string): void;
  getCourseByCategory(categoryId: string): void;
}

const Menu: React.FunctionComponent<MenuProps> = (props) => {
  const {
    menu,
    getProductByCategory,
    getProductByProducer,
    getCourseByCategory,
  } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const [tabActive, setTabActive] = React.useState<number>(-1);
  const [categoryActive, setCategoryActive] = React.useState<number>(-1);

  const langs = utils.changeLang(lang);

  const renderSubMenu = (data: any) => {
    if (data.name === langs?.headerMenu.product) {
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
    } else if (data.name === langs?.headerMenu.course) {
      return (
        // Menu Course
        <ul className="list__dropdown">
          {data.subMenu?.map((subMenu: any) => {
            return (
              <li className="dropdown__list" key={subMenu.subMenuId}>
                <Link
                  to={`/courseByCategory/${subMenu.subMenuId}`}
                  className="list__item"
                  onClick={() => getCourseByCategory(subMenu.subMenuId)}
                >
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
        <Link to={menu.path} className="list__link">
          {menu.name}
        </Link>

        {menu.name === langs?.headerMenu.home ||
        menu.name === langs?.headerMenu.aboutUs ||
        menu.name === langs?.headerMenu.movie
          ? null
          : renderSubMenu(menu)}
      </li>
    </div>
  );
};

export default Menu;
