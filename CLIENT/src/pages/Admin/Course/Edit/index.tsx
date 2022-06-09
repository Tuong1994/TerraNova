import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { toast } from "react-toastify";
import {
  getCourseDetail,
  updateCourse,
} from "../../../../redux/actionCreators/CourseCreators";
import { IQueryList } from "../../../../interfaces/query";
import { IRouteParams } from "../../../../interfaces/route";
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

const EditCourse: React.FunctionComponent<RouteComponentProps<IRouteParams>> = (
  props
) => {
  const courseId = props.match.params.id;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { courseDetail } = useSelector(
    (state: ReducerState) => state.CourseReducer
  );

  const [cost, setCost] = React.useState<string>("");
  const [profit, setProfit] = React.useState<number>(0);
  const [price, setPrice] = React.useState<number>(0);
  const [scheduleArr, setScheduleArr] = React.useState<any>([]);
  const [lessonArr, setLessonArr] = React.useState<any>([]);
  const [imgUpload, setImgUpload] = React.useState<any>(null);
  const [defaultImg, setDefaultImg] = React.useState<string>("");

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  React.useEffect(() => {
    const query: IQueryList = {
      courseId: courseId,
    };
    dispatch(getCourseDetail(query));
  }, []);

  React.useEffect(() => {
    if (courseDetail) {
      setLessonArr(courseDetail?.lessons);
      setScheduleArr(courseDetail?.schedules);
      setCost(courseDetail?.cost?.toString() || "");       
      setProfit(courseDetail?.profit || 0);      
      setPrice(courseDetail?.price || 0);
      setDefaultImg(courseDetail?.image || "")
    }
  }, [courseDetail, courseDetail?.price, courseDetail?.image]);

  const handleSelectedImg = (file: any) => {
    setImgUpload(file);
  };

  const initialValues = {
    nameENG: courseDetail.nameENG || "",
    nameVN: courseDetail.nameVN || "",
    nameCH: courseDetail.nameCH || "",
    descENG: courseDetail.descENG || "",
    descVN: courseDetail.descVN || "",
    descCH: courseDetail.descCH || "",
    profit: courseDetail.profit || "",
    trainingTime: courseDetail.trainingTime || "",
    categoryId: courseDetail.categoryId || "",
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
      const query: IQueryList = {
        courseId: courseId,
      };

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
      data.append("defaultImg", defaultImg);
      data.append("cost", cost);
      data.append("price", price.toString());

      dispatch(
        updateCourse(
          query,
          data,
          langs?.toastMessages.success.update,
          langs?.toastMessages.error.update
        )
      );
    }
  };

  return (
    <div className="edit-course">
      <Formik
        enableReinitialize={true}
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
                    courseDetail={courseDetail}
                    onSelectImg={handleSelectedImg}
                  />
                  <DescFields langs={langs} />
                  <PriceFields
                    langs={langs}
                    options={options}
                    cost={cost}
                    profit={profit}
                    price={price}
                    setCost={setCost}
                    setProfit={setProfit}
                    setPrice={setPrice}
                  />
                  <LessonFields
                    langs={langs}
                    courseDetail={courseDetail}
                    lessonArr={lessonArr}
                  />
                </div>
                <div className="wrapper__item">
                  <TrainTimeFields langs={langs} />
                  <CategoryFields
                    langs={langs}
                    values={initialValues}
                    options={options}
                  />
                  <ScheduleFields
                    langs={langs}
                    courseDetail={courseDetail}
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
