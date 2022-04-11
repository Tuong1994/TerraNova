import React from "react";
import * as Modal from "../../../../components/Modal";
import * as Card from "../../../../components/Card";
import * as content from "../../../../configs/shipment";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { ELangs, ILangs } from "../../../../interfaces/lang";
import { IShipment } from "../../../../models/Shipment";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";
import { Link } from "react-router-dom";
import { EPaymentTypes } from "../../../../models/Order";
import { ICarts } from "../../../../models/Carts";
import CardBody from "../../../../components/Card/CardBody";
import CartsItem from "../../../../components/CartsItem";
import utils from "../../../../utils";

interface PaymentModalProps {
  cartsDetail: ICarts[];
  lang: string;
  langs: ILangs;
  note: string;
  shipment: IShipment;
  price: number;
  shipmentFee: number;
  vat: number;
  total: number;
  totalPay: number;
  paymentType: number;
}

const PaymentModal: React.FunctionComponent<PaymentModalProps> = (props) => {
  const {
    cartsDetail,
    lang,
    langs,
    shipment,
    price,
    shipmentFee,
    vat,
    total,
    totalPay,
    paymentType,
    note,
  } = props;

  const { isPayment } = useSelector(
    (state: ReducerState) => state.ModalReducer
  );

  const dispatch = useDispatch();

  const renderWard = () => {
    if (lang === ELangs.ENG) {
      return content.renderWardEng(parseInt(shipment?.ward || ""));
    } else if (lang === ELangs.VN) {
      return content.renderWardVn(parseInt(shipment?.ward || ""));
    }
  };

  const renderDistrict = () => {
    if (lang === ELangs.ENG) {
      return content.renderDistrictEng(parseInt(shipment?.district || ""));
    } else if (lang === ELangs.VN) {
      return content.renderDistrictVn(parseInt(shipment?.district || ""));
    }
  };

  const renderProvince = () => {
    if (lang === ELangs.ENG) {
      return content.renderProvinceEng(parseInt(shipment?.province || ""));
    } else if (lang === ELangs.VN) {
      return content.renderProvinceVn(parseInt(shipment?.province || ""));
    }
  };

  const renderPaymentType = () => {
    switch (paymentType) {
      case EPaymentTypes.cash: {
        return langs?.paymentType.cash;
      }
      case EPaymentTypes.zalo: {
        return langs?.paymentType.zalo;
      }
      case EPaymentTypes.vib: {
        return langs?.paymentType.vib;
      }
    }
  };

  const handleCloseModal = () => {
    dispatch({
      type: EModalActionTypes.CLOSE_PAYMENT_MODAL,
    });
  };

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
              if (cartsDetail && cartsDetail.length > 0) {
                return cartsDetail.map((i, index) => {
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

        {(() => {
          if (utils.checkObjectEmpty(shipment)) {
            return (
              <Card.Wrapper className="body__item">
                <CardBody>
                  <h5 className="item__title">
                    {langs?.productCarts.modal.shipment}
                  </h5>

                  <div className="item__content">
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
                  </div>

                  <div className="item__content">
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
                  </div>
                </CardBody>
              </Card.Wrapper>
            );
          }
        })()}

        <Card.Wrapper className="body__item">
          <CardBody>
            <ul className="item__list">
              <li className="list__item">
                <div className="item__inner">
                  <span>{langs?.productCarts.price} : </span>
                  <strong>{price.toLocaleString()} VND</strong>
                </div>
              </li>
              <li className="list__item">
                <div className="item__inner">
                  <span>{langs?.productCarts.shipment} : </span>
                  <strong>{shipmentFee.toLocaleString()} VND</strong>
                </div>
              </li>
            </ul>

            <div className="item__line"></div>

            <ul className="item__list">
              <li className="list__item">
                <div className="item__inner">
                  <span>{langs?.productCarts.total} : </span>
                  <strong>{total.toLocaleString()} VND</strong>
                </div>
              </li>
              <li className="list__item">
                <div className="item__inner">
                  <span>{langs?.productCarts.vat} : </span>
                  <strong>{vat.toLocaleString()} VND</strong>
                </div>
              </li>
              <li className="list__item">
                <div className="item__inner">
                  <span>{langs?.productCarts.totalPay} : </span>
                  <strong>{totalPay.toLocaleString()} VND</strong>
                </div>
              </li>
            </ul>

            <div className="item__line"></div>

            <div className="item__payment-type">
              <span>{langs?.productCarts.paymentType}</span>
              <strong>{renderPaymentType()}</strong>
            </div>
          </CardBody>
        </Card.Wrapper>

        {note && (
          <Card.Wrapper className="body__item">
            <CardBody>
              <p>
                {langs?.productCarts.note} : <strong>{note}</strong>
              </p>
            </CardBody>
          </Card.Wrapper>
        )}
      </Modal.Body>
      <Modal.Footer className="payment-modal__footer">
        <Link to="/" className="button--submit" onClick={handleCloseModal}>
          {langs?.button.continueBuy}
        </Link>
      </Modal.Footer>
    </Modal.Wrapper>
  );
};

export default PaymentModal;
