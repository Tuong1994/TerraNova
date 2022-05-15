import React from "react";
import * as customHook from "../../../hooks/index";
import MovieCarousel from "./MovieCarousel";

const MovieHome: React.FunctionComponent<{}> = (props) => {
  customHook.useLoading();

  return <div className="movie-home">
    <MovieCarousel />
  </div>;
};

export default MovieHome;
