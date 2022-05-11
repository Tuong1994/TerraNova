import React from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { IProductCarts } from "../../../../models/Carts";
import { IShipment } from "../../../../models/Shipment";
import ContentHeader from "../../../../components/ContentHeader";
import Button from "../../../../components/Button";
import ProductFields from "./Product";
import StatusFields from "./Status";
import ListModal from "../Modal/ListModal";
import InfoFields from "./Info";
import DeliveryFields from "./Delivery";
import CustomerFields from "./Customer";
import AddProductModal from "../Modal/AddProductModal";
import AddShipmentModal from "../Modal/AddShipmentModal";
import utils from "../../../../utils";

interface AddOrderProps {}

const AddOrder: React.FunctionComponent<AddOrderProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { newProduct } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );
  const { shipment } = useSelector(
    (state: ReducerState) => state.ShipmentReducer
  );

  const [products, setProducts] = React.useState<IProductCarts[]>([]);
  const [amountUpdate, setAmountUpdate] = React.useState<number>(0);
  const [totalAmount, setTotalAmount] = React.useState<number>(0);
  const [total, setTotal] = React.useState<number>(0);
  const [shipmentFee, setShipmentFee] = React.useState<number>(0);
  const [vat, setVat] = React.useState<number>(0);
  const [totalPay, setTotalPay] = React.useState<number>(0);
  const [shipmentType, setShipmentType] = React.useState<number>(0);
  const [isReset, setIsReset] = React.useState<boolean>(false);

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  const dispatch = useDispatch();

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
    note: "",
    totalPay: totalPay,
    paymentType: 0,
    shipmentType: 0,
    shipmentFee: shipmentFee,
    status: 0,
    userId: "",
  };

  const handleSubmit = (values: any) => {};

  return (
    <div className="add-order">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => {
          return (
            <Form autoComplete="off">
              <ContentHeader
                name={langs?.admin.pageTitle.addOrder || ""}
                right={() => {
                  return (
                    <Button className="button--submit">
                      {langs?.button.save}
                    </Button>
                  );
                }}
              />
              <div className="add-order__wrapper">
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
                  <StatusFields langs={langs} options={options} />
                  <DeliveryFields
                    langs={langs}
                    options={options}
                    isReset={isReset}
                    shipmentType={shipmentType}
                    setShipmentType={setShipmentType}
                  />
                  <CustomerFields langs={langs} />
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
        isReset={isReset}
        setShipmentType={setShipmentType}
        setIsReset={setIsReset}
      />
    </div>
  );
};

export default AddOrder;
