import React from "react";
import * as customHook from "../../../hooks/index";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { IQueryList } from "../../../interfaces/query";
import { getMovieList } from "../../../redux/actionCreators/MovieCreators";
import { getCineplexList } from "../../../redux/actionCreators/CineplexCreators";
import TrailerModal from "../../../components/Trailer";
import MovieCarousel from "./MovieCarousel";
import MovieList from "./MovieList";
import RMovieList from "../../../responsive/RMovieList";
import MovieCinema from "./MovieCinema";
import RMovieCinema from "../../../responsive/RMovieCinema";
import Consultation from "../../../components/Consultation/ConsultationForm";
import utils from "../../../utils";

const MovieHome: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { movieList } = useSelector(
    (state: ReducerState) => state.MovieReducer
  );
  const { cineplexList } = useSelector(
    (state: ReducerState) => state.CineplexReducer
  );

  const dispatch = useDispatch();

  customHook.useLoading();

  const langs = utils.changeLang(lang);

  const { movies } = movieList;
  const { cineplexes } = cineplexList;

  React.useEffect(() => {
    const query: IQueryList = {
      isPaging: false,
    };
    dispatch(getMovieList(query));
    dispatch(getCineplexList(query));
  }, []);

  return (
    <div className="movie-home">
      <MovieCarousel lang={lang} langs={langs} movies={movies} />

      <MovieList lang={lang} langs={langs} movies={movies} />
      <RMovieList lang={lang} langs={langs} movies={movies} />

      <MovieCinema lang={lang} langs={langs} cineplexes={cineplexes} />
      <RMovieCinema lang={lang} langs={langs} cineplexes={cineplexes} />

      <Consultation />

      <TrailerModal />
    </div>
  );
};

export default MovieHome;
