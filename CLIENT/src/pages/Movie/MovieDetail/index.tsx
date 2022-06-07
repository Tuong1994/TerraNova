import React from "react";
import * as customHooks from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../interfaces/route";
import { ReducerState } from "../../../redux/store";
import { IQueryList } from "../../../interfaces/query";
import { getMovieDetail } from "../../../redux/actionCreators/MovieCreators";
import { EMovieActionTypes } from "../../../redux/actionTypes/MovieActionTypes";
import { EModalActionTypes } from "../../../redux/actionTypes/ModalActionTypes";
import { createRate } from "../../../redux/actionCreators/RateCreators";
import MovieInfo from "./Info";
import MovieTabs from "./Tabs";
import TrailerModal from "../../../components/Trailer";
import RateModal from "../../../components/RateModal";
import utils from "../../../utils";

const MovieDetail: React.FunctionComponent<
  RouteComponentProps<IRouteParams>
> = (props) => {
  const movieId = props.match.params.id;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { movieDetail } = useSelector(
    (state: ReducerState) => state.MovieReducer
  );
  const { user } = useSelector((state: ReducerState) => state.UserReducer);
  const [ratePoint, setRatePoint] = React.useState<number>(0);
  const [rateNote, setRateNote] = React.useState<string>("");

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  customHooks.useLoading(movieDetail);

  React.useEffect(() => {
    if (movieId) {
      dispatch({
        type: EMovieActionTypes.ADD_ID,
        payload: movieId,
      });
    }
  }, [movieId]);

  React.useEffect(() => {
    const query: IQueryList = {
      movieId: movieId,
    };
    dispatch(getMovieDetail(query));
  }, []);

  const handleShowRateModal = () => {
    dispatch({
      type: EModalActionTypes.OPEN_RATING_MODAL,
    });
  };

  const handleRate = () => {
    const query: IQueryList = {
      movieId: movieDetail?.id,
    };
    const newRate = {
      ratePoint: ratePoint,
      note: rateNote,
      movieId: movieDetail?.id,
      userId: user?.id,
    };

    dispatch(
      createRate(
        newRate,
        query,
        langs?.toastMessages.success.rate,
        langs?.toastMessages.error.rate
      )
    );
  };

  return (
    <div
      className="movie-detail"
      style={{
        backgroundImage: `url(${
          movieDetail.image || "/img/movie/doctor_strange_2.jpg"
        })`,
      }}
    >
      <MovieInfo
        lang={lang}
        langs={langs}
        movie={movieDetail}
        onShow={handleShowRateModal}
      />

      <MovieTabs lang={lang} langs={langs} movie={movieDetail} />

      <TrailerModal />

      <RateModal
        langs={langs}
        title={langs?.movie.detail.rateModal.title || ""}
        onSubmit={handleRate}
        setRateNote={setRateNote}
        setRatePoint={setRatePoint}
      />
    </div>
  );
};

export default MovieDetail;
