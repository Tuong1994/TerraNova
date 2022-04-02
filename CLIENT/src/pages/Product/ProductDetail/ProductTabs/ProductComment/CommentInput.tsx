import React from "react";
import * as FormControl from "../../../../../components/Fields";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../../../redux/store";
import utils from "../../../../../utils";

interface CommentInputProps {}

const CommentInput: React.FunctionComponent<CommentInputProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  const initialValues = {
    comment: "",
  };
  const validationSchema = yup.object().shape({});
  const handleSubmit = () => {};

  return (
    <div className="comment__input">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => {
          return (
            <Form>
              <Field
                name="comment"
                component={FormControl.Input}
                placeholder={langs?.form.comment}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default CommentInput;
