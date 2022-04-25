import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import * as yup from "yup";
import { ILangs } from "../../../../interfaces/lang";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { ICourse } from "../../../../models/Course";
import { phoneRegex } from "../../../../configs/regex";
import { createCourseOrder } from "../../../../redux/actionCreators/CourseOrderCreators";
import Button from "../../../../components/Button";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";

interface RegisterFormProps {
  langs: ILangs;
  course: ICourse;
}

const RegisterForm: React.FunctionComponent<RegisterFormProps> = (props) => {
  const { langs, course } = props;

  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { user } = useSelector((state: ReducerState) => state.UserReducer);

  const dispatch = useDispatch();

  const initialValues = {
    name: `${user?.firstName} ${user?.lastName}`,
    email: user?.email,
    phone: user?.phone,
    note: "",
    dateType: "",
    branch: "",
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(langs?.validateMessages.required),
    email: yup
      .string()
      .email(langs?.validateMessages.email)
      .required(langs?.validateMessages.required),
    phone: yup
      .string()
      .matches(phoneRegex, langs?.validateMessages.phone)
      .required(langs?.validateMessages.required),
    dateType: yup.string().required(langs?.validateMessages.choose),
    branch: yup.string().required(langs?.validateMessages.choose),
  });

  const handleSubmit = (value: any, action: any) => {
    const formData = {
      courseId: course?.id,
      userId: user?.id,
      register: {
        name: value.name,
        email: value.email,
        phone: value.phone,
        note: value.note,
        dateType: value.dateType,
        branch: value.branch,
      },
      course: {
        nameENG: course.nameENG,
        nameVN: course.nameVN,
        nameCH: course.nameCH,
        trainingTime: course.trainingTime,
        price: course.price
      }
    };
    dispatch(createCourseOrder(formData));
    setTimeout(() => {
      action.resetForm({
        value: {
          ...initialValues,
        },
      });
    }, 1000);
  };

  return (
    <div className="content__form">
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { isValid, isSubmitting } = formikProps;
          return (
            <Card.Wrapper className="form__wrapper">
              <h3 className="wrapper__title">
                {langs?.course.detail.register.form.title}
              </h3>

              <hr />

              <Form>
                <Field
                  name="name"
                  placeholder=" "
                  label={langs?.form.name}
                  icon={<i className="fas fa-user"></i>}
                  component={FormControl.Input}
                />
                <Field
                  name="email"
                  placeholder=" "
                  label={langs?.form.email}
                  icon={<i className="fas fa-envelope"></i>}
                  component={FormControl.Input}
                />
                <Field
                  name="phone"
                  placeholder=" "
                  label={langs?.form.phone}
                  icon={<i className="fas fa-phone"></i>}
                  component={FormControl.Input}
                />
                <Field
                  name="note"
                  placeholder=" "
                  label={langs?.form.note}
                  component={FormControl.TextArea}
                />

                <h3 className="wrapper__subtitle">
                  {langs?.course.detail.register.form.subTitle_1}
                </h3>

                <Field
                  name="branch"
                  value={1}
                  label={langs?.course.detail.register.form.address_1}
                  component={FormControl.Radio}
                />
                <Field
                  name="branch"
                  value={2}
                  label={langs?.course.detail.register.form.address_2}
                  component={FormControl.Radio}
                />

                <h3 className="wrapper__subtitle">
                  {langs?.course.detail.register.form.subTitle_2}
                </h3>

                <Field
                  name="dateType"
                  value={1}
                  label={`
                    ${langs?.course.detail.register.schedule.mon} +
                    ${langs?.course.detail.register.schedule.wed} +
                    ${langs?.course.detail.register.schedule.fri}
                    `}
                  component={FormControl.Radio}
                />
                <Field
                  name="dateType"
                  value={2}
                  label={`
                  ${langs?.course.detail.register.schedule.tue} +
                  ${langs?.course.detail.register.schedule.thur} +
                  ${langs?.course.detail.register.schedule.sat}
                  `}
                  component={FormControl.Radio}
                />
                <Field
                  name="dateType"
                  value={3}
                  label={`
                  ${langs?.course.detail.register.schedule.sat} +
                  ${langs?.course.detail.register.schedule.sun}
                  `}
                  component={FormControl.Radio}
                />

                <hr />

                <div className="wrapper__button">
                  {!isValid ? (
                    <Button type="button" className="button--disabled">
                      {langs?.button.register}
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className={
                        buttonLoading
                          ? "button--round button--loading"
                          : "button--round"
                      }
                      isDisabled={!isValid || isSubmitting}
                    >
                      <ButtonLoading />
                      <span>{langs?.button.register}</span>
                    </Button>
                  )}
                </div>
              </Form>
            </Card.Wrapper>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
