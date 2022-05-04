import React from "react";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { Formik, Form } from "formik";
import { IDescription } from "../../../../models/Product";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../../interfaces/route";
import { IQueryList } from "../../../../interfaces/query";
import {
  getProductDetail,
  updateProduct,
} from "../../../../redux/actionCreators/ProductCreators";
import { toast } from "react-toastify";
import ContentHeader from "../../../../components/ContentHeader";
import Upload from "../../../../components/Upload";
import StatusFields from "./Status";
import InfoFields from "./Info";
import PriceFields from "./Price";
import SourceFields from "./Source";
import DescriptionFields from "./Description";
import Button from "../../../../components/Button";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import utils from "../../../../utils";

const EditProduct: React.FunctionComponent<
  RouteComponentProps<IRouteParams>
> = (props) => {
  const productId = props.match.params.id;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { productDetail } = useSelector(
    (state: ReducerState) => state.ProductReducer
  );
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const dispatch = useDispatch();

  const [cost, setCost] = React.useState<string>("");
  const [profit, setProfit] = React.useState<number>(0);
  const [price, setPrice] = React.useState<number>(0);
  const [descArr, setDescArr] = React.useState<IDescription[]>([]);
  const [defaultImgArr, setDefaultImgArr] = React.useState<any>([]);
  const [imgArr, setImgArr] = React.useState<any>();

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  React.useEffect(() => {
    const query: IQueryList = {
      productId: productId,
    };
    dispatch(getProductDetail(query));
  }, []);

  React.useEffect(() => {
    if (productDetail) {
      setDescArr(productDetail?.description || []);
      setCost(productDetail?.cost?.toString() || "");
      setProfit(productDetail?.profit || 0);
      setPrice(productDetail?.price || 0);
      setDefaultImgArr(productDetail?.image);
    }
  }, [productDetail, productDetail?.price, productDetail?.image]);

  const handleSelectedImg = (files: any) => {
    setImgArr(files);
  };

  const handleRemoveImg = (files: any) => {
    setDefaultImgArr(files);
  };

  const initialValues = {
    name: productDetail?.name,
    categoryId: productDetail?.categoryId,
    producerId: productDetail?.producerId,
    profit: productDetail?.profit,
    status: productDetail?.status,
    inventoryStatus: productDetail?.inventoryStatus,
    stockAmount: productDetail?.stockAmount,
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(langs?.validateMessages.required),
    categoryId: yup.string().required(langs?.validateMessages.choose),
    producerId: yup.string().required(langs?.validateMessages.choose),
    profit: yup.number().min(1, langs?.validateMessages.choose),
    status: yup.number().min(1, langs?.validateMessages.choose),
    inventoryStatus: yup.number().min(1, langs?.validateMessages.choose),
  });

  const handleSubmit = (values: any) => {
    let isValid = false;

    if (cost === "" || cost === "0") {
      toast.error(langs?.toastMessages.error.cost);
      isValid = true;
    } else if (descArr.length === 0) {
      toast.error(langs?.toastMessages.error.descs);
      isValid = true;
    } else {
      isValid = false;
    }

    if (!isValid) {
      const query: IQueryList = {
        productId: productId,
      };

      const data = new FormData();
      for (let key in values) {
        data.append(key, values[key]);
      }
      for (const key of Object.keys(imgArr)) {
        data.append("image", imgArr[key]);
      }
      if (defaultImgArr !== null && defaultImgArr.length > 0) {
        data.append("defaultImgs", JSON.stringify(defaultImgArr));
      }
      data.append("cost", cost);
      data.append("price", price.toString());
      data.append("description", JSON.stringify(descArr));

      dispatch(
        updateProduct(
          query,
          data,
          langs?.toastMessages.success.update,
          langs?.toastMessages.error.update
        )
      );
    }
  };

  return (
    <div className="edit-product">
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
                name={langs?.admin.pageTitle.editProduct || ""}
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

              <div className="edit-product__wrapper">
                <div className="wrapper__item">
                  <Upload
                    multiple={true}
                    defaultImg={productDetail?.image}
                    onChange={handleSelectedImg}
                    onRemove={handleRemoveImg}
                  />
                  <InfoFields langs={langs} />
                  <PriceFields
                    options={options}
                    langs={langs}
                    values={initialValues}
                    cost={cost}
                    profit={profit}
                    price={price}
                    setPrice={setPrice}
                    setCost={setCost}
                    setProfit={setProfit}
                  />
                  <DescriptionFields
                    langs={langs}
                    productId={productId}
                    descArr={descArr}
                    setDescArr={setDescArr}
                  />
                </div>
                <div className="wrapper__item">
                  <StatusFields
                    langs={langs}
                    options={options}
                    values={initialValues}
                  />
                  <SourceFields
                    langs={langs}
                    options={options}
                    values={initialValues}
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

export default EditProduct;
