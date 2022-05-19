import React from "react";
import * as customHook from "../../../hooks/index";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { IQueryList } from "../../../interfaces/query";
import { getMovieList } from "../../../redux/actionCreators/MovieCreators";
import {
  getCineplexDetail,
  getCineplexList,
} from "../../../redux/actionCreators/CineplexCreators";
import { EMovieStatus } from "../../../models/Movie";
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
  const { cineplexList, cineplexDetail } = useSelector(
    (state: ReducerState) => state.CineplexReducer
  );
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );

  const [filter, setFilter] = React.useState<number>(EMovieStatus.showing);
  const [cineplexId, setCineplexId] = React.useState<string>("");
  const [sizeWidth, setSizeWidth] = React.useState<number>(1900);

  const dispatch = useDispatch();

  customHook.useLoading();

  const langs = utils.changeLang(lang);

  const { total, limits, movies } = movieList;
  const { cineplexes } = cineplexList;

  // Get movie list
  React.useEffect(() => {
    const query: IQueryList = {
      page: page,
      isPaging: true,
      filter: filter,
    };
    dispatch(getMovieList(query));
  }, [page, filter]);

  // Get cineplex list
  React.useEffect(() => {
    const query: IQueryList = {
      isPaging: false,
    };
    dispatch(getCineplexList(query));
  }, []);

  // Get cineplex detail
  React.useEffect(() => {
    if (cineplexId) {
      const query: IQueryList = {
        cineplexId: cineplexId,
      };
      dispatch(getCineplexDetail(query));
    }
  }, [cineplexId]);

  return (
    <div className="movie-home">
      <MovieCarousel lang={lang} langs={langs} movies={movies} />

      <MovieList
        lang={lang}
        langs={langs}
        movies={movies}
        total={total}
        limits={limits}
        setFilter={setFilter}
      />

      <RMovieList lang={lang} langs={langs} movies={movies} />

      <MovieCinema
        lang={lang}
        langs={langs}
        cineplexes={cineplexes}
        cineplex={cineplexDetail}
        setCineplexId={setCineplexId}
      />

      <RMovieCinema
        lang={lang}
        langs={langs}
        cineplex={cineplexDetail}
        cineplexes={cineplexes}
        setCineplexId={setCineplexId}
      />

      <Consultation />

      <TrailerModal />
    </div>
  );
};

export default MovieHome;
