import React from "react";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { ReducerState } from "../../../../redux/store";
import { IQueryList } from "../../../../interfaces/query";
import {
  getCineplexDetail,
  getCineplexList,
} from "../../../../redux/actionCreators/CineplexCreators";
import { getTheaterList } from "../../../../redux/actionCreators/TheaterCreators";
import { getMovieList } from "../../../../redux/actionCreators/MovieCreators";
import { createMovieSchedule } from "../../../../redux/actionCreators/MovieScheduleCreators";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../../interfaces/route";
import ContentHeader from "../../../../components/ContentHeader";
import ButtonLoading from "../../../../components/Loading/ButtonLoading";
import Button from "../../../../components/Button";
import CineplexFields from "./Cineplex";
import ShowTimeFields from "./ShowTime";
import MovieFields from "./Movie";
import utils from "../../../../utils";

const EditShowTime: React.FunctionComponent<RouteComponentProps<IRouteParams>> = (props) => {
  const scheduleId = props.match.params.id;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );
  const { cineplexList, cineplexDetail } = useSelector(
    (state: ReducerState) => state.CineplexReducer
  );
  const { theaterList } = useSelector(
    (state: ReducerState) => state.TheaterReducer
  );
  const { movieList } = useSelector(
    (state: ReducerState) => state.MovieReducer
  );
  const { movieScheduleDetail } = useSelector(
    (state: ReducerState) => state.MovieScheduleReducer
  );

  const [cineplexId, setCineplexId] = React.useState<string>("");
  const [isReset, setIsReset] = React.useState<boolean>(false);

  const dispatch = useDispatch();

  const { cineplexes } = cineplexList;
  const { movies } = movieList;

  const langs = utils.changeLang(lang);

  React.useEffect(() => {
    const query: IQueryList = {
      page: page,
      limits: 10,
    };
    dispatch(getCineplexList(query));
    dispatch(getTheaterList());
    dispatch(getMovieList(query));
  }, []);

  React.useEffect(() => {
    const query: IQueryList = {
      cineplexId: cineplexId,
    };
    dispatch(getCineplexDetail(query));
  }, [cineplexId]);

  const initialValues = {
    showTime: "",
    movieId: "",
    cineplexId: "",
    cinemaId: "",
    theaterId: "",
  };

  const validationSchema = yup.object().shape({
    showTime: yup.string().required(langs?.validateMessages.date),
    movieId: yup.string().required(langs?.validateMessages.required),
    cineplexId: yup.string().required(langs?.validateMessages.required),
    cinemaId: yup.string().required(langs?.validateMessages.required),
    theaterId: yup.string().required(langs?.validateMessages.required),
  });

  const handleSubmit = (values: any, action: any) => {
    dispatch(
      createMovieSchedule(
        values,
        langs?.toastMessages.success.create,
        langs?.toastMessages.error.create
      )
    );
    if (isReset) {
      setIsReset(false);
    }
    setTimeout(() => {
      setIsReset(true);
      action.resetForm({
        values: {
          ...initialValues,
        },
      });
    }, 500);
  };

  return (
    <div className="add-showtime">
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
                name={langs?.admin.pageTitle.editShowTime || ""}
                right={() => {
                  return !isValid ? (
                    <Button
                      type="button"
                      className="button--disabled"
                      style={{ fontSize: "16px" }}
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
              <div className="add-showtime__wrapper">
                <div className="wrapper__item">
                  <CineplexFields
                    langs={langs}
                    cineplexes={cineplexes}
                    cinemas={cineplexDetail?.cinemas || []}
                    theaters={theaterList}
                    isReset={isReset}
                    setCinexplexId={setCineplexId}
                  />
                  <MovieFields
                    lang={lang}
                    langs={langs}
                    isReset={isReset}
                    movies={movies}
                  />
                </div>
                <div className="wrapper__item">
                  <ShowTimeFields langs={langs} />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EditShowTime;
