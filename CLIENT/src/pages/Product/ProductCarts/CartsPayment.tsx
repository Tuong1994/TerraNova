import React from "react";
import * as FormControl from "../../../components/Fields";
import * as Card from "../../../components/Card";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import Button from "../../../components/Button";
import utils from "../../../utils";

interface CartsPaymentProps {
  defaultValue: any;
  handleSubmit: (v: any) => void;
}

const CartsPayment: React.FunctionComponent<CartsPaymentProps> = (props) => {
  const { defaultValue, handleSubmit } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <div className="card__payment">
      <Formik initialValues={defaultValue} onSubmit={handleSubmit}>
        {(formikProps) => {
          return (
            <Form className="payment__form">
              <div className="form__note">
                <Field
                  name="note"
                  component={FormControl.TextArea}
                  label={langs?.productCarts.note}
                  placeholder=" "
                  inputClassName="note__input"
                  rows={10}
                />
              </div>

              <Card.CardWrapper className="form__payment">
                <h3 className="payment__title">
                  {langs?.productCarts.paymentType}
                </h3>
                <div className="payment__radio">
                  <Field name="paymentType" component={FormControl.Radio} />
                  <img
                    className="radio__icon"
                    src="../img/icon/cash.png"
                    alt="zalo"
                  />
                  <p>{langs?.productCarts.cash}</p>
                </div>
                <div className="payment__radio">
                  <Field name="paymentType" component={FormControl.Radio} />
                  <img
                    className="radio__icon"
                    src="../img/icon/zalo.png"
                    alt="zalo"
                  />
                  <p>Zalo - Pay</p>
                </div>
                <div className="payment__radio">
                  <Field name="paymentType" component={FormControl.Radio} />
                  <img
                    className="radio__icon"
                    src="../img/icon/vib.png"
                    alt="zalo"
                  />
                  <p>{langs?.productCarts.vib}</p>
                </div>
                <div className="payment__button">
                  <Button className="button--submit">
                    {langs?.productCarts.payment}
                  </Button>
                </div>
              </Card.CardWrapper>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CartsPayment;
