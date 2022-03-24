import React from "react";
import * as customHook from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { RouteComponentProps, Link } from "react-router-dom";
import { IRouteParams } from "../../../interfaces/route";
import { getProductByCategory } from "../../../redux/actionCreators/ProductCreators";
import Pagination from "../../../components/Pagination";
import DataLoading from "../../../components/Loading/DataLoading";
import NoData from "../../../components/NoData";
import ProductCard from "./ProductCard/ProductCard";

const ProductList: React.FunctionComponent<
  RouteComponentProps<IRouteParams>
> = (props) => {
  const { productList, productByProducer } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );
  const dispatch = useDispatch();
  const { limits, totalProduct } = productList;
  const path = props.match.path;

  customHook.useLoading(productList);

  React.useEffect(() => {
    const id = props.match.params.id;
    let query = {
      categoryId: id,
      page: page,
      limits: 10,
    };
    dispatch(getProductByCategory(query));
  }, [page]);

  const renderProductByCategory = () => {
    if (productList) {
      const { productListPerPage } = productList;
      if (productListPerPage && productListPerPage.length > 0) {
        return productListPerPage?.map((product, index) => {
          return <ProductCard product={product} key={index} />;
        });
      } else {
        return <NoData />;
      }
    }
  };

  const renderProductByProducer = () => {
    if (productByProducer && productByProducer.productList.length > 0) {
      return productByProducer.productList.map((product, index) => {
        return <ProductCard product={product} key={index} />;
      });
    } else {
      return <NoData />;
    }
  };

  const renderProduct = () => {
    if (path.includes("productByCategory")) {
      return renderProductByCategory();
    } else if (path.includes("productByProducer")) {
      return renderProductByProducer();
    }
  };

  const renderTitle = () => {
    if (path.includes("productByCategory")) {
      return productList.categoryName;
    } else if (path.includes("productByProducer")) {
      return `${productByProducer.producerName} PRODUCTS`;
    }
  };

  return (
    <div className="product-list">
      <div className="product-list__title">
        <h3>{renderTitle()}</h3>
      </div>
      <div className="product-list__wrapper">
        <DataLoading />
        {renderProduct()}
      </div>
      <Pagination perPage={limits} total={totalProduct} />
    </div>
  );
};

export default ProductList;
