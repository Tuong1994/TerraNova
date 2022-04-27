import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import { EBadgeStatus } from "../../interfaces/badge";
import { ILangs } from "../../interfaces/lang";
import { EPaymentTypes, EStatus, IOrder } from "../../models/Order";
import Badge from "../Badge";
import TableCol from "../Table/TableCol";

interface OrderRowProps {
  order: IOrder;
  langs: ILangs;
  removeOrder(i: string): void;
}

const OrderRow: React.FunctionComponent<OrderRowProps> = (props) => {
  const { order, langs, removeOrder } = props;

  const renderPaymentType = () => {
    switch (order?.paymentType) {
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

  const getBadgeStatus = () => {
    if (order?.status === EStatus.paid) {
      return EBadgeStatus.success;
    }
  };

  return (
    <tr className="order-row">
      <TableCol>
        <div>{order?.id || order?.orderId}</div>
      </TableCol>
      <TableCol>
        <div>
          <Badge status={getBadgeStatus()} title={langs?.status.paid} />
        </div>
      </TableCol>
      <TableCol>
        <div>{order?.products?.length}</div>
      </TableCol>
      <TableCol>
        <div>{order?.totalPay?.toLocaleString()} VND</div>
      </TableCol>
      <TableCol>
        <div>{renderPaymentType()}</div>
      </TableCol>
      <TableCol>
        <div>{moment(order?.createdAt).format("MM/DD/YYYY")}</div>
      </TableCol>
      <TableCol>
        <Link to="/" className="button--edit">
          <i className="far fa-edit"></i>
        </Link>
        <div
          className="button--delete"
          onClick={() => removeOrder(order?.id || order?.orderId || "")}
        >
          <i className="fas fa-trash-alt"></i>
        </div>
      </TableCol>
    </tr>
  );
};

export default OrderRow;
