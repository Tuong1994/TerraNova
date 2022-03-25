import React from "react";
import * as customHook from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../interfaces/route";
import { getProductByCategory, getProductByProducer } from "../../../redux/actionCreators/ProductCreators";
import { IQueryList } from "../../../interfaces/query";
import Pagination from "../../../components/Pagination";
import DataLoading from "../../../components/Loading/DataLoading";
import NoData from "../../../components/NoData";
import ProductCard from "./ProductCard/ProductCard";

const ProductList: React.FunctionComponent<
  RouteComponentProps<IRouteParams>
> = (props) => {

  const { productList } = useSelector(
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
    if (path.includes("productByCategory")) {
      const id = props.match.params.id;
      let query: IQueryList = {
        categoryId: id,
        page: page,
        limits: 10,
      };
      dispatch(getProductByCategory(query));
      
    } else if (path.includes("productByProducer")) {
      if(localStorage.getItem("query")) {
        let ids: any = {};
        let obj = localStorage.getItem("query");
        ids = JSON.parse(obj || "");
        if(ids) {
          const query: IQueryList = {
            categoryId: ids.categoryId,
            producerId: ids.producerId 
          }
          dispatch(getProductByProducer(query));
        }
      }
    }
  }, [page]);

  // Show product by category
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

  // Show product by producer
  const renderProductByProducer = () => {
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

  // Show product list by path
  const renderProduct = () => {
    if (path.includes("productByCategory")) {
      return renderProductByCategory();
    } else if (path.includes("productByProducer")) {
      return renderProductByProducer();
    }
  };

  // render title by path
  const renderTitle = () => {
    if (path.includes("productByCategory")) {
      return productList.categoryName;
    } else if (path.includes("productByProducer")) {
      return `${productList.producerName} PRODUCTS`;
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
