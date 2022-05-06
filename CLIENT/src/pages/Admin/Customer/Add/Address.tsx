import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";
import { EProvince } from "../../../../models/Shipment";

interface AddressFieldsProps {
  langs: ILangs;
  isReset: boolean;
  options: IOptionsLang;
}

const AddressFields: React.FunctionComponent<AddressFieldsProps> = (props) => {
  const { langs, isReset, options } = props;

  const [province, setProvince] = React.useState<number>(0);

  const getOptionsByProvince = () => {
    if (province === EProvince.HCM) {
      return options?.HCM;
    } else if (province === EProvince.HN) {
      return options?.HN;
    }
  };

  return (
    <Card.Wrapper className="item__inner item__address">
      <h3 className="inner__title">{langs?.admin.customer.subTitle_3}</h3>
      <Field
        name="province"
        placeholder=" "
        isReset={isReset}
        label={langs?.form.province}
        option={options?.province}
        component={FormControl.Select}
        groupClassName="inner__control"
        onChange={(value: any) => {
          setProvince(value);
        }}
      />
      <Field
        name="district"
        placeholder=" "
        isReset={isReset}
        label={langs?.form.district}
        option={getOptionsByProvince()?.district}
        component={FormControl.Select}
        groupClassName="inner__control"
      />
      <Field
        name="ward"
        placeholder=" "
        isReset={isReset}
        label={langs?.form.ward}
        option={getOptionsByProvince()?.ward}
        component={FormControl.Select}
        groupClassName="inner__control"
      />
      <Field
        name="address"
        placeholder=" "
        label={langs?.form.address}
        component={FormControl.Input}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default AddressFields;
