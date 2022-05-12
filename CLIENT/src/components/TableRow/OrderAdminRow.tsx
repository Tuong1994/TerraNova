import React from "react";
import { EBadgeStatus } from "../../interfaces/badge";
import { ILangs } from "../../interfaces/lang";
import { EPaymentTypes, EStatus, IOrder } from "../../models/Order";
import { Link } from "react-router-dom";
import Badge from "../Badge";
import TableCol from "../Table/TableCol";
import moment from "moment";

interface OrderAdminRowProps {
  order: IOrder;
  langs: ILangs;
  index: number;
  removeOrder: (id: string) => void;
}

const OrderAdminRow: React.FunctionComponent<OrderAdminRowProps> = (props) => {
  const { order, langs, index, removeOrder } = props;

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
    switch (order?.status) {
      case EStatus.paid: {
        return EBadgeStatus.success;
      }
      case EStatus.waiting: {
        return EBadgeStatus.warning;
      }
      case EStatus.delivering: {
        return EBadgeStatus.info;
      }
    }
  };

  const renderBadgeTitle = () => {
    switch (order?.status) {
      case EStatus.paid: {
        return langs?.status.paid;
      }
      case EStatus.waiting: {
        return langs?.status.waiting;
      }
      case EStatus.delivering: {
        return langs?.status.delivering;
      }
    }
  };

  return (
    <tr className="order-row">
      <TableCol>
        <div>{index + 1}</div>
      </TableCol>

      <TableCol>
        <div>{order?.id || order?.orderId}</div>
      </TableCol>

      <TableCol>
        <div>{order?.products?.length}</div>
      </TableCol>

      <TableCol>
        <div>
          <Badge status={getBadgeStatus()} title={renderBadgeTitle()} />
        </div>
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
        <div>{moment(order?.updatedAt).format("MM/DD/YYYY")}</div>
      </TableCol>

      <TableCol>
        <Link to={`/admin/order/editOrder/${order?.id || order?.orderId}`} className="button--edit">
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

export default OrderAdminRow;
