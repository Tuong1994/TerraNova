import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { ILangs } from "../../../../interfaces/lang";
import { Formik, Form, Field } from "formik";

interface RegisterFormProps {
  langs: ILangs;
}

const RegisterForm: React.FunctionComponent<RegisterFormProps> = (props) => {
  const { langs } = props;

  const initialValues = {
    courseId: "",
    userId: "",
    name: "",
    email: "",
    phone: "",
    note: "",
    branch: 0,
  };

  const handleSubmit = () => {};

  return (
    <div className="content__form">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formikProps) => {
          return (
            <Card.Wrapper className="form__wrapper">
              <h3 className="wrapper__title">
                {langs?.course.detail.register.form.title}
              </h3>
              <Form>
                <Field
                  name="name"
                  placeholder=" "
                  label={langs?.form.name}
                  component={FormControl.Input}
                />
              </Form>
            </Card.Wrapper>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
