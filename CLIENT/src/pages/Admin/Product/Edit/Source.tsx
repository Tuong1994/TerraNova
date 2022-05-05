import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";
import { EProductType } from "../../../../models/Product";

interface SourceFieldsProps {
  langs: ILangs;
  values: any;
  options: IOptionsLang;
}

const SourceFields: React.FunctionComponent<SourceFieldsProps> = (props) => {
  const { langs, values, options } = props;

  const [category, setCategory] = React.useState<string>("");

  React.useEffect(() => {
    if(values) {
      setCategory(values.categoryId)
    }
  }, [values])

  const getProducerByCategory = () => {
    switch (category) {
      case EProductType.cpu: {
        return options?.cpuProducer;
      }
      case EProductType.mainboard: {
        return options?.mainboardProducer;
      }
      case EProductType.ram: {
        return options?.ramProducer;
      }
      case EProductType.hdd: {
        return options?.hddProducer;
      }
      case EProductType.ssd: {
        return options?.ssdProducer;
      }
      case EProductType.vga: {
        return options?.vgaProducer;
      }
      case EProductType.psu: {
        return options?.psuProducer;
      }
      case EProductType.monitor: {
        return options?.monitorProducer;
      }
      case EProductType.printer: {
        return options?.printerProducer;
      }
      case EProductType.fax: {
        return options?.faxProducer;
      }
      case EProductType.laptop: {
        return options?.laptopProducer;
      }
    }
  };

  return (
    <Card.Wrapper className="item__inner item__source">
      <h3 className="inner__title">
        {langs?.admin.product.subTitle_5}
      </h3>
      <Field
        name="categoryId"
        placeholder=" "
        label={langs?.form.category}
        component={FormControl.Select}
        defaultValue={options?.productCategory.find(
          (i) => i.value === values.categoryId
        )}
        option={options?.productCategory}
        groupClassName="inner__control"
        onChange={(value: any) => {
          setCategory(value);
        }}
      />
      <Field
        name="producerId"
        placeholder=" "
        label={langs?.form.producer}
        component={FormControl.Select}
        defaultValue={getProducerByCategory()?.find(
          (i) => i.value === values.producerId
        )}
        option={getProducerByCategory()}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default SourceFields;
