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
import Button from "../../../../components/Button";

const AddProduct: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const [cost, setCost] = React.useState<number>(0);
  const [profit, setProfit] = React.useState<number>(0);
  const [price, setPrice] = React.useState<number>(0);
  const [descArr, setDescArr] = React.useState<IDescription[]>([]);
  const [isReset, setIsReset] = React.useState<boolean>(false);

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

  const handleSubmit = (values: IProduct, action: any) => {
    const data = {
      ...values,
      description: descArr,
    };

    if(isReset) {
      setIsReset(false);
    }

    setTimeout(() => {
      setCost(0);
      setProfit(0);
      setPrice(0);
      setDescArr([]);
      setIsReset(true);
      action.resetForm({
        values: {
          ...initialValues,
        }
      })
    }, 500)
  };

  return (
    <div className="add-product">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          return (
            <Form autoComplete="off">
              <ContentHeader
                name={langs?.admin.pageTitle.addProduct || ""}
                right={() => {
                  return (
                    <Button type="submit" className="button--submit">
                      {langs?.button.save}
                    </Button>
                  );
                }}
              />
              <div className="add-product__wrapper">
                <div className="wrapper__item">
                  <Upload multiple={true} />
                  <InfoFields langs={langs} options={options} isReset={isReset} />
                  <PriceFields
                    options={options}
                    langs={langs}
                    cost={cost}
                    profit={profit}
                    price={price}
                    isReset={isReset}
                    setPrice={setPrice}
                    setCost={setCost}
                    setProfit={setProfit}
                  />
                  <DescriptionFields
                    langs={langs}
                    descArr={descArr}
                    setDescArr={setDescArr}
                  />
                </div>
                <div className="wrapper__item">
                  <StatusFields langs={langs} options={options} isReset={isReset} />
                  <SourceFields langs={langs} options={options} isReset={isReset} />
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
