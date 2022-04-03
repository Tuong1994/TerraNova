import React from "react";
import * as customHook from "../../../hooks";
import * as FormControl from "../../../components/Fields";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../interfaces/route";
import {
  getProductByCategory,
  getProductByProducer,
} from "../../../redux/actionCreators/ProductCreators";
import { IQueryList } from "../../../interfaces/query";
import { ELangs } from "../../../interfaces/lang";
import { EProductType } from "../../../models/Product";
import Pagination from "../../../components/Pagination";
import DataLoading from "../../../components/Loading/DataLoading";
import NoData from "../../../components/NoData";
import ProductCard from "./ProductCard";
import utils from "../../../utils";

const ProductList: React.FunctionComponent<
  RouteComponentProps<IRouteParams>
> = (props) => {
  const { productList } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const [freeText, setFreeText] = React.useState<string>("");
  const typingRef = React.useRef<any>(null);
  const dispatch = useDispatch();

  const id = props.match.params.id;
  const path = props.match.path;

  const langs = utils.changeLang(lang);
  const { limits, totalProduct } = productList;

  customHook.useLoading(productList);

  React.useEffect(() => {
    _getProductList();
  }, [page]);

  const _getProductList = () => {
    if (path.includes("productByCategory")) {
      let query: IQueryList = {
        categoryId: id,
        page: page,
        limits: 10,
        freeText: freeText,
      };
      dispatch(getProductByCategory(query));
    } else if (path.includes("productByProducer")) {
      if (localStorage.getItem("query")) {
        let ids: any = {};
        let obj = localStorage.getItem("query");
        ids = JSON.parse(obj || "");
        if (ids) {
          const query: IQueryList = {
            categoryId: ids.categoryId,
            producerId: ids.producerId,
            freeText: freeText,
          };
          dispatch(getProductByProducer(query));
        }
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFreeText(value);
    if (typingRef.current !== null) {
      clearTimeout(typingRef.current);
    }

    typingRef.current = setTimeout(() => {
      _getProductList();
    }, 1000);
  };

  // Show product by category
  const renderProductByCategory = () => {
    if (productList) {
      const { productListPerPage } = productList;
      if (productListPerPage && productListPerPage.length > 0) {
        return productListPerPage?.map((product) => {
          return <ProductCard product={product} key={utils.uuid()} />;
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
        return productListPerPage?.map((product) => {
          return <ProductCard product={product} key={utils.uuid()} />;
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

  const renderTitleByParams = () => {
    if (id) {
      switch (id) {
        case EProductType.cpu: {
          return langs?.headerMenu.cpu;
        }
        case EProductType.mainboard: {
          return langs?.headerMenu.mainboard;
        }
        case EProductType.ram: {
          return langs?.headerMenu.ram;
        }
        case EProductType.hdd: {
          return langs?.headerMenu.hdd;
        }
        case EProductType.ssd: {
          return langs?.headerMenu.ssd;
        }
        case EProductType.vga: {
          return langs?.headerMenu.vga;
        }
        case EProductType.psu: {
          return langs?.headerMenu.psu;
        }
        case EProductType.monitor: {
          return langs?.headerMenu.monitor;
        }
        case EProductType.printer: {
          return langs?.headerMenu.printer;
        }
        case EProductType.fax: {
          return langs?.headerMenu.faxMachine;
        }
      }
    }
  };

  // render title by path
  const renderTitle = () => {
    if (path.includes("productByCategory")) {
      return productList.categoryName || renderTitleByParams();
    } else if (path.includes("productByProducer")) {
      if (lang === ELangs.ENG) {
        return `${productList.producerName} ${langs?.productList.title}`;
      } else if (lang === ELangs.VN) {
        return `${langs?.productList.title} ${productList.producerName}`;
      }
    }
  };

  return (
    <div className="product-list">
      <div className="product-list__title">
        <h3>{renderTitle()}</h3>
      </div>
      <div className="product-list__search">
        <FormControl.Search value={freeText} onChange={handleChange} groupClassName="search__input" />
      </div>
      <div className="product-list__wrapper">
        <div className="wrapper__inner">
          <DataLoading />
          {renderProduct()}
        </div>
      </div>

      <Pagination perPage={limits} total={totalProduct} />
    </div>
  );
};

export default ProductList;
