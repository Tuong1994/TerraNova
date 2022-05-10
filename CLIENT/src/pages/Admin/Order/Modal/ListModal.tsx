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
import Badge from "../../../../components/Badge";
import Button from "../../../../components/Button";
import utils from "../../../../utils";
import { EPaginationActionTypes } from "../../../../redux/actionTypes/PaginationActionTypes";
import DataLoading from "../../../../components/Loading/DataLoading";

interface ListModalProps {}

const ListModal: React.FunctionComponent<ListModalProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );
  const { isProductList } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { productList } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );

  const langs = utils.changeLang(lang);

  const dispatch = useDispatch();

  const { totalProduct, limits, productListPerPage } = productList;

  const totalPage = Math.ceil(Number(totalProduct) / Number(limits));

  React.useEffect(() => {
    const query: IQueryList = {
      page: page,
      limits: 10,
    };
    dispatch(getProductList(query));
  }, [page]);

  const handleHideModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_PRODUCT_LIST_MODAL,
    });
  };

  const handlePrev = () => {
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: page - 1,
    });
  };

  const handleNext = () => {
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: page + 1,
    });
  };

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
              />
              <div className="group__label">
                <p>{product.name}</p>
                <p>{product.price?.toLocaleString()} VND</p>
                <Badge
                  isResponsive={true}
                  getStatus={() => renderBadgeStatus(product) || 0}
                  getTitle={() => renderBadgeTitle(product) || ""}
                  getIcon={() => renderBadgeIcon(product)}
                />
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
      <Modal.Body className="list-modal__body">
        <DataLoading className="body__loading" />
        <div className="body__search">
          <FormControl.Search
            groupClassName="search__group"
            fieldClassName="group__control"
            inputClassName="control__input"
            iconClassName="control__icon"
          />
        </div>
        <div className="body__list">{renderCheckBoxes()}</div>
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
          <Button className="button--submit">{langs?.button.save}</Button>
        </div>
      </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default ListModal;
