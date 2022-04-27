import React from "react";
import * as FormControl from "../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../interfaces/lang";

interface AdressProps {
  langs: ILangs;
  options: any;
  setProvinceType: React.Dispatch<React.SetStateAction<number>>;
  getOptionsByProvince(): any;
}

const Adress: React.FunctionComponent<AdressProps> = (props) => {
  const { langs, options, setProvinceType, getOptionsByProvince } = props;

  return (
    <div className="wrapper__group">
      <h3 className="group__title">{langs?.form.addressInfo}</h3>

      <Field
        name="province"
        component={FormControl.Select}
        label={langs?.form.province}
        placeholder=" "
        groupClassName="group__control"
        option={options?.province}
        onChange={(value: any) => {
          setProvinceType(value);
        }}
      />
      <Field
        name="district"
        component={FormControl.Select}
        label={langs?.form.district}
        placeholder=" "
        groupClassName="group__control"
        option={getOptionsByProvince()?.district}
      />

      <Field
        name="ward"
        component={FormControl.Select}
        label={langs?.form.ward}
        placeholder=" "
        groupClassName="group__control"
        option={getOptionsByProvince()?.ward}
      />
      <Field
        name="address"
        component={FormControl.Input}
        label={langs?.form.address}
        placeholder=" "
        type="text"
        groupClassName="group__control"
      />
    </div>
  );
};

export default Adress;
