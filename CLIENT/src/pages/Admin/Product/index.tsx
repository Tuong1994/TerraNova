import React from "react";
import ContentHeader from "../../../components/ContentHeader";
import Table from "../../../components/Table";
import ProductAdminRow from "../../../components/TableRow/ProductAdminRow";
import Card from "../../../components/Card/Card";
import Pagination from "../../../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { getProductList } from "../../../redux/actionCreators/ProductCreators";
import { Link } from "react-router-dom";
import utils from "../../../utils";

const Product: React.FunctionComponent<{}> = (props) => {
  const { productList } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const { limits, totalProduct } = productList;

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  React.useEffect(() => {
    dispatch(getProductList({ page: page, limits: 10 }));
  }, [page]);

  const renderProductList = () => {
    if (productList) {
      const { productListPerPage } = productList;
      return productListPerPage?.map((product, index) => {
        return <ProductAdminRow product={product} key={index} />;
      });
    }
    return;
  };

  return (
    <div className="product">
      <ContentHeader
        name={langs?.admin.pageTitle.product || ""}
        right={() => {
          return (
            <Link to="/product/addProduct" className="button--add">
              {langs?.button.addProduct}
            </Link>
          );
        }}
      />
      <Card>
        <Table
          headers={[
            { title: langs?.tableHeader.number || "" },
            { title: langs?.tableHeader.productName || "" },
            { title: langs?.tableHeader.price || "" },
            { title: langs?.tableHeader.image || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          isNodata={productList?.productListPerPage}
          noDataTitle={langs?.noData.data || ""}
          renderNoDataLink={() => (
            <Link to="/admin" className="button--add" type="button">
              {langs?.button.addProduct}
            </Link>
          )}
        >
          {renderProductList()}
        </Table>

        <Pagination
          perPage={limits}
          total={totalProduct}
          isShowContent={true}
        />
      </Card>
    </div>
  );
};

export default Product;
