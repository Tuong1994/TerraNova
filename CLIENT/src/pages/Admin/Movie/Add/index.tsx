import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { createMovie } from "../../../../redux/actionCreators/MovieCreators";
import ContentHeader from "../../../../components/ContentHeader";
import Button from "../../../../components/Button";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import InfoFields from "./Info";
import DescFields from "./Desc";
import StatusFields from "./Status";
import CountryFields from "./Country";
import TrailerFields from "./Trailer";
import DetailFields from "./Detail";
import utils from "../../../../utils";

const AddMovie: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [isReset, setIsReset] = React.useState<boolean>(false);
  const [imgUpload, setImgUpload] = React.useState<any>(null);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  const handleSelectedImg = (file: any) => {
    setImgUpload(file);
  };

  const initialValues = {
    nameVN: "",
    nameENG: "",
    nameCH: "",
    descVN: "",
    descENG: "",
    descCH: "",
    duration: "",
    trailer: "",
    releaseDay: "",
    actors: "",
    director: "",
    status: 0,
    type: 0,
    country: 0,
  };

  const validationSchema = yup.object().shape({
    nameVN: yup.string().required(langs?.validateMessages.required),
    nameENG: yup.string().required(langs?.validateMessages.required),
    nameCH: yup.string().required(langs?.validateMessages.required),
    descENG: yup.string().required(langs?.validateMessages.required),
    descVN: yup.string().required(langs?.validateMessages.required),
    descCH: yup.string().required(langs?.validateMessages.required),
    duration: yup.string().required(langs?.validateMessages.required),
    trailer: yup.string().required(langs?.validateMessages.required),
    releaseDay: yup.string().required(langs?.validateMessages.required),
    actors: yup.string().required(langs?.validateMessages.required),
    director: yup.string().required(langs?.validateMessages.required),
    status: yup.number().min(1, langs?.validateMessages.choose),
    type: yup.number().min(1, langs?.validateMessages.choose),
    country: yup.number().min(1, langs?.validateMessages.choose),
  });

  const handleSubmit = (values: any, action: any) => {
    const data = new FormData();
    for (let key in values) {
      data.append(key, values[key]);
    }
    if (imgUpload) {
      data.append("image", imgUpload);
    }

    dispatch(
      createMovie(
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
      setImgUpload({});
      action.resetForm({
        values: {
          ...initialValues,
        },
      });
    }, 500);
  };

  return (
    <div className="add-movie">
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
                name={langs?.admin.pageTitle.addMovie || ""}
                right={() => {
                  return !isValid ? (
                    <Button
                      style={{ fontSize: "16px" }}
                      className="button--disabled"
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
              <div className="add-movie__wrapper">
                <div className="wrapper__item">
                  <InfoFields
                    langs={langs}
                    isReset={isReset}
                    onSelectImg={handleSelectedImg}
                  />
                  <DescFields langs={langs} />
                  <TrailerFields langs={langs} />
                </div>
                <div className="wrapper__item">
                  <StatusFields
                    langs={langs}
                    isReset={isReset}
                    options={options}
                  />
                  <CountryFields
                    langs={langs}
                    isReset={isReset}
                    options={options}
                  />
                  <DetailFields
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

export default AddMovie;
