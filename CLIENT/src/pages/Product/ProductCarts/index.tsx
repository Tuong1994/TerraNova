import React from "react";
import * as customHooks from "../../../hooks";
import * as Card from "../../../components/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { IOrder } from "../../../models/Order";
import Table from "../../../components/Table";
import CartsRow from "../../../components/Table/CartsRow";
import utils from "../../../utils";
import CartsPayment from "./CartsPayment";

interface ProductCartsProps {}

const ProductCarts: React.FunctionComponent<ProductCartsProps> = (props) => {
  const { orders } = useSelector((state: ReducerState) => state.OrderReducer);
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  customHooks.useLoading();

  const langs = utils.changeLang(lang);

  const initialValues = {
    note: "",
    paymentType: "",
  };

  const handleSubmit = (value: any) => {
    
  };

  return (
    <div className="product-carts">
      <Card.CardWrapper className="carts__card">
        <Table
          headers={[
            { title: langs?.tableHeader.image || "" },
            { title: langs?.tableHeader.productName || "" },
            { title: langs?.tableHeader.amount || "" },
            { title: langs?.tableHeader.price || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          isNodata={orders}
          noDataTitle={langs?.noData.product || ""}
          renderNoDataLink={() => (
            <Link to="/" className="button--submit" type="button">
              {langs?.button.buyProduct}
            </Link>
          )}
        >
          {(() => {
            if (orders && orders.length > 0) {
              return orders.map((order: IOrder) => {
                return <CartsRow key={utils.uuid()} item={order} />;
              });
            }
          })()}
        </Table>
        {orders?.length > 0 && (
          <CartsPayment
            defaultValue={initialValues}
            handleSubmit={handleSubmit}
          />
        )}
      </Card.CardWrapper>
    </div>
  );
};

export default ProductCarts;
