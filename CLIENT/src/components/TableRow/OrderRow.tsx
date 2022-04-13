import moment from "moment";
import React from "react";
import { ILangs } from "../../interfaces/lang";
import { EPaymentTypes, IOrder } from "../../models/Order";
import Badge from "../Badge";
import TableCol from "../Table/TableCol";

interface OrderRowProps {
  order: IOrder;
  langs: ILangs;
}

const OrderRow: React.FunctionComponent<OrderRowProps> = (props) => {
  const { order, langs } = props;

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

  return (
    <tr className="order-row">
      <TableCol>
        <div>{order?.id || order?.orderId}</div>
      </TableCol>
      <TableCol>
        <div>
          <Badge status={order?.status} title={langs?.status.paid} />
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
    </tr>
  );
};

export default OrderRow;
