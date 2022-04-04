import React from "react";
import * as customHooks from "../../../hooks";
import * as Card from "../../../components/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { ICarts } from "../../../models/Carts";
import { getCartsList } from "../../../redux/actionCreators/CartsCreators";
import Table from "../../../components/Table";
import CartsRow from "../../../components/Table/CartsRow";
import CartsPayment from "./CartsPayment";
import utils from "../../../utils";

interface ProductCartsProps {}

const ProductCarts: React.FunctionComponent<ProductCartsProps> = (props) => {
  const { carts } = useSelector((state: ReducerState) => state.CartsReducer);
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const dispatch = useDispatch();

  customHooks.useLoading();

  const langs = utils.changeLang(lang);


  React.useEffect(() => {
    dispatch(getCartsList());
  }, []);

  const initialValues = {
    note: "",
    paymentType: "",
  };

  const handleSubmit = (value: any) => {};

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
          isNodata={carts}
          noDataTitle={langs?.noData.product || ""}
          renderNoDataLink={() => (
            <Link to="/" className="button--submit" type="button">
              {langs?.button.buyProduct}
            </Link>
          )}
        >
          {(() => {
            if (carts && carts.length > 0) {
              return carts.map((item: ICarts) => {
                return <CartsRow key={utils.uuid()} item={item} />;
              });
            }
          })()}
        </Table>
        {carts?.length > 0 && (
          <CartsPayment />
        )}
      </Card.CardWrapper>
    </div>
  );
};

export default ProductCarts;
