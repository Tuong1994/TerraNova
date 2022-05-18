import React from "react";
import * as customHooks from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../interfaces/route";
import { ReducerState } from "../../../redux/store";
import { IQueryList } from "../../../interfaces/query";
import { getMovieDetail } from "../../../redux/actionCreators/MovieCreators";
import MovieInfo from "./Info";
import TrailerModal from "../../../components/Trailer";
import utils from "../../../utils";

const MovieDetail: React.FunctionComponent<
  RouteComponentProps<IRouteParams>
> = (props) => {
  const movieId = props.match.params.id;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { movieDetail } = useSelector(
    (state: ReducerState) => state.MovieReducer
  );

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  customHooks.useLoading();

  React.useEffect(() => {
    const query: IQueryList = {
      movieId: movieId,
    };
    dispatch(getMovieDetail(query));
  }, []);

  return (
    <div
      className="movie-detail"
      style={{
        backgroundImage: `url(${
          movieDetail.image || "/img/movie/doctor_strange_2.jpg"
        })`,
      }}
    >
      <MovieInfo lang={lang} langs={langs} movie={movieDetail} />

      <TrailerModal />
    </div>
  );
};

export default MovieDetail;
