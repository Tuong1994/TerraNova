import React from "react";
import * as customHooks from "../../../hooks";
import * as Card from "../../../components/Card";
import * as FormControls from "../../../components/Fields";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { ICarts } from "../../../models/Carts";
import { IOrder } from "../../../models/Order";
import { getCartsList } from "../../../redux/actionCreators/CartsCreators";
import { createOrder } from "../../../redux/actionCreators/OrderCreators";
import { IQueryList } from "../../../interfaces/query";
import Table from "../../../components/Table";
import CartsRow from "../../../components/Table/CartsRow";
import CartsPayment from "./CartsPayment";
import utils from "../../../utils";
import Pagination from "../../../components/Pagination";

interface ProductCartsProps {}

const ProductCarts: React.FunctionComponent<ProductCartsProps> = (props) => {
  const { carts } = useSelector((state: ReducerState) => state.CartsReducer);
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );

  const [shipmentType, setShipmentType] = React.useState<number>(0);
  const [shipment, setShipment] = React.useState<number>(0);
  const [price, setPrice] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);
  const [vat, setVat] = React.useState<number>(0);
  const [totalPay, setTotalPay] = React.useState<number>(0);
  const [note, setNote] = React.useState<string>("");

  const dispatch = useDispatch();

  customHooks.useLoading();

  const langs = utils.changeLang(lang);

  const { cartsList, totalCarts, limits } = carts;

  const options = [
    { label: langs?.productCarts.noShipment, value: 1 },
    { label: langs?.productCarts.delivery, value: 2 },
  ];

  React.useEffect(() => {
    const query: IQueryList = {
      page: page,
      limits: 10,
    };
    dispatch(getCartsList(query));
  }, []);

  const handlePayment = () => {
    let newCarts: IOrder = {
      note: note,
      paymentType: 0,
      totalPay: totalPay,
      status: 0,
      shipmentType: shipmentType,
      shipmentFee: shipment,
      products: cartsList,
      userId: "",
    };
    dispatch(
      createOrder(
        newCarts,
        langs?.toastMessages.success.createOrder,
        langs?.toastMessages.error.createOrder
      )
    );
  };

  return (
    <div className="product-carts">
      <h3 className="product-carts__title">{langs?.productCarts.title}</h3>
      <Card.Wrapper className="product-carts__card">
        <Table
          headers={[
            { title: langs?.tableHeader.image || "" },
            { title: langs?.tableHeader.productName || "" },
            { title: langs?.tableHeader.amount || "" },
            { title: langs?.tableHeader.price || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          isNodata={cartsList}
          noDataTitle={langs?.noData.product || ""}
          renderNoDataLink={() => (
            <Link to="/" className="button--submit" type="button">
              {langs?.button.buyProduct}
            </Link>
          )}
        >
          {(() => {
            if (cartsList && cartsList?.length > 0) {
              return cartsList.map((item: ICarts) => {
                return <CartsRow key={utils.uuid()} item={item} />;
              });
            }
          })()}
        </Table>

        <Pagination
          perPage={limits}
          total={totalCarts}
          className="card__pagination"
        />

        {/* Payment area */}
        {cartsList && cartsList?.length > 0 && (
          <div className="card__features">
            <div className="features__select">
              <FormControls.Select
                placeholder={langs?.productCarts.receivedType}
                groupClassName="select__field"
                id="value"
                label="label"
                option={options}
                value={options.find((i) => i.value === shipmentType)}
                onChange={(value) => {
                  setShipmentType(value);
                }}
              />
            </div>
            <div className="features__button">
              <div className="button--submit">{langs?.button.update}</div>
              <div className="button--submit" onClick={handlePayment}>
                {langs?.button.payment}
              </div>
            </div>
          </div>
        )}

        {/* Payment summary */}
        {cartsList && cartsList?.length > 0 && (
          <CartsPayment
            langs={langs}
            carts={cartsList}
            shipment={shipment}
            price={price}
            total={total}
            vat={vat}
            totalPay={totalPay}
            setShipment={setShipment}
            setPrice={setPrice}
            setTotal={setTotal}
            setVat={setVat}
            setTotalPay={setTotalPay}
            setNote={setNote}
          />
        )}
      </Card.Wrapper>
    </div>
  );
};

export default ProductCarts;
