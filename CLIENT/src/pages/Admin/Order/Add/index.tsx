import React from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import ContentHeader from "../../../../components/ContentHeader";
import Button from "../../../../components/Button";
import InfoFields from "./Info";
import utils from "../../../../utils";

interface AddOrderProps {}

const AddOrder: React.FunctionComponent<AddOrderProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  const dispatch = useDispatch();

  const initialValues = {};

  const handleSubmit = (values: any) => {};

  return (
    <div className="add-order">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => {
          return (
            <Form autoComplete="off">
              <ContentHeader
                name={langs?.admin.pageTitle.addOrder || ""}
                right={() => {
                  return (
                    <Button className="button--submit">
                      {langs?.button.save}
                    </Button>
                  );
                }}
              />
              <div className="add-order__wrapper">
                  <div className="wrapper__item">
                    <InfoFields langs={langs} />
                  </div>
                  <div className="wrapper__item">

                  </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddOrder;
