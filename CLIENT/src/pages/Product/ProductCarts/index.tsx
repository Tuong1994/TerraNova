import React from "react";
import * as customHooks from "../../../hooks";
import * as Card from "../../../components/Card";
import * as FormControl from "../../../components/Fields";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { ICarts, IProductCarts } from "../../../models/Carts";
import {
  EPaymentTypes,
  EShipmentType,
  EStatus,
  IOrder,
} from "../../../models/Order";
import {
  getCartsList,
  removeCarts,
  updateCarts,
} from "../../../redux/actionCreators/CartsCreators";
import { EModalActionTypes } from "../../../redux/actionTypes/ModalActionTypes";
import { EShipmentActionTypes } from "../../../redux/actionTypes/ShipmentActionTypes";
import { IQueryList } from "../../../interfaces/query";
import { createOrder } from "../../../redux/actionCreators/OrderCreators";
import { ECartsActionTypes } from "../../../redux/actionTypes/CartsActionTypes";
import { toast } from "react-toastify";
import Table from "../../../components/Table";
import CartsRow from "../../../components/TableRow/CartsRow";
import CartsPayment from "./CartsPayment";
import ShipmentModal from "./ShipmentModal";
import ButtonLoading from "../../../components/Loading/ButtonLoading";
import PaymentModal from "./PaymentModal";
import OrderModal from "./OrderModal";
import utils from "../../../utils";
import actions from "../../../configs/actions";

interface ProductCartsProps {}

const ProductCarts: React.FunctionComponent<ProductCartsProps> = (props) => {
  const { tempCarts } = useSelector(
    (state: ReducerState) => state.CartsReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { shipment } = useSelector(
    (state: ReducerState) => state.ShipmentReducer
  );
  const { user } = useSelector((state: ReducerState) => state.UserReducer);

  const [shipmentType, setShipmentType] = React.useState<number>(
    EShipmentType.noShipment
  );
  const [paymentType, setPaymentType] = React.useState<number>(
    EPaymentTypes.cash
  );
  const [cartsDetail, setCartsDetail] = React.useState<any>([]);
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
    if (user?.carts && user?.carts.length > 0) {
      setCartsDetail(user?.carts);
    } else if (tempCarts?.products && tempCarts?.products.length > 0) {
      setCartsDetail(tempCarts)
    }
  }, [user?.carts, tempCarts]);

  React.useEffect(() => { // Calculate total pay
    let sum = 0;
    if (utils.checkObjectEmpty(user)) {
      const products = cartsDetail[0]?.products;
      if (products && products?.length > 0) {
        if (products && products.length > 0) {
          for (let i = 0; i < products.length; i++) {
            sum += (products[i].price || 0) * (products[i].amount || 0);
          }
        }
      }
      setPrice(sum);
    } else {
      const products = cartsDetail?.products;
      if (products && products?.length > 0) {
        if (products && products.length > 0) {
          for (let i = 0; i < products.length; i++) {
            sum += (products[i].price || 0) * (products[i].amount || 0);
          }
        }
      }
      setPrice(sum);
    }
  }, [cartsDetail, tempCarts]);

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
      if (utils.checkObjectEmpty(user)) {
        // Check if user exist => call API create carts / if not => save temporary carts
        if (user?.carts) {
          const products = user?.carts[0]?.products;
          const newProducts = products?.map((i) => {
            if (i.productId === productUpdate.productId) {
              return {
                ...i,
                amount: productUpdate.amount,
              };
            } else {
              return { ...i };
            }
          });
          const newStock = {
            cartsId: user?.carts[0].cartsId,
            products: newProducts,
            userId: user?.id,
          };
          const query: IQueryList = {
            cartsId: user?.carts[0].cartsId,
          };
          const userQuery: IQueryList = {
            userId: user?.id,
          };
          dispatch(
            updateCarts(
              newStock,
              query,
              langs?.toastMessages.success.updateCart,
              langs?.toastMessages.error.updateCart,
              userQuery
            )
          );
        }

      } else {
        const products = tempCarts?.products;
        const newProducts = products?.map((i) => {
          if (i.productId === productUpdate.productId) {
            return {
              ...i,
              amount: productUpdate.amount,
            };
          } else {
            return { ...i };
          }
        });
        const stock = {
          products: newProducts,
        };
        dispatch(actions.openButtonLoading);
        setTimeout(() => {
          localStorage.setItem("carts", JSON.stringify(stock));
          dispatch({
            type: ECartsActionTypes.UPDATE_TEMP_CARTS,
            payload: stock,
          });
          dispatch(actions.closeButtonLoading);
          toast.success(langs?.toastMessages.success.updateCart);
        }, 1000);
      }
    }
  };

  // Remove item
  const handleRemoveItem = (item: IProductCarts) => {
    if (utils.checkObjectEmpty(user)) {
      // Check if user exist => call API create carts / if not => save temporary carts
      if (user?.carts) {
        const products = user?.carts[0].products;
        const newProducts = products?.filter(
          (i) => i.productId !== item.productId
        );
        const newStock: ICarts = {
          cartsId: user?.carts[0].cartsId,
          products: newProducts,
          userId: user?.id,
        };
        const query: IQueryList = {
          cartsId: user?.carts[0].cartsId,
        };
        const userQuery: IQueryList = {
          userId: user?.id,
        };
        dispatch(
          updateCarts(
            newStock,
            query,
            langs?.toastMessages.success.updateCart,
            langs?.toastMessages.error.updateCart,
            userQuery
          )
        );
      }

    } else {
      const products = tempCarts.products;
      const newProducts = products?.filter(
        (i) => i.productId !== item.productId
      );
      const stock = {
        products: newProducts,
      };
      localStorage.setItem("carts", JSON.stringify(stock));
      dispatch({
        type: ECartsActionTypes.UPDATE_TEMP_CARTS,
        payload: stock,
      });
      toast.success(langs?.toastMessages.success.updateCart);
    }
  };

  // Payment
  const handlePayment = () => {
    if (utils.checkObjectEmpty(user)) {
      // Check if user exist
      if (user?.carts) {
        const newOrder: IOrder = {
          note: note,
          paymentType: paymentType,
          totalPay: totalPay,
          status: EStatus.paid,
          shipmentType: shipmentType,
          shipmentFee: shipmentFee,
          shipmentDetail: shipment,
          products: user?.carts[0].products,
          userId: user?.id,
        };
        dispatch(
          createOrder(
            newOrder,
            langs?.toastMessages.success.createOrder,
            langs?.toastMessages.error.createOrder
          )
        );
        const query: IQueryList = {
          cartsId: user?.carts[0].cartsId,
        };
        const userQuery: IQueryList = {
          userId: user?.id,
        };
        setTimeout(() => {
          dispatch(removeCarts(query, userQuery));
        }, 500);
      }

    } else {
      const newOrder: IOrder = {
        note: note,
        paymentType: paymentType,
        totalPay: totalPay,
        status: EStatus.paid,
        shipmentType: shipmentType,
        shipmentFee: shipmentFee,
        shipmentDetail: shipment,
        products: tempCarts?.products,
        userId: "",
      };
      const stock = {
        products: [],
      };
      dispatch(
        createOrder(
          newOrder,
          langs?.toastMessages.success.createOrder,
          langs?.toastMessages.error.createOrder
        )
      );
      setTimeout(() => {
        localStorage.setItem("carts", JSON.stringify(stock));
        dispatch({
          type: ECartsActionTypes.UPDATE_TEMP_CARTS,
          payload: stock,
        });
      }, 500);
    }
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
          isNodata={(() => {
            if (user?.carts && user?.carts[0]?.products) {
              return user?.carts[0].products;
            } else if (tempCarts?.products) {
              return tempCarts?.products;
            } else {
              return 0;
            }
          })()}
          noDataTitle={langs?.noData.product || ""}
          renderNoDataLink={() => (
            <Link to="/" className="button--submit" type="button">
              {langs?.button.buyProduct}
            </Link>
          )}
        >
          {(() => {
            if (utils.checkObjectEmpty(user)) {
              if (user?.carts && user?.carts.length > 0) {
                return user?.carts.map((item: ICarts, index) => {
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
            } else {
              if (tempCarts?.products && tempCarts?.products?.length > 0) {
                return tempCarts?.products?.map((product, index) => {
                  return (
                    <CartsRow
                      key={index}
                      item={product}
                      removeItem={handleRemoveItem}
                      setProductUpdate={setProductUpdate}
                    />
                  );
                });
              }
            }
          })()}
        </Table>
      </Card.Wrapper>

      {/* Payment features */}
      {(user?.carts && user?.carts?.length > 0) ||
      (tempCarts?.products && tempCarts?.products?.length > 0) ? (
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
              onClick={() => {
                dispatch({
                  type: EModalActionTypes.OPEN_ORDER_MODAL,
                });
              }}
            >
              <ButtonLoading />
              <span>{langs?.button.payment}</span>
            </div>
          </div>
        </div>
      ) : null}

      {/* Payment summary */}
      {(user?.carts && user?.carts?.length > 0) ||
      (tempCarts?.products && tempCarts?.products?.length > 0) ? (
        <CartsPayment
          langs={langs}
          carts={(() => {
            if (user?.carts && user?.carts[0]?.products) {
              return user?.carts[0].products;
            }
          })()}
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
      ) : null}

      {/* Shipment modal */}
      <ShipmentModal lang={lang} langs={langs} />

      {/* Order modal */}
      <OrderModal
        langs={langs}
        options={options}
        shipmentType={shipmentType}
        handlePayment={handlePayment}
        setShipmentType={setShipmentType}
      />

      {/* Payment modal */}
      <PaymentModal
        cartsDetail={cartsDetail || tempCarts?.products}
        lang={lang}
        langs={langs}
        shipment={shipment}
        shipmentFee={shipmentFee}
        price={price}
        total={total}
        vat={vat}
        totalPay={totalPay}
        paymentType={paymentType}
        note={note}
      />
    </div>
  );
};

export default ProductCarts;
