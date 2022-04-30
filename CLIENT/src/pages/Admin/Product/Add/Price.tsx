import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";
import utils from "../../../../utils";

interface PriceFieldsProps {
  langs: ILangs;
  price: number;
  options: IOptionsLang;
  setPrice: React.Dispatch<React.SetStateAction<number>>;
}

const PriceFields: React.FunctionComponent<PriceFieldsProps> = (props) => {
  const { langs, options, price, setPrice } = props;

  const [cost, setCost] = React.useState<string>();
  const [profit, setProfit] = React.useState<number>(0);

  React.useEffect(() => {
    getPrice();
  }, [cost, profit]);

  const getPrice = () => {
    if (cost) {
      const newCost = parseInt(cost);
      const newPrice = newCost + (newCost * profit) / 100;
      console.log(newPrice)
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
          const value = e.target.value;
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
