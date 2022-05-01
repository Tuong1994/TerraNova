import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";
import utils from "../../../../utils";

interface PriceFieldsProps {
  langs: ILangs;
  cost: number;
  profit: number;
  price: number;
  isReset: boolean;
  options: IOptionsLang;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setCost: React.Dispatch<React.SetStateAction<number>>;
  setProfit: React.Dispatch<React.SetStateAction<number>>;
}

const PriceFields: React.FunctionComponent<PriceFieldsProps> = (props) => {
  const { langs, options, cost, profit, price, isReset, setPrice, setCost, setProfit } =
    props;

  React.useEffect(() => {
    getPrice();
  }, [cost, profit]);

  const getPrice = () => {
    if (cost) {
      const newPrice = cost + (cost * profit) / 100;
      setPrice(newPrice);
    }
  };

  return (
    <Card.Wrapper className="item__inner item__price">
      <h3 className="inner__title">
        {langs?.admin.product.addProduct.subTitle_4}
      </h3>
      <FormControl.InputCustom
        label={langs?.form.cost}
        value={cost}
        type="number"
        placeholder=" "
        groupClassName="inner__control"
        onChange={(e) => {
          const value = parseInt(e.target.value);
          setCost(value);
        }}
        onKeyPress={(e) =>
          utils.checkKeyNumberType(e, langs?.toastMessages.error.onlyNumber)
        }
      />
      <Field
        name="profit"
        label={langs?.form.profit}
        component={FormControl.Select}
        groupClassName="inner__control"
        option={options?.profit}
        isReset={isReset}
        onChange={(value: any) => {
          setProfit(value);
        }}
      />

      <div className="price__detail">
        <p className="detail__content">
          {langs?.form.price} : {price.toLocaleString()} VND
        </p>
      </div>
    </Card.Wrapper>
  );
};

export default PriceFields;
