import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { Field } from "formik";
import { ILangs } from "../../../../interfaces/lang";
import { IOptionsLang } from "../../../../configs/options";
import { EProductType } from "../../../../models/Product";

interface SourceFieldsProps {
  langs: ILangs;
  isReset: boolean;
  options: IOptionsLang;
}

const SourceFields: React.FunctionComponent<SourceFieldsProps> = (props) => {
  const { langs, options, isReset } = props;

  const [category, setCategory] = React.useState<string>("");

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
        isReset={isReset}
        label={langs?.form.category}
        component={FormControl.Select}
        option={options?.productCategory}
        groupClassName="inner__control"
        onChange={(value: any) => {
          setCategory(value);
        }}
      />
      <Field
        name="producerId"
        placeholder=" "
        isReset={isReset}
        label={langs?.form.producer}
        option={getProducerByCategory()}
        component={FormControl.Select}
        groupClassName="inner__control"
      />
    </Card.Wrapper>
  );
};

export default SourceFields;
