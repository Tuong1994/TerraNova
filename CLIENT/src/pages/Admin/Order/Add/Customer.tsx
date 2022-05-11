import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { ILangs } from "../../../../interfaces/lang";

interface CustomerFieldsProps {
  langs: ILangs;
}

const CustomerFields: React.FunctionComponent<CustomerFieldsProps> = (
  props
) => {
  const { langs } = props;

  return (
    <Card.Wrapper className="item__inner item__customer">
      <h3 className="inner__title">{langs?.admin.order.subTitle_5}</h3>
      <FormControl.SelectCustom
        placeholder=" "
        isPaging={true}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default CustomerFields;
