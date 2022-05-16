import React from "react";
import * as customHook from "../../../hooks/index";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import TrailerModal from "../../../components/Trailer";
import MovieCarousel from "./MovieCarousel";
import MovieList from "./MovieList";
import utils from "../../../utils";

const MovieHome: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  customHook.useLoading();

  const langs = utils.changeLang(lang);

  return (
    <div className="movie-home">
      <MovieCarousel lang={lang} langs={langs} />
      <MovieList lang={lang} langs={langs} />

      <TrailerModal />
    </div>
  );
};

export default MovieHome;
