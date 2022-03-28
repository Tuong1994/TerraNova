import React from "react";
import * as Card from "../../../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { getProductByProducer } from "../../../../redux/actionCreators/ProductCreators";
import { IAccessories } from "../../../../models/Product";
import { IQueryList } from "../../../../interfaces/query";

interface ProducRelatedProps {}

const ProductRelated: React.FunctionComponent<ProducRelatedProps> = (props) => {

  const { productList } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem("query")) {
      let ids: any = {};
      let obj = localStorage.getItem("query");
      ids = JSON.parse(obj || "");
      if (ids) {
        const query: IQueryList = {
          categoryId: ids.categoryId,
          producerId: ids.producerId,
        };
        dispatch(getProductByProducer(query));
      }
    }
  }, []);

  const renderItem = () => {
    if (productList) {
      const { productListPerPage } = productList;
      if (productListPerPage && productListPerPage?.length > 0) {
        return productListPerPage?.map((product, index) => {
          return (
            <Card.CardWrapper className="relate__item">
              <Card.Body key={index} className="item__inner">
                <div className="inner__content">
                  <img
                    className="content__img"
                    src="../img/product_img.jpg"
                    alt="img"
                  />
                  <div className="content__name">
                    <p>{product.name}</p>
                    <p>
                      Price :{" "}
                      <strong>{product.price?.toLocaleString()} VND</strong>
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card.CardWrapper>
          );
        });
      }
    }
  };

  return (
    <Card.CardWrapper className="content__relate">
      {renderItem()}
    </Card.CardWrapper>
  );
};

export default ProductRelated;
