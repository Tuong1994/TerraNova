import React from "react";
import * as Card from "../../../components/Card";
import { ILangs } from "../../../interfaces/lang";
import { Link } from "react-router-dom";
import { IUser } from "../../../models/User";
import { IQueryList } from "../../../interfaces/query";
import { useDispatch } from "react-redux";
import Table from "../../../components/Table";
import OrderRow from "../../../components/TableRow/OrderRow";
import { removeOrder } from "../../../redux/actionCreators/OrderCreators";

interface OrderProps {
  user: IUser | null;
  langs: ILangs;
}

const Order: React.FunctionComponent<OrderProps> = (props) => {
  const { user, langs } = props;

  const dispatch = useDispatch();

  const _removeOrder = (id: string) => {
    const query: IQueryList = {
      orderId: id,
      userId: user?.id,
    };
    dispatch(
      removeOrder(
        query,
        langs?.toastMessages.success.remove,
        langs?.toastMessages.error.remove
      )
    );
  };

  return (
    <div className="overview__order">
      <h5 className="order__title">{langs?.user.overview.orderTitle}</h5>
      <Card.Wrapper className="order__list">
        <Table
          headers={[
            { title: langs?.tableHeader.orderId || "" },
            { title: langs?.tableHeader.orderStatus || "" },
            { title: langs?.tableHeader.products || "" },
            { title: langs?.tableHeader.totalPay || "" },
            { title: langs?.tableHeader.paymentType || "" },
            { title: langs?.tableHeader.createdAt || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          isNodata={user?.orders || 0}
          noDataTitle={langs?.noData.order || ""}
          renderNoDataLink={() => (
            <Link to="/" className="button--submit">
              {langs?.button.buyProduct}
            </Link>
          )}
        >
          {(() => {
            if (user?.orders && user?.orders?.length > 0) {
              return user?.orders.map((order) => {
                return (
                  <OrderRow
                    key={order.id}
                    order={order}
                    langs={langs}
                    removeOrder={_removeOrder}
                  />
                );
              });
            }
          })()}
        </Table>
      </Card.Wrapper>
    </div>
  );
};

export default Order;
