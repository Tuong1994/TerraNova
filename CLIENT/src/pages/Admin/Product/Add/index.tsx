import React from "react";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { Formik, Form } from "formik";
import { IDescription } from "../../../../models/Product";
import { createProduct } from "../../../../redux/actionCreators/ProductCreators";
import { toast } from "react-toastify";
import ContentHeader from "../../../../components/ContentHeader";
import Upload from "../../../../components/Upload";
import StatusFields from "./Status";
import InfoFields from "./Info";
import utils from "../../../../utils";
import PriceFields from "./Price";
import SourceFields from "./Source";
import DescriptionFields from "./Description";
import Button from "../../../../components/Button";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";

const AddProduct: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const dispatch = useDispatch();

  const [cost, setCost] = React.useState<string>("");
  const [profit, setProfit] = React.useState<number>(0);
  const [price, setPrice] = React.useState<number>(0);
  const [descArr, setDescArr] = React.useState<IDescription[]>([]);
  const [imgArr, setImgArr] = React.useState<any>();
  const [isReset, setIsReset] = React.useState<boolean>(false);

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  const handleSelectedImg = (files: any) => {
    setImgArr(files);
  };

  const initialValues = {
    name: "",
    categoryId: "",
    producerId: "",
    profit: 0,
    status: 0,
    inventoryStatus: 0,
    stockAmount: 0,
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(langs?.validateMessages.required),
    categoryId: yup.string().required(langs?.validateMessages.choose),
    producerId: yup.string().required(langs?.validateMessages.choose),
    profit: yup.number().min(1, langs?.validateMessages.choose),
    status: yup.number().min(1, langs?.validateMessages.choose),
    inventoryStatus: yup.number().min(1, langs?.validateMessages.choose),
  });

  const handleSubmit = (values: any, action: any) => {
    let isValid = false;

    if (cost === "") {
      toast.error(langs?.toastMessages.error.cost);
      isValid = true;
    } else if (descArr.length === 0) {
      toast.error(langs?.toastMessages.error.descs);
      isValid = true;
    } else {
      isValid = false;
    }

    if (!isValid) {
      const data = new FormData();
      for (let key in values) {
        data.append(key, values[key]);
      }
      for (const key of Object.keys(imgArr)) {
        data.append("image", imgArr[key]);
      }
      data.append("cost", cost);
      data.append("price", price.toString());
      data.append("description", JSON.stringify(descArr));

      dispatch(
        createProduct(
          data,
          langs?.toastMessages.success.create,
          langs?.toastMessages.error.create
        )
      );

      if (isReset) {
        setIsReset(false);
      }

      setTimeout(() => {
        setCost("");
        setProfit(0);
        setPrice(0);
        setDescArr([]);
        setIsReset(true);
        action.resetForm({
          values: {
            ...initialValues,
          },
        });
      }, 500);
    }
  };

  return (
    <div className="add-product">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { isValid } = formikProps;
          return (
            <Form autoComplete="off">
              <ContentHeader
                name={langs?.admin.pageTitle.addProduct || ""}
                right={() => {
                  return !isValid ? (
                    <Button
                      className="button--disabled"
                      style={{ fontSize: "16px" }}
                    >
                      {langs?.button.save}
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className={`button--submit ${
                        buttonLoading ? "button--disabled" : ""
                      }`}
                    >
                      <ButtonLoading />
                      <span>{langs?.button.save}</span>
                    </Button>
                  );
                }}
              />
              <div className="add-product__wrapper">
                <div className="wrapper__item">
                  <Upload
                    multiple={true}
                    isReset={isReset}
                    onChange={handleSelectedImg}
                  />
                  <InfoFields langs={langs} />
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
                  <StatusFields
                    langs={langs}
                    options={options}
                    isReset={isReset}
                  />
                  <SourceFields
                    langs={langs}
                    options={options}
                    isReset={isReset}
                  />
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
