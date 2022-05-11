import React from "react";
import * as Modal from "../../../../components/Modal";
import * as FormControl from "../../../../components/Fields";
import { useDispatch, useSelector } from "react-redux";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import { ReducerState } from "../../../../redux/store";
import { IQueryList } from "../../../../interfaces/query";
import { getProductList } from "../../../../redux/actionCreators/ProductCreators";
import { EInventoryStatus, IProduct } from "../../../../models/Product";
import { EBadgeStatus } from "../../../../interfaces/badge";
import { EPaginationActionTypes } from "../../../../redux/actionTypes/PaginationActionTypes";
import { IProductCarts } from "../../../../models/Carts";
import { ILangs } from "../../../../interfaces/lang";
import Badge from "../../../../components/Badge";
import Button from "../../../../components/Button";
import DataLoading from "../../../../components/Loading/DataLoading";

interface ListModalProps {
  langs: ILangs;
  products: IProductCarts[];
  setProducts: React.Dispatch<React.SetStateAction<IProductCarts[]>>;
}

const ListModal: React.FunctionComponent<ListModalProps> = (props) => {
  const { langs, products, setProducts } = props;

  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );
  const { isProductList } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { productList } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );

  const [freeText, setFreeText] = React.useState<string>("");
  const [overFlow, setOverFlow] = React.useState<boolean>(false);
  const [selectedItems, setSelectItems] = React.useState<IProductCarts[]>([]);
  const typingRef = React.useRef<any>(null);

  const dispatch = useDispatch();

  const { totalProduct, limits, productListPerPage } = productList;

  const totalPage = Math.ceil(Number(totalProduct) / Number(limits));

  React.useEffect(() => {
    const query: IQueryList = {
      page: page,
      limits: 10,
      freeText: freeText,
    };
    dispatch(getProductList(query));
  }, [page, freeText]);

  React.useEffect(() => {
    if(products && products.length > 0) {
      setSelectItems(products);
    }
  }, [products])

  // Handle hide modal
  const handleHideModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_PRODUCT_LIST_MODAL,
    });
  };

  // Handle change prev page
  const handlePrev = () => {
    setOverFlow(true);
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: page - 1,
    });
    setTimeout(() => {
      setOverFlow(false);
    }, 1000);
  };

  // Handle change next page
  const handleNext = () => {
    setOverFlow(true);
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: page + 1,
    });
    setTimeout(() => {
      setOverFlow(false);
    }, 1000);
  };

  // Handle search
  const handleSearch = (v: string) => {
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }

    typingRef.current = setTimeout(() => {
      setFreeText(v);
    }, 500);
  };

  // Handle select product
  const handleSelect = (
    product: IProduct,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const temp = [...selectedItems];
    const index = temp.findIndex((i) => i.id === product.id);

    if (e.target.checked) {
      if (index !== -1) {
        temp[index].amount = (temp[index].amount || 0) + 1;
        setSelectItems(temp);
      } else {
        const newProduct = {
          id: product.id,
          productName: product.name,
          price: product.price,
          amount: 1,
        };
        temp.push(newProduct);
        setSelectItems(temp);
      }
    } else if (!e.target.checked) {
      setSelectItems(temp.filter((i) => i.id !== product.id));
    }
  };

  // Handle Submit
  const handleSubmit = () => {
    const temp = [...selectedItems];
    setProducts(temp);
    setSelectItems([]);
    handleHideModal();
  };

  // Get Badge status
  const renderBadgeStatus = (product: IProduct) => {
    switch (product.inventoryStatus) {
      case EInventoryStatus.inStock: {
        return EBadgeStatus.success;
      }
      case EInventoryStatus.outOfStock: {
        return EBadgeStatus.error;
      }
    }
  };

  // Get Badge title
  const renderBadgeTitle = (product: IProduct) => {
    switch (product.inventoryStatus) {
      case EInventoryStatus.inStock: {
        return langs?.status.stocking;
      }
      case EInventoryStatus.outOfStock: {
        return langs?.status.outOfStock;
      }
    }
  };

  // Get Badge icon
  const renderBadgeIcon = (product: IProduct) => {
    switch (product.inventoryStatus) {
      case EInventoryStatus.inStock: {
        return <i className="fa-solid fa-cart-arrow-down"></i>;
      }
      case EInventoryStatus.outOfStock: {
        return <i className="fa-solid fa-cart-arrow-up"></i>;
      }
    }
  };

  // Render product list
  const renderCheckBoxes = () => {
    if (productListPerPage) {
      return productListPerPage.map((product) => {
        return (
          <label htmlFor={product.id} key={product.id} className="list__item">
            <div className="item__group">
              <input
                id={product.id}
                type="checkbox"
                className="group__control"
                onChange={(e) => {
                  handleSelect(product, e);
                }}
              />
              <div className="group__label">
                <p className="label__name">{product.name}</p>
                <div className="label__note">
                  <p>{product.price?.toLocaleString()} VND</p>
                  <Badge
                    className="group__badge"
                    getStatus={() => renderBadgeStatus(product) || 0}
                    getTitle={() => renderBadgeTitle(product) || ""}
                    getIcon={() => renderBadgeIcon(product)}
                  />
                </div>
              </div>
            </div>
          </label>
        );
      });
    }
  };

  return (
    <Modal.Wrapper
      isShowing={isProductList}
      onHide={handleHideModal}
      className="list-modal"
    >
      <Modal.Header
        title={langs?.admin.order.modal.title_1}
        onHide={handleHideModal}
      />
      <Modal.Body
        className="list-modal__body"
        style={overFlow ? { overflow: "hidden" } : {}}
      >
        <div className="body__search">
          <FormControl.Search
            groupClassName="search__group"
            fieldClassName="group__control"
            inputClassName="control__input"
            iconClassName="control__icon"
            onChange={(e) => {
              const value = e.target.value;
              handleSearch(value);
            }}
          />
        </div>
        <div className="body__list">
          <DataLoading className="body__loading" />
          {renderCheckBoxes()}
        </div>
      </Modal.Body>

      <Modal.Footer className="list-modal__footer">
        <div className="footer__pagination">
          <Button
            className={`button--round ${
              page === 1 ? "button--round-disabled" : ""
            }`}
            onClick={handlePrev}
          >
            <i className="fa-solid fa-angle-left"></i>
          </Button>
          <Button
            className={`button--round ${
              page === totalPage ? "button--round-disabled" : ""
            }`}
            onClick={handleNext}
          >
            <i className="fa-solid fa-angle-right"></i>
          </Button>
        </div>

        <div className="footer__button">
          <Button
            type="button"
            className="button--submit"
            onClick={handleSubmit}
          >
            {langs?.button.save}
          </Button>
        </div>
      </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default ListModal;
