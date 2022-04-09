import React from "react";
import * as Modal from "../../../../components/Modal";
import * as Card from "../../../../components/Card";
import * as content from "../../../../configs/shipment";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { ILangs } from "../../../../interfaces/lang";
import { IShipment } from "../../../../models/Shipment";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import CardBody from "../../../../components/Card/CardBody";
import CartsItem from "../../../../components/CartsItem";

interface PaymentModalProps {
  lang: string;
  langs: ILangs;
  shipment: IShipment;
}

const PaymentModal: React.FunctionComponent<PaymentModalProps> = (props) => {
  const { lang, langs, shipment } = props;

  const { isPayment } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );
  const { carts } = useSelector((state: ReducerState) => state.CartsReducer);

  const dispatch = useDispatch();

  const renderWard = () => {
    if (lang === "ENG") {
      return content.renderWardEng(parseInt(shipment?.ward || ""));
    } else if (lang === "VN") {
      return content.renderWardVn(parseInt(shipment?.ward || ""));
    }
  };

  const renderDistrict = () => {
    if (lang === "ENG") {
      return content.renderDistrictEng(parseInt(shipment?.district || ""));
    } else if (lang === "VN") {
      return content.renderDistrictVn(parseInt(shipment?.district || ""));
    }
  };

  const renderProvince = () => {
    if (lang === "ENG") {
      return content.renderProvinceEng(parseInt(shipment?.province || ""));
    } else if (lang === "VN") {
      return content.renderProvinceVn(parseInt(shipment?.province || ""));
    }
  };

  const handleCloseModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_PAYMENT_MODAL,
    });
  }

  return (
    <Modal.Wrapper
      isShowing={isPayment}
      className="product-carts__payment-modal"
      onHide={handleCloseModal}
    >
      <Modal.Header
        title={langs?.productCarts.modal.paymentTitle}
        titleClassName="payment-modal__header"
        onHide={handleCloseModal}
      />
      <Modal.Body className="payment-modal__body">
        <Card.Wrapper className="body__item">
          <CardBody>
            <h5 className="item__title">{langs?.productCarts.modal.product}</h5>
            {(() => {
              if (carts && carts.length > 0) {
                return carts.map((i, index) => {
                  return (
                    <React.Fragment key={index}>
                      {i.products?.map((product, index) => {
                        return (
                          <CartsItem
                            key={index}
                            item={product}
                            groupClassName="item__group"
                            imgClassName="group__img"
                            contentClassName="group__content"
                          />
                        );
                      })}
                    </React.Fragment>
                  );
                });
              }
            })()}
          </CardBody>
        </Card.Wrapper>
        <Card.Wrapper className="body__item">
          <CardBody>
            <h5 className="item__title">
              {langs?.productCarts.modal.shipment}
            </h5>
            <h5 className="content__title">
              {langs?.productCarts.modal.receiver}
            </h5>
            <ul className="content__inner">
              <li className="inner__list">
                <div className="list__item">
                  <p>{langs?.form.name} : </p>
                  <strong>{shipment?.userName}</strong>
                </div>
              </li>
              <li className="inner__list">
                <div className="list__item">
                  <p>{langs?.form.phone} : </p>
                  <strong>{shipment?.phone}</strong>
                </div>
              </li>
              <li className="inner__list">
                <div className="list__item">
                  <p>{langs?.form.email} : </p>
                  <strong>{shipment?.email}</strong>
                </div>
              </li>
            </ul>

            <h5 className="content__title">
              {langs?.productCarts.modal.address}
            </h5>
            <ul className="content__inner">
              <li className="inner__list">
                <div className="list__item">
                  <p>{langs?.form.address} : </p>
                  <strong>{shipment?.address}</strong>
                </div>
              </li>
              <li className="inner__list">
                <div className="list__item">
                  <p>{langs?.form.ward} : </p>
                  <strong>{renderWard()}</strong>
                </div>
              </li>
              <li className="inner__list">
                <div className="list__item">
                  <p>{langs?.form.district} : </p>
                  <strong>{renderDistrict()}</strong>
                </div>
              </li>
              <li className="inner__list">
                <div className="list__item">
                  <p>{langs?.form.province} : </p>
                  <strong>{renderProvince()}</strong>
                </div>
              </li>
            </ul>
          </CardBody>
        </Card.Wrapper>
        <Card.Wrapper className="body__item">
          <CardBody></CardBody>
        </Card.Wrapper>
      </Modal.Body>
      <Modal.Footer>
        <div className="button--sumit">Confirm</div>
      </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default PaymentModal;
