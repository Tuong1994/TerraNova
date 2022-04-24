import React from "react";
import { Link } from "react-router-dom";
import { QUERY } from "../../configs/setting";

interface SubMenuProps {
  data: any;
  tabActive: number;
  categoryActive: number;
  setTabActive: React.Dispatch<React.SetStateAction<number>>;
  setCategoryActive: React.Dispatch<React.SetStateAction<number>>;
  getProductByCategory: (id: any) => void;
  getProductByProducer: (v1: any, v2: any) => void;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const {
    data,
    tabActive,
    categoryActive,
    setTabActive,
    setCategoryActive,
    getProductByCategory,
    getProductByProducer,
  } = props;

  return (
    <div className="list__submenu">
      {/* Menu right tab */}
      <div className="submenu__tabs">
        {data.subMenu?.map((subMenu: any, index: number) => {
          return (
            <span
              className={
                tabActive === index
                  ? "tabs__title tabs__title--active"
                  : "tabs__title"
              }
              key={subMenu.subMenuId}
              onMouseEnter={() => {
                setTabActive(index);
              }}
            >
              {subMenu.name}
            </span>
          );
        })}
      </div>
      {/* Menu right tab */}

      {/* Menu left content */}
      <div className="submenu__content">
        {data.subMenu?.map((subMemu: any, index: number) => {
          return (
            <div
              className={
                tabActive === index
                  ? "content__inner content__inner--active"
                  : "content__inner"
              }
              key={subMemu.subMenuId}
            >
              {subMemu.categoryMenu?.map((category: any, index: number) => {
                const categoryId = category.categoryId;
                return (
                  <div
                    className="inner__subtabs"
                    key={category.categoryId}
                    onMouseEnter={() => {
                      setCategoryActive(index);
                    }}
                    onMouseLeave={() => {
                      setCategoryActive(-1);
                    }}
                  >
                    <Link
                      to={`/productByCategory/${category.categoryId}`}
                      className={
                        categoryActive === index
                          ? "subtabs__link subtabs__link--active"
                          : "subtabs__link"
                      }
                      onClick={() => getProductByCategory(category.categoryId)}
                    >
                      {category.name}
                    </Link>
                    <div
                      className={
                        categoryActive === index
                          ? "subtabs__content subtabs__content--active"
                          : "subtabs__content"
                      }
                      key={category.categoryId}
                    >
                      {category.Producers.map(
                        (producer: any) => {
                          return (
                            <Link
                              to={`/productByProducer/${producer.producerId}`}
                              className="content__link"
                              key={producer.producerId}
                              onClick={() => {
                                const query = {
                                  categoryId: categoryId,
                                  producerId: producer.producerId,
                                };
                                localStorage.setItem(QUERY, JSON.stringify(query));
                                getProductByProducer(
                                  categoryId,
                                  producer.producerId
                                );
                              }}
                            >
                              {producer.name}
                            </Link>
                          );
                        }
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {/* Menu left content */}
    </div>
  );
};

export default SubMenu;
