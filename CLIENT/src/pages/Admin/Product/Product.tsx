import React from "react";
import ContentHeader from "../../../components/ContentHeader/ContentHeader";
import Table from "../../../components/Table/Table";
import TableRow from "../../../components/Table/TableRow";
import Card from "../../../components/Card/Card";
import Pagination from "../../../components/Pagination/Pagination";
import pageTitleList from "../../../configs/pageTitleList";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { getProductList } from "../../../redux/actionCreators/ProductCreators";
import { Link } from "react-router-dom";

const Product: React.FunctionComponent<{}> = (props) => {
  const { productList } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );

  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );  

  const { limits, totalProduct } = productList;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getProductList({ page: page, limits: 10 }));
  }, [page]);

  const renderProductList = () => {
    if (productList) {
      const { productListPerPage } = productList;
      return productListPerPage.map((product, index) => {
        return (
          <TableRow
            key={index}
            id={product.productId}
            name={product.name}
            price={product.price}
            image={product.image || ""}
            description={product.description}
          />
        );
      });
    }
    return;
  };

  return (
    <div className="product">
      <ContentHeader
        name={pageTitleList.product}
        right={() => {
          return (
            <Link to="/product/addProduct" className="button--add">
              Add Product
            </Link>
          );
        }}
      />
      <Card>
        <Table
          headers={[
            {
              title: "No.",
            },
            {
              title: "Name",
            },
            {
              title: "Price",
            },
            // {
            //   title: "Image",
            // },
            {
              title: "Description",
            },
            {
              title: "Features",
            },
          ]}
          isNodata={productList}
        >
          {renderProductList()}
        </Table>
        <Pagination perPage={limits} total={totalProduct} />
      </Card>
    </div>
  );
};

export default Product;
