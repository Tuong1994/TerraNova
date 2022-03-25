import React from "react";
import { useDispatch} from "react-redux";
import { headerMenu } from "../../configs/menuList";
import { getProductByCategory, getProductByProducer } from "../../redux/actionCreators/ProductCreators";
import { ELoadingActionTypes } from "../../redux/actionTypes/LoadingActionTypes";
import Menu from "./Menu";

const _defaultCurrentPage = 1;
const _defaultItemPerPage = 10;

const HeaderMenu: React.FunctionComponent<{}> = (props) => {
  const dispatch = useDispatch();

  const productByCategory = (id: string) => {
    dispatch({
      type: ELoadingActionTypes.OPEN_PAGE_LOADING,
    });
    let query = {
      categoryId: id,
      page: _defaultCurrentPage,
      limits: _defaultItemPerPage,
    };
    localStorage.setItem("categoryId", id);
    dispatch(getProductByCategory(query));
    setTimeout(() => {
      dispatch({
        type: ELoadingActionTypes.CLOSE_PAGE_LOADING,
      });
    }, 2000);
  };

  const productByProducer = (categoryId: string, producerId: string) => {
    dispatch({
      type: ELoadingActionTypes.OPEN_PAGE_LOADING,
    });
    let query = {
      categoryId: categoryId,
      producerId: producerId,
      page: _defaultCurrentPage,
      limits: _defaultItemPerPage,
    };
    dispatch(getProductByProducer(query));
    setTimeout(() => {
      dispatch({
        type: ELoadingActionTypes.CLOSE_PAGE_LOADING,
      });
    }, 2000);
  }

  const renderMenuData = () => {
    return headerMenu.map((menu: any, index: number) => {
      return (
       <Menu key={index} menu={menu} getProductByCategory={productByCategory} getProductByProducer={productByProducer} />
      );
    });
  };

  return (
    <ul className="header__menu">
      {renderMenuData()}
    </ul>
  );
};

export default HeaderMenu;
