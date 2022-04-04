import React from "react";
import * as FormControl from "../../../../components/Fields";
import * as Card from "../../../../components/Card";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import Button from "../../../../components/Button";
import utils from "../../../../utils";

interface CartsPaymentProps {}

const CartsPayment: React.FunctionComponent<CartsPaymentProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  return (
    <div className="card__payment">
      <FormControl.Note label={langs?.form.note} />
    </div>
  );
};

export default CartsPayment;
