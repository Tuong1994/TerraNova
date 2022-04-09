import React from "react";
import * as customHooks from "../../../hooks";
import * as Card from "../../../components/Card";
import * as FormControl from "../../../components/Fields";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { ICarts, IProductCarts } from "../../../models/Carts";
import { EPaymentTypes, EShipmentType, IOrder } from "../../../models/Order";
import {
  getCartsList,
  updateCarts,
} from "../../../redux/actionCreators/CartsCreators";
import { EModalActionTypes } from "../../../redux/actionTypes/ModalActionTypes";
import { EShipmentActionTypes } from "../../../redux/actionTypes/ShipmentActionTypes";
import { IQueryList } from "../../../interfaces/query";
import { createOrder } from "../../../redux/actionCreators/OrderCreators";
import Table from "../../../components/Table";
import CartsRow from "../../../components/Table/CartsRow";
import CartsPayment from "./CartsPayment";
import Pagination from "../../../components/Pagination";
import ShipmentModal from "./ShipmentModal";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
import utils from "../../../utils";
import PaymentModal from "./PaymentModal";

interface ProductCartsProps {}

const ProductCarts: React.FunctionComponent<ProductCartsProps> = (props) => {
  const { carts } = useSelector((state: ReducerState) => state.CartsReducer);
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { shipment } = useSelector(
    (state: ReducerState) => state.ShipmentReducer
  );
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );

  const [shipmentType, setShipmentType] = React.useState<number>(
    EShipmentType.noShipment
  );
  const [paymentType, setPaymentType] = React.useState<number>(
    EPaymentTypes.cash
  );
  const [shipmentFee, setShipmentFee] = React.useState<number>(0);
  const [price, setPrice] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);
  const [vat, setVat] = React.useState<number>(0);
  const [totalPay, setTotalPay] = React.useState<number>(0);
  const [note, setNote] = React.useState<string>("");
  const [productUpdate, setProductUpdate] = React.useState<IProductCarts>({});

  const dispatch = useDispatch();

  customHooks.useLoading();

  const langs = utils.changeLang(lang);

  const options = utils.getOptionByLang(lang);

  React.useEffect(() => {
    dispatch(getCartsList());
  }, []);

  React.useEffect(() => {
    let sum = 0;
    const products = carts[0]?.products;
    if (products && products?.length > 0) {
      if (products && products.length > 0) {
        for (let i = 0; i < products.length; i++) {
          sum += (products[i].price || 0) * (products[i].amount || 0);
        }
      }
    }
    setPrice(sum);
  }, [carts]);

  // React.useEffect(() => {
  //   let sum = 0;
  //   const products = carts[0]?.products;
  //   const newProducts = products?.map((i) => {
  //     if (i.productId === productUpdate.productId) {
  //       return {
  //         ...i,
  //         price: productUpdate.price,
  //         amount: productUpdate.amount,
  //       };
  //     } else {
  //       return { ...i };
  //     }
  //   });
  //   if (newProducts && newProducts?.length > 0) {
  //     if (newProducts && newProducts.length > 0) {
  //       for (let i = 0; i < newProducts.length; i++) {
  //         sum += (newProducts[i].price || 0) * (newProducts[i].amount || 0);
  //       }
  //     }
  //   }
  //   console.log(newProducts)
  // }, [productUpdate]);

  // Get Shipment Type
  React.useEffect(() => {
    if (shipmentType === EShipmentType.delivery) {
      dispatch({
        type: EModalActionTypes.OPEN_SHIPMENT_MODAL,
      });
    } else {
      dispatch({
        type: EShipmentActionTypes.REMOVE_SHIPMENT,
      });
    }
  }, [shipmentType]);

  // Get Shipment Fee
  React.useEffect(() => {
    if (utils.checkObjectEmpty(shipment)) {
      const fee = utils.getShipmentFee(
        parseInt(shipment.province || ""),
        parseInt(shipment.district || "")
      );
      setShipmentFee(fee || 0);
    } else {
      setShipmentFee(0);
    }
  }, [shipment]);

  // Update Item
  const handleUpdateItem = () => {
    if (utils.checkObjectEmpty(productUpdate)) {
      const products = carts[0]?.products;
      const newProducts = products?.map((i) => {
        if (i.productId === productUpdate.productId) {
          return {
            ...i,
            price: productUpdate.price,
            amount: productUpdate.amount,
          };
        } else {
          return { ...i };
        }
      });
      const newStock = {
        cartsId: carts[0].cartsId,
        products: newProducts,
      };
      const query: IQueryList = {
        cartsId: carts[0].cartsId,
      };
      dispatch(
        updateCarts(
          newStock,
          query,
          langs?.toastMessages.success.updateCart,
          langs?.toastMessages.error.updateCart
        )
      );
    }
  };

  // Remove item
  const handleRemoveItem = (item: IProductCarts) => {
    const products = carts[0].products;
    const newProducts = products?.filter((i) => i.productId !== item.productId);
    const newStock = {
      cartsId: carts[0].cartsId,
      products: newProducts,
    };
    const query: IQueryList = {
      cartsId: carts[0].cartsId,
    };
    dispatch(
      updateCarts(
        newStock,
        query,
        langs?.toastMessages.success.updateCart,
        langs?.toastMessages.error.updateCart
      )
    );
  };

  // Payment
  const handlePayment = () => {
    let newCarts: IOrder = {
      note: note,
      paymentType: paymentType,
      totalPay: totalPay,
      status: 1,
      shipmentType: shipmentType,
      shipmentFee: shipmentFee,
      shipmentDetail: shipment,
      products: carts[0].products,
      userId: "",
    };
    dispatch({
      type: EModalActionTypes.OPEN_PAYMENT_MODAL,
    });
    // dispatch(
    //   createOrder(
    //     newCarts,
    //     langs?.toastMessages.success.createOrder,
    //     langs?.toastMessages.error.createOrder
    //   )
    // );
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
            { title: langs?.tableHeader.total || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          isNodata={carts[0]?.products || 0}
          noDataTitle={langs?.noData.product || ""}
          renderNoDataLink={() => (
            <Link to="/" className="button--submit" type="button">
              {langs?.button.buyProduct}
            </Link>
          )}
        >
          {(() => {
            if (carts && carts.length > 0) {
              return carts.map((item: ICarts, index) => {
                return (
                  <React.Fragment key={index}>
                    {item.products?.map((product, index) => {
                      return (
                        <CartsRow
                          key={index}
                          item={product}
                          removeItem={handleRemoveItem}
                          setProductUpdate={setProductUpdate}
                        />
                      );
                    })}
                  </React.Fragment>
                );
              });
            }
          })()}
        </Table>
      </Card.Wrapper>

      {/* Payment features */}
      {carts && carts?.length > 0 && (
        <div className="product-carts__features">
          {/* Select shipment type */}
          <div className="features__select">
            <FormControl.SelectCustom
              placeholder={langs?.productCarts.receivedType}
              groupClassName="select__field"
              id="value"
              name="label"
              option={options?.shipmentType}
              value={options?.shipmentType.find(
                (i) => i.value === shipmentType
              )}
              onChange={(value) => {
                setShipmentType(value);
              }}
            />
          </div>

          {/* Button update/payment */}
          <div className="features__button">
            <div
              className={`button--submit ${
                buttonLoading ? "button--disabled" : ""
              }`}
              onClick={handleUpdateItem}
            >
              <ButtonLoading />
              <span>{langs?.button.update}</span>
            </div>

            <div
              className={`button--submit ${
                buttonLoading ? "button--disabled" : ""
              }`}
              onClick={handlePayment}
            >
              <ButtonLoading />
              <span>{langs?.button.payment}</span>
            </div>
          </div>
        </div>
      )}

      {/* Payment summary */}
      {carts && carts?.length > 0 && (
        <CartsPayment
          langs={langs}
          carts={carts[0].products}
          shipment={shipment}
          shipmentFee={shipmentFee}
          price={price}
          total={total}
          vat={vat}
          totalPay={totalPay}
          paymentType={paymentType}
          setShipmentFee={setShipmentFee}
          setPrice={setPrice}
          setTotal={setTotal}
          setVat={setVat}
          setTotalPay={setTotalPay}
          setPaymentType={setPaymentType}
          setNote={setNote}
        />
      )}

      {/* Shipment modal */}
      <ShipmentModal lang={lang} langs={langs} />

      {/* Payment modal */}
      <PaymentModal lang={lang} langs={langs} shipment={shipment} />
    </div>
  );
};

export default ProductCarts;
