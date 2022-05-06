import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";
import { EProvince } from "../../../../models/Shipment";

interface AddressFieldsProps {
  langs: ILangs;
  values: any;
  options: IOptionsLang;
}

const AddressFields: React.FunctionComponent<AddressFieldsProps> = (props) => {
  const { langs, values, options } = props;

  const [province, setProvince] = React.useState<number>(0);
  const [optionsByProvince, setOptionsByProvince] = React.useState<any>([]);

  React.useEffect(() => {
    if (values) {
      setProvince(values.province);
    }
  }, [values]);

  React.useEffect(() => {
    getOptionsByProvince();
  }, [province]);

  const getOptionsByProvince = () => {
    if (province === EProvince.HCM) {
      return setOptionsByProvince(options?.HCM);
    } else if (province === EProvince.HN) {
      return setOptionsByProvince(options?.HN);
    }
  };

  return (
    <Card.Wrapper className="item__inner item__address">
      <h3 className="inner__title">{langs?.admin.customer.subTitle_3}</h3>
      <Field
        name="province"
        placeholder=" "
        label={langs?.form.province}
        defaultValue={options?.province.find((i) => i.value === province)}
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
        label={langs?.form.district}
        defaultValue={optionsByProvince?.district?.find(
          (i: any) => i.value === values.district
        )}
        option={optionsByProvince?.district}
        component={FormControl.Select}
        groupClassName="inner__control"
      />
      <Field
        name="ward"
        placeholder=" "
        label={langs?.form.ward}
        defaultValue={optionsByProvince?.ward?.find(
          (i: any) => i.value === values.ward
        )}
        option={optionsByProvince?.ward}
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
