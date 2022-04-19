import React from "react";
import * as Card from "../../../components/Card";
import Table from "../../../components/Table";
import { ILangs } from "../../../interfaces/lang";
import { Link } from "react-router-dom";
import { IUser } from "../../../models/User";
import OrderRow from "../../../components/TableRow/OrderRow";

interface OrderProps {
  user: IUser | null;
  langs: ILangs;
}

const Order: React.FunctionComponent<OrderProps> = (props) => {
  const { user, langs } = props;

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
          ]}
          isNodata={user?.orders || 0}
          noDataTitle={langs?.noData.order || ""}
          renderNoDataLink={() => (
            <Link to="/" className="button--submit" type="button">
              {langs?.button.buyProduct}
            </Link>
          )}
        >
          {(() => {
            if(user?.orders && user?.orders?.length > 0) {
              return user?.orders.map((order, index) => {
                return <OrderRow key={index} order={order} langs={langs} />
              })
            }
          })()}
        </Table>
      </Card.Wrapper>
    </div>
  );
};

export default Order;
