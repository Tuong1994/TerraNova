import React from "react";
import * as Card from "../../../../components/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import {
  getProductList,
  removeProduct,
} from "../../../../redux/actionCreators/ProductCreators";
import { ESortBy, IQueryList } from "../../../../interfaces/query";
import { IProduct } from "../../../../models/Product";
import Table from "../../../../components/Table";
import ContentHeader from "../../../../components/ContentHeader";
import ProductAdminRow from "../../../../components/TableRow/ProductAdminRow";
import Pagination from "../../../../components/Pagination";
import Filter from "../../../../components/Filter";
import DataLoading from "../../../../components/Loading/DataLoading";
import utils from "../../../../utils";
import RemoveModal from "../../../../components/Remove";

const ProductList: React.FunctionComponent<{}> = (props) => {
  const { productList } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { dataLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [product, setProduct] = React.useState<IProduct>({});
  const [filter, setFilter] = React.useState<string>("all");
  const [sortBy, setSortBy] = React.useState<number>(ESortBy.newest);
  const [freeText, setFreeText] = React.useState<string>("");
  const typingRef = React.useRef<any>(null);

  const { limits, totalProduct } = productList;

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  React.useEffect(() => {
    const query: IQueryList = {
      page: page,
      limits: 10,
      filter: filter,
      sortBy: sortBy,
      freeText: freeText,
    };
    dispatch(getProductList(query));
  }, [page, sortBy, filter, freeText]);

  // Search product
  const handleSearch = (v: string) => {
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }

    typingRef.current = setTimeout(() => {
      setFreeText(v);
    }, 500);
  };

  // Remove product
  const handleRemove = () => {
    const descIds = product?.description?.map((i) => {
      return i.id;
    });
    const query: IQueryList = {
      productId: product?.id || product?.productId,
    };
    const data = {
      descIds,
    };
    dispatch(
      removeProduct(
        query,
        langs?.toastMessages.success.remove,
        langs?.toastMessages.error.remove,
        data
      )
    );
    setIsShow(false);
  };

  // Render product list
  const renderProductList = () => {
    if (productList) {
      const { productListPerPage } = productList;
      return productListPerPage?.map((product, index) => {
        return (
          <ProductAdminRow
            key={product.id || product.productId}
            product={product}
            index={index}
            setIsShow={setIsShow}
            setProduct={setProduct}
          />
        );
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
            <Link to="/admin/product/addProduct" className="button--add">
              {langs?.button.addProduct}
            </Link>
          );
        }}
      />

      <Filter
        filterOptions={options?.productFilter}
        defaultFilterValue={filter}
        defaultSortValue={sortBy}
        isFilter
        onFilter={(value: any) => {
          setFilter(value);
        }}
        onSort={(value: any) => {
          setSortBy(value);
        }}
        onSearch={handleSearch}
      />

      <Card.Wrapper>
        <Table
          headers={[
            { title: langs?.tableHeader.number || "" },
            { title: langs?.tableHeader.image || "" },
            { title: langs?.tableHeader.productId || "" },
            { title: langs?.tableHeader.productName || "" },
            { title: langs?.tableHeader.price || "" },
            { title: langs?.tableHeader.createdAt || "" },
            { title: langs?.tableHeader.updatedAt || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          isNodata={productList?.productListPerPage}
          noDataTitle={langs?.noData.data || ""}
          renderNoDataLink={() => (
            <Link to="/admin/product/addProduct" className="button--add">
              {langs?.button.addProduct}
            </Link>
          )}
        >
          {(() => {
            if (!dataLoading) {
              return renderProductList();
            } else {
              return (
                <div style={{ height: "400px" }}>
                  <DataLoading />
                </div>
              );
            }
          })()}
        </Table>
      </Card.Wrapper>

      <Pagination perPage={limits} total={totalProduct} isShowContent={true} />
      <RemoveModal
        show={isShow}
        content={() => {
          return (
            <div>
              <p>{langs?.removeModal.productRemove}</p>
            </div>
          );
        }}
        onHide={() => setIsShow(false)}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default ProductList;
