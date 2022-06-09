import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../../interfaces/route";
import {
  getMovieDetail,
  updateMovie,
} from "../../../../redux/actionCreators/MovieCreators";
import { IQueryList } from "../../../../interfaces/query";
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

const EditMovie: React.FunctionComponent<RouteComponentProps<IRouteParams>> = (
  props
) => {
  const movieId = props.match.params.id;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { movieDetail } = useSelector(
    (state: ReducerState) => state.MovieReducer
  );

  const [imgUpload, setImgUpload] = React.useState<any>(null);
  const [defaultImg, setDefaultImg] = React.useState<string>("");

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  React.useEffect(() => {
    const query: IQueryList = {
      movieId: movieId,
    };
    dispatch(getMovieDetail(query));
  }, []);

  React.useEffect(() => {
    if (movieDetail) {
      setDefaultImg(movieDetail?.image || "");
    }
  }, [movieDetail]);

  const handleSelectedImg = (file: any) => {
    setImgUpload(file);
  };

  const initialValues = {
    nameVN: movieDetail.nameVN || "",
    nameENG: movieDetail.nameENG || "",
    nameCH: movieDetail.nameCH || "",
    descVN: movieDetail.descVN || "",
    descENG: movieDetail.descENG || "",
    descCH: movieDetail.descCH || "",
    duration: movieDetail.duration || "",
    trailer: movieDetail.trailer || "",
    releaseDay: movieDetail.releaseDay || "",
    actors: movieDetail.actors || "",
    director: movieDetail.director || "",
    status: movieDetail.status || "",
    type: movieDetail.type || "",
    country: movieDetail.country || "",
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

  const handleSubmit = (values: any) => {
    const query: IQueryList = {
      movieId: movieId,
    };
    const data = new FormData();
    for (let key in values) {
      data.append(key, values[key]);
    }
    if (imgUpload) {
      data.append("image", imgUpload);
    }
    data.append("defaultImg", defaultImg);

    dispatch(
      updateMovie(
        query,
        data,
        langs?.toastMessages.success.update,
        langs?.toastMessages.error.update
      )
    );
  };

  return (
    <div className="edit-movie">
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
                name={langs?.admin.pageTitle.editMovie || ""}
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
              <div className="edit-movie__wrapper">
                <div className="wrapper__item">
                  <InfoFields
                    langs={langs}
                    movie={movieDetail}
                    onSelectImg={handleSelectedImg}
                  />
                  <DescFields langs={langs} />
                  <TrailerFields langs={langs} />
                </div>
                <div className="wrapper__item">
                  <StatusFields
                    langs={langs}
                    options={options}
                    movie={movieDetail}
                  />
                  <CountryFields
                    langs={langs}
                    options={options}
                    movie={movieDetail}
                  />
                  <DetailFields
                    langs={langs}
                    options={options}
                    movie={movieDetail}
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

export default EditMovie;
