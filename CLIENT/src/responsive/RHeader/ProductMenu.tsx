import React from "react";
import { Link } from "react-router-dom";
import { getProductByCategory } from "../../redux/actionCreators/ProductCreators";

interface ProductMenuProps {
  menu: any;
  isShow: boolean;
  onHide(): void;
  onHideMenu(): void;
}

const ProductMenu: React.FunctionComponent<ProductMenuProps> = (props) => {
  const { menu, isShow, onHide, onHideMenu } = props;

  return (
    <div className={`menu__product ${isShow ? "menu__product--active" : ""}`}>
      <div className="product__icon" onClick={onHide}>
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div className="product__list">
        {menu?.map((item: any, index: number) => {
          return (
            <React.Fragment key={index}>
              {item?.subMenu?.map((i: any, index: number) => {
                return (
                  <React.Fragment key={index}>
                    {i?.categoryMenu?.map((i: any, index: number) => {
                      return (
                        <Link
                          to={`/productByCategory/${i.categoryId}`}
                          className="list__link"
                          key={index}
                          onClick={() => {
                            getProductByCategory(i.categoryId);
                            onHideMenu();
                          }}
                        >
                          {i.name}
                        </Link>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ProductMenu;
