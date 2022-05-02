import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  headerMenuENG,
  headerMenuVN,
  headerMenuCH,
} from "../../configs/menuList";
import { ELangs } from "../../interfaces/lang";
import { IQueryList } from "../../interfaces/query";
import { getCourseByCategory } from "../../redux/actionCreators/CourseCreators";
import {
  getProductByCategory,
  getProductByProducer,
} from "../../redux/actionCreators/ProductCreators";
import { ReducerState } from "../../redux/store";
import Menu from "./Menu";
import actions from "../../configs/actions";

const _defaultCurrentPage = 1;
const _defaultItemPerPage = 10;
const _defaultTimeout = 2000;

interface HeaderMenuProps {}

const HeaderMenu: React.FunctionComponent<HeaderMenuProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [menuList, setMenuList] = React.useState<any>([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (lang) {
      getMenuByLang();
    }
  }, [lang]);

  const productByCategory = (id: string) => {
    dispatch(actions.openPageLoading);
    const query: IQueryList = {
      categoryId: id,
      page: _defaultCurrentPage,
      limits: _defaultItemPerPage,
    };
    localStorage.setItem("categoryId", id);
    dispatch(getProductByCategory(query));
    setTimeout(() => {
      dispatch(actions.closePageLoading);
    }, _defaultTimeout);
  };

  const productByProducer = (categoryId: string, producerId: string) => {
    dispatch(actions.openPageLoading);
    const query: IQueryList = {
      categoryId: categoryId,
      producerId: producerId,
      page: _defaultCurrentPage,
      limits: _defaultItemPerPage,
    };
    dispatch(getProductByProducer(query));
    setTimeout(() => {
      dispatch(actions.closePageLoading);
    }, _defaultTimeout);
  };

  const courseByCategory = (categoryId: string) => {
    dispatch(actions.openPageLoading);
    const query: IQueryList = {
      categoryId: categoryId,
      page: _defaultCurrentPage,
      limits: _defaultItemPerPage,
    };
    dispatch(getCourseByCategory(query));
    setTimeout(() => {
      dispatch(actions.closePageLoading);
    }, _defaultTimeout);
  };

  const getMenuByLang = () => {
    switch (lang) {
      case ELangs.ENG: {
        setMenuList(headerMenuENG);
        break;
      }
      case ELangs.VN: {
        setMenuList(headerMenuVN);
        break;
      }
      case ELangs.CH: {
        setMenuList(headerMenuCH);
        break;
      }
      default:
        return;
    }
  };

  const renderMenuData = () => {
    return menuList.map((menu: any) => {
      return (
        <Menu
          key={menu.menuId}
          menu={menu}
          getProductByCategory={productByCategory}
          getProductByProducer={productByProducer}
          getCourseByCategory={courseByCategory}
        />
      );
    });
  };

  return <ul className="header__menu">{renderMenuData()}</ul>;
};

export default HeaderMenu;
