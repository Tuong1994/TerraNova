import React from "react";
import * as customHook from "../../../hooks/index";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { IQueryList } from "../../../interfaces/query";
import { getMovieList } from "../../../redux/actionCreators/MovieCreators";
import TrailerModal from "../../../components/Trailer";
import MovieCarousel from "./MovieCarousel";
import MovieList from "./MovieList";
import utils from "../../../utils";
import RMovieList from "../../../responsive/RMovieList";

const MovieHome: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { movieList } = useSelector(
    (state: ReducerState) => state.MovieReducer
  );

  const dispatch = useDispatch();

  customHook.useLoading();

  const langs = utils.changeLang(lang);

  const { movies } = movieList;

  React.useEffect(() => {
    const query: IQueryList = {
      isPaging: false,
    };
    dispatch(getMovieList(query));
  }, []);

  return (
    <div className="movie-home">
      <MovieCarousel lang={lang} langs={langs} movies={movies} />
      <MovieList lang={lang} langs={langs} movies={movies} />
      <RMovieList lang={lang} langs={langs} movies={movies} />

      <TrailerModal />
    </div>
  );
};

export default MovieHome;
