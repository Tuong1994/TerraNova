import React from "react";
import * as FormControl from "../../../../components/Fields";
import * as Card from "../../../../components/Card";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";
import { EInventoryStatus } from "../../../../models/Product";

interface StatusFieldsProps {
  langs: ILangs;
  options: IOptionsLang;
  isReset: boolean;
}

const StatusFields: React.FunctionComponent<StatusFieldsProps> = (props) => {
  const { langs, isReset, options } = props;

  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  return (
    <Card.Wrapper className="item__inner item__status">
      <h3 className="inner__title">
        {langs?.admin.product.subTitle_1}
      </h3>
      <Field
        name="status"
        placeholder=" "
        isReset={isReset}
        label={langs?.form.status}
        component={FormControl.Select}
        option={options?.productStatus}
        groupClassName="inner__control"
      />
      <Field
        name="inventoryStatus"
        placeholder=" "
        isReset={isReset}
        label={langs?.form.inventoryStatus}
        component={FormControl.Select}
        option={options?.inventoryStatus}
        groupClassName="inner__control"
        onChange={(value: any) => {
          if(value === EInventoryStatus.inStock) {
            setIsDisabled(false);
          } else if (value === EInventoryStatus.outOfStock) {
            setIsDisabled(true);
          }
        }}
      />
      <Field
        name="stockAmount"
        placeholder=" "
        label={langs?.form.stockAmount}
        component={FormControl.Input}
        groupClassName="inner__control"
        isDisabled={isDisabled}
      />
    </Card.Wrapper>
  );
};

export default StatusFields;
