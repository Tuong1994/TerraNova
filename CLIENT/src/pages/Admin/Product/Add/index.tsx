import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { Formik, Form } from "formik";
import { IDescription, IProduct } from "../../../../models/Product";
import ContentHeader from "../../../../components/ContentHeader";
import Upload from "../../../../components/Upload";
import StatusFields from "./Status";
import InfoFields from "./Info";
import utils from "../../../../utils";
import PriceFields from "./Price";
import SourceFields from "./Source";
import DescriptionFields from "./Description";

const AddProduct: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [price, setPrice] = React.useState<number>(0);
  const [descArr, setDescArr] = React.useState<IDescription[]>([]);

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  const initialValues = {
    name: "",
    productType: "",
    categoryId: "",
    producerId: "",
    price: price,
    status: 0,
    inventoryStatus: 0,
    stockAmount: 0,
  };

  const handleSubmit = (values: IProduct) => {};

  return (
    <div className="add-product">
      <ContentHeader name={langs?.admin.pageTitle.addProduct || ""} />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          return (
            <Form autoComplete="off">
              <div className="add-product__wrapper">
                <div className="wrapper__item">
                  <Upload multiple={true} />
                  <InfoFields langs={langs} options={options} />
                  <PriceFields
                    options={options}
                    langs={langs}
                    price={price}
                    setPrice={setPrice}
                  />
                  <DescriptionFields
                    langs={langs}
                    descArr={descArr}
                    setDescArr={setDescArr}
                  />
                </div>
                <div className="wrapper__item">
                  <StatusFields langs={langs} options={options} />
                  <SourceFields langs={langs} options={options} />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddProduct;
