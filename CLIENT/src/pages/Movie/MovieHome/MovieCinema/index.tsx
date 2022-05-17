import React from "react";
import { ILangs } from "../../../../interfaces/lang";
import { ICineplex } from "../../../../models/Cineplex";

interface MovieCinemaProps {
  lang: string;
  langs: ILangs;
  cineplexes: ICineplex[];
}

const MovieCinema: React.FunctionComponent<MovieCinemaProps> = (props) => {
  const { lang, langs, cineplexes } = props;

  console.log(cineplexes);

  return <div></div>;
};

export default MovieCinema;
