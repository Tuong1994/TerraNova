import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { toast } from "react-toastify";
import { createCourse } from "../../../../redux/actionCreators/CourseCreators";
import ContentHeader from "../../../../components/ContentHeader";
import Button from "../../../../components/Button";
import InfoFields from "./Info";
import DescFields from "./Desc";
import TrainTimeFields from "./TrainTime";
import CategoryFields from "./Category";
import ScheduleFields from "./Schedule";
import PriceFields from "./Price";
import LessonFields from "./Lesson";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import utils from "../../../../utils";

interface EditCourseProps {}

const EditCourse: React.FunctionComponent<EditCourseProps> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [cost, setCost] = React.useState<string>("");
  const [profit, setProfit] = React.useState<number>(0);
  const [price, setPrice] = React.useState<number>(0);
  const [scheduleArr, setScheduleArr] = React.useState<any>([]);
  const [lessonArr, setLessonArr] = React.useState<any>([]);
  const [imgUpload, setImgUpload] = React.useState<any>({});
  const [isReset, setIsReset] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  const handleSelectedImg = (file: any) => {
    setImgUpload(file);
  };

  const initialValues = {
    nameENG: "",
    nameVN: "",
    nameCH: "",
    descENG: "",
    descVN: "",
    descCH: "",
    profit: 0,
    trainingTime: 0,
    categoryId: "",
  };

  const validationSchema = yup.object().shape({
    nameENG: yup.string().required(langs?.validateMessages.required),
    nameVN: yup.string().required(langs?.validateMessages.required),
    nameCH: yup.string().required(langs?.validateMessages.required),
    descENG: yup.string().required(langs?.validateMessages.required),
    descVN: yup.string().required(langs?.validateMessages.required),
    descCH: yup.string().required(langs?.validateMessages.required),
    trainingTime: yup.number().min(1, langs?.validateMessages.required),
    categoryId: yup.string().required(langs?.validateMessages.choose),
  });

  const handleSubmit = (values: any, action: any) => {
    let isValid = false;
    
    if (cost === "") {
      toast.error(langs?.toastMessages.error.cost);
      isValid = true;
    } else if (scheduleArr.length === 0) {
      toast.error(langs?.toastMessages.error.schedule);
      isValid = true;
    } else if (lessonArr.length === 0) {
      toast.error(langs?.toastMessages.error.lesson);
      isValid = true;
    } else {
      isValid = false;
    }

    if (!isValid) {
      const data = new FormData();
      for (let key in values) {
        data.append(key, values[key]);
      }
      if (scheduleArr.length > 0) {
        data.append("schedule", JSON.stringify(scheduleArr));
      }
      if (lessonArr.length > 0) {
        data.append("lesson", JSON.stringify(lessonArr));
      }
      if (imgUpload) {
        data.append("image", imgUpload);
      }
      data.append("price", price.toString());

      dispatch(
        createCourse(
          data,
          langs?.toastMessages.success.create,
          langs?.toastMessages.error.create
        )
      );

      if (isReset) {
        setIsReset(false);
      }

      setTimeout(() => {
        setIsReset(true);
        setLessonArr([]);
        setScheduleArr([]);
        setCost("");
        setProfit(0);
        setPrice(0);
        setImgUpload({});
        action.resetForm({
          values: {
            ...initialValues,
          },
        });
      }, 500);
    }
  };

  return (
    <div className="edit-course">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => {
          const { isValid } = formikProps;
          return (
            <Form>
              <ContentHeader
                name={langs?.admin.pageTitle.editCourse || ""}
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
                      className={`button--submit ${
                        buttonLoading ? "button--disabled" : ""
                      }`}
                      type="submit"
                    >
                      <ButtonLoading />
                      <span>{langs?.button.save}</span>
                    </Button>
                  );
                }}
              />
              <div className="edit-course__wrapper">
                <div className="wrapper__item">
                  <InfoFields
                    langs={langs}
                    isReset={isReset}
                    onSelectImg={handleSelectedImg}
                  />
                  <DescFields langs={langs} />
                  <PriceFields
                    langs={langs}
                    options={options}
                    isReset={isReset}
                    cost={cost}
                    profit={profit}
                    price={price}
                    setCost={setCost}
                    setProfit={setProfit}
                    setPrice={setPrice}
                  />
                  <LessonFields
                    langs={langs}
                    lessonArr={lessonArr}
                    setLessonArr={setLessonArr}
                  />
                </div>
                <div className="wrapper__item">
                  <TrainTimeFields langs={langs} />
                  <CategoryFields
                    langs={langs}
                    isReset={isReset}
                    options={options}
                  />
                  <ScheduleFields
                    langs={langs}
                    options={options}
                    scheduleArr={scheduleArr}
                    setScheduleArr={setScheduleArr}
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

export default EditCourse;
