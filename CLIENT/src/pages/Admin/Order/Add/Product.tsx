import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { ILangs } from "../../../../interfaces/lang";
import { useDispatch } from "react-redux";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import { IProductCarts } from "../../../../models/Carts";
import Button from "../../../../components/Button";
import utils from "../../../../utils";

interface ProductFieldsProps {
  langs: ILangs;
  amountUpdate: number;
  products: IProductCarts[];
  setProducts: React.Dispatch<React.SetStateAction<IProductCarts[]>>;
  setAmountUpdate: React.Dispatch<React.SetStateAction<number>>;
}

const ProductFields: React.FunctionComponent<ProductFieldsProps> = (props) => {
  const { langs, products, amountUpdate, setProducts, setAmountUpdate } = props;

  const dispatch = useDispatch();

  const handleUpdate = (id: string) => {
    const index = products.findIndex((i) => i.id === id);
    if (products[index]) {
      products[index].amount = amountUpdate;
      setProducts(products);
    }
  };

  const handleRemove = (id: string) => {
    setProducts(products.filter((i) => (i.id || i.productId) !== id));
    setAmountUpdate(0);
  };

  return (
    <Card.Wrapper className="item__inner item__product">
      <h3 className="inner__title">{langs?.admin.order.subTitle_1}</h3>

      {/* Product Action */}
      <div className="inner__action">
        <Button
          type="button"
          className="button--submit"
          onClick={() => {
            dispatch({
              type: EModalActionTypes.OPEN_PRODUCT_LIST_MODAL,
            });
          }}
        >
          {langs?.button.chooseProduct}
        </Button>

        <span>{langs?.admin.order.or}</span>

        <Button
          type="button"
          className="button--add"
          onClick={() => {
            dispatch({
              type: EModalActionTypes.OPEN_ADD_PRODUCT_MODAL,
            });
          }}
        >
          {langs?.button.addProduct}
        </Button>
      </div>

      {/* Product list */}
      <div className="inner__list">
        {products.map((product) => {
          return (
            <Card.Wrapper
              className="list__item"
              key={product.id || product.productId}
            >
              <div className="item__content">
                <p>{product.productName}</p>
              </div>
              <div className="item__content">
                <p>
                  {(
                    (product.price || 0) * (product.amount || 0)
                  ).toLocaleString()}{" "}
                  VND
                </p>
              </div>
              <div className="item__content">
                <FormControl.InputCustom
                  type="number"
                  value={product.amount}
                  groupClassName="content__input"
                  onKeyPress={(e) => {
                    utils.checkKeyNumberType(
                      e,
                      langs?.toastMessages.error.onlyNumber
                    );
                  }}
                  onChange={(e) => {
                    const value = e.target.value;
                    product.amount = parseInt(value);
                    setAmountUpdate(product.amount);
                  }}
                  onBlur={() => {
                    handleUpdate(product.id || product.productId || "");
                  }}
                />
              </div>
              <div
                className="item__content"
                onClick={() => {
                  handleRemove(product.id || product.productId || "");
                }}
              >
                <i className="fa fa-times"></i>
              </div>
            </Card.Wrapper>
          );
        })}
      </div>
    </Card.Wrapper>
  );
};

export default ProductFields;
