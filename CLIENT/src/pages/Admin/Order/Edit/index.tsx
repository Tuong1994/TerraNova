import React from "react";
import { Formik, Form } from "formik";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { IProductCarts } from "../../../../models/Carts";
import { IQueryList } from "../../../../interfaces/query";
import { IRouteParams } from "../../../../interfaces/route";
import {
  getOrderDetail,
  updateOrder,
} from "../../../../redux/actionCreators/OrderCreators";
import { getUserList } from "../../../../redux/actionCreators/UserCreators";
import { EShipmentActionTypes } from "../../../../redux/actionTypes/ShipmentActionTypes";
import { toast } from "react-toastify";
import ContentHeader from "../../../../components/ContentHeader";
import Button from "../../../../components/Button";
import ProductFields from "./Product";
import StatusFields from "./Status";
import ListModal from "../Modal/ListModal";
import InfoFields from "./Info";
import DeliveryFields from "./Delivery";
import OrdererFields from "./Orderer";
import AddProductModal from "../Modal/AddProductModal";
import AddShipmentModal from "../Modal/AddShipmentModal";
import PaymentFields from "./Payment";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import utils from "../../../../utils";

const EditOrder: React.FunctionComponent<RouteComponentProps<IRouteParams>> = (
  props
) => {
  const orderId = props.match.params.id;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { newProduct } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );
  const { shipment } = useSelector(
    (state: ReducerState) => state.ShipmentReducer
  );
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { userList } = useSelector((state: ReducerState) => state.UserReducer);
  const { orderDetail } = useSelector(
    (state: ReducerState) => state.OrderReducer
  );

  const [products, setProducts] = React.useState<IProductCarts[]>([]);
  const [amountUpdate, setAmountUpdate] = React.useState<number>(0);
  const [totalAmount, setTotalAmount] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);
  const [shipmentFee, setShipmentFee] = React.useState<number>(0);
  const [vat, setVat] = React.useState<number>(0);
  const [totalPay, setTotalPay] = React.useState<number>(0);
  const [shipmentType, setShipmentType] = React.useState<number>(0);
  const [paymentType, setPaymentType] = React.useState<number>(0);
  const [status, setStatus] = React.useState<number>(0);
  const [userId, setUserId] = React.useState<string>("");
  const [isReset, setIsReset] = React.useState<boolean>(false);

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  const dispatch = useDispatch();

  // Get Order Detail
  React.useEffect(() => {
    const query: IQueryList = {
      orderId: orderId,
    };
    dispatch(getOrderDetail(query));
  }, []);

  React.useEffect(() => {
    if (orderDetail) {
      setProducts(orderDetail.products || []);
      setTotalPay(orderDetail.totalPay || 0);
      setStatus(orderDetail.status || 0);
      setPaymentType(orderDetail.paymentType || 0);
      setShipmentType(orderDetail.shipmentType || 0);
      setShipmentFee(orderDetail.shipmentFee || 0);
      setUserId(orderDetail.userId || "");
      dispatch({
        type: EShipmentActionTypes.ADD_SHIPMENT,
        payload: orderDetail.shipmentDetail
      })
    }
  }, [orderDetail]);

  // Get user list
  React.useEffect(() => {
    const query: IQueryList = {
      page: 1,
      limits: 10,
    };
    dispatch(getUserList(query));
  }, []);

  // Handle auto select new product after created
  React.useEffect(() => {
    if (utils.checkObjectEmpty(newProduct)) {
      const selectProduct = {
        productId: newProduct?.id,
        productName: newProduct?.name,
        price: newProduct?.price,
        amount: 1,
      };
      setProducts([...products, selectProduct]);
    }
  }, [newProduct]);

  // Caculate amount and total price
  React.useEffect(() => {
    let sum = 0;
    let amount = products.reduce((total, product) => {
      return (total += product.amount || 0);
    }, 0);

    for (let i = 0; i < products.length; i++) {
      sum += (products[i].price || 0) * (products[i].amount || 0);
    }

    setTotalAmount(amount);
    setTotal(sum);
  }, [products, amountUpdate]);

  // Get shipment fee
  React.useEffect(() => {
    if (utils.checkObjectEmpty(shipment)) {
      const fee = utils.getShipmentFee(
        parseInt(shipment.province || "0"),
        parseInt(shipment.district || "0")
      );
      setShipmentFee(fee || 0);
    } else {
      setShipmentFee(0);
    }
  }, [shipment]);

  // Caculate VAT 10%
  React.useEffect(() => {
    const vat = (total * 10) / 100;
    setVat(vat);
  }, [total]);

  // Caculate total pay
  React.useEffect(() => {
    const sum = total + shipmentFee + vat;
    setTotalPay(sum);
  }, [total, shipmentFee, vat]);

  const initialValues = {
    note: orderDetail.note,
    totalPay: totalPay,
    paymentType: paymentType,
    shipmentType: shipmentType,
    shipmentFee: shipmentFee,
    status: status,
  };

  const handleSubmit = (values: any, action: any) => {
    let isValid = false;

    if (products.length === 0) {
      toast.error(langs?.toastMessages.error.product);
      isValid = true;
    } else if (values.shipmentType === 0) {
      toast.error(langs?.toastMessages.error.shipmentType);
      isValid = true;
    } else if (values.status === 0) {
      toast.error(langs?.toastMessages.error.status);
      isValid = true;
    } else if (userId === "") {
      toast.error(langs?.toastMessages.error.orderder);
      isValid = true;
    } else {
      isValid = false;
    }

    if (!isValid) {
      const query: IQueryList = {
        orderId: orderId,
      };
      const orderUpdate = {
        ...values,
        products: products,
        shipmentDetail: shipment,
        userId: userId,
      };
      dispatch(
        updateOrder(
          query,
          orderUpdate,
          langs?.toastMessages.success.update,
          langs?.toastMessages.error.update
        )
      );
    }
  };

  return (
    <div className="edit-order">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          return (
            <Form autoComplete="off">
              <ContentHeader
                name={langs?.admin.pageTitle.editOrder || ""}
                right={() => {
                  return (
                    <Button
                      type="submit"
                      className={`button--submit ${
                        buttonLoading ? "button--disabled" : ""
                      }`}
                    >
                      <ButtonLoading />
                      <span>{langs?.button.save}</span>
                    </Button>
                  );
                }}
              />
              <div className="edit-order__wrapper">
                <div className="wrapper__item">
                  <ProductFields
                    langs={langs}
                    products={products}
                    amountUpdate={amountUpdate}
                    setProducts={setProducts}
                    setAmountUpdate={setAmountUpdate}
                  />
                  <InfoFields
                    langs={langs}
                    totalAmount={totalAmount}
                    total={total}
                    shipmentFee={shipmentFee}
                    vat={vat}
                    totalPay={totalPay}
                  />
                </div>
                <div className="wrapper__item">
                  <StatusFields
                    langs={langs}
                    options={options}
                    status={status}
                    setStatus={setStatus}
                  />
                  <PaymentFields
                    langs={langs}
                    options={options}
                    paymentType={paymentType}
                    setPaymentType={setPaymentType}
                  />
                  <OrdererFields
                    langs={langs}
                    userList={userList}
                    userId={userId}
                    setUserId={setUserId}
                  />
                  <DeliveryFields
                    lang={lang}
                    langs={langs}
                    options={options}
                    isReset={isReset}
                    shipment={shipment}
                    shipmentType={shipmentType}
                    setShipmentType={setShipmentType}
                    setIsReset={setIsReset}
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>

      <ListModal langs={langs} products={products} setProducts={setProducts} />
      <AddProductModal langs={langs} options={options} />
      <AddShipmentModal
        langs={langs}
        options={options}
        isReset={isReset}
        shipment={shipment}
        setShipmentType={setShipmentType}
        setIsReset={setIsReset}
      />
    </div>
  );
};

export default EditOrder;
