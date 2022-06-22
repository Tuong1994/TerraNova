import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { ReducerState } from "../../../../redux/store";
import ContentHeader from "../../../../components/ContentHeader";
import Button from "../../../../components/Button";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import utils from "../../../../utils";

const AddShowTime: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  const initialValues = {};

  const handleSubmit = (values: any) => {};

  return (
    <div className="add-showtime">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => {
          return (
            <Form>
              <ContentHeader
                name={langs?.admin.pageTitle.addShowTime || ""}
                right={() => {
                  return (
                    <Button className="button--submit">
                      {langs?.button.save}
                    </Button>
                  );
                }}
              />
              <div className="add-showtime__wrapper">
                <div className="wrapper__item">
                    
                </div>
                <div className="wrapper__item"></div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddShowTime;
