import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";
import utils from "../../../../utils";

interface PriceFieldsProps {
  langs: ILangs;
  values: any;
  cost: string;
  profit: number;
  price: number;
  options: IOptionsLang;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
  setCost: React.Dispatch<React.SetStateAction<string>>;
  setProfit: React.Dispatch<React.SetStateAction<number>>;
}

const PriceFields: React.FunctionComponent<PriceFieldsProps> = (props) => {
  const {
    langs,
    options,
    values,
    cost,
    profit,
    price,
    setPrice,
    setCost,
    setProfit,
  } = props;

  React.useEffect(() => {
    getPrice();
  }, [cost, profit]);

  const getPrice = () => {
    if (cost) {
      const costConvert = parseInt(cost);
      const newPrice = costConvert + (costConvert * profit) / 100;
      setPrice(newPrice);
    }
  };

  return (
    <Card.Wrapper className="item__inner item__price">
      <h3 className="inner__title">
        {langs?.admin.product.editProduct.subTitle_4}
      </h3>
      <FormControl.InputCustom
        type="number"
        placeholder=" "
        groupClassName="inner__control"
        value={cost}
        label={langs?.form.cost}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setCost(e.target.value)
        }}
        onKeyPress={(e: React.ChangeEvent<HTMLInputElement>) => {
          utils.checkKeyNumberType(e, langs?.toastMessages.error.onlyNumber);
        }}
      />
      <Field
        name="profit"
        label={langs?.form.profit}
        component={FormControl.Select}
        groupClassName="inner__control"
        defaultValue={options?.profit.find((i) => i.value === values.profit)}
        option={options?.profit}
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
