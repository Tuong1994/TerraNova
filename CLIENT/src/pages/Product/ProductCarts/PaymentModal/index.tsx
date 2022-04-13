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
import Orderer from "./Orderer";
import CartsDetail from "./CartsDetail";
import Shipment from "./Shipment";
import TotalPay from "./TotalPay";

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

  const { orderer } = useSelector((state: ReducerState) => state.OrderReducer);

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
        {(() => {
          if (utils.checkObjectEmpty(orderer)) {
            return <Orderer langs={langs} orderer={orderer} />;
          }
        })()}

        <CartsDetail cartsDetail={cartsDetail} langs={langs} />

        {(() => {
          if (utils.checkObjectEmpty(shipment)) {
            return (
              <Shipment
                langs={langs}
                shipment={shipment}
                renderWard={renderWard}
                renderDistrict={renderDistrict}
                renderProvince={renderProvince}
              />
            );
          }
        })()}

        <TotalPay
          langs={langs}
          price={price}
          shipmentFee={shipmentFee}
          total={total}
          totalPay={totalPay}
          vat={vat}
          renderPaymentType={renderPaymentType}
        />

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
