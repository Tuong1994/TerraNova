import React from "react";
import * as Card from "../../../components/Card";
import { ILangs } from "../../../interfaces/lang";
import { Link } from "react-router-dom";
import { IUser } from "../../../models/User";
import { IQueryList } from "../../../interfaces/query";
import { useDispatch } from "react-redux";
import { removeOrder } from "../../../redux/actionCreators/OrderCreators";
import Table from "../../../components/Table";
import OrderUserRow from "../../../components/TableRow/OrderUserRow";
import RemoveModal from "../../../components/Remove";

interface OrderProps {
  user: IUser | null;
  langs: ILangs;
}

const Order: React.FunctionComponent<OrderProps> = (props) => {
  const { user, langs } = props;

  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [orderId, setOrderId] = React.useState<string>("");

  const dispatch = useDispatch();

  const _removeOrder = () => {
    const query: IQueryList = {
      orderId: orderId,
      userId: user?.id,
    };
    dispatch(
      removeOrder(
        query,
        langs?.toastMessages.success.remove,
        langs?.toastMessages.error.remove
      )
    );
    setIsShow(false);
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
                  <OrderUserRow
                    key={order.id}
                    order={order}
                    langs={langs}
                    setIsShow={setIsShow}
                    setOrderId={setOrderId}
                  />
                );
              });
            }
          })()}
        </Table>
      </Card.Wrapper>

      <RemoveModal
        show={isShow}
        title={langs?.removeModal.orderTitle}
        content={() => {
          return (
            <div>
              <p>{langs?.removeModal.orderCancel}</p>
            </div>
          );
        }}
        onHide={() => setIsShow(false)}
        onRemove={_removeOrder}
      />
    </div>
  );
};

export default Order;
