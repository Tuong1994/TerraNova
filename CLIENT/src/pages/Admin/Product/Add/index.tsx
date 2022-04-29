import React from "react";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { Formik, Form, Field } from "formik";
import ContentHeader from "../../../../components/ContentHeader";
import Upload from "../../../../components/Upload";
import ProductStatus from "./Status";
import utils from "../../../../utils";
import { IProduct } from "../../../../models/Product";

const AddProduct: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  const initialValues = {

  }

  const handleSubmit = (values: IProduct) => {

  }

  return (
    <div className="add-product">
      <ContentHeader name={langs?.admin.pageTitle.addProduct || ""} />
      <div className="add-product__wrapper">
        <div className="wrapper__item">
          <Upload multiple={true} />
        </div>
        <div className="wrapper__item">
          <ProductStatus />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
