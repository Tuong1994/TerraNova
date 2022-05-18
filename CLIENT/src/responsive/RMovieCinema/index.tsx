import React from "react";
import * as Card from "../../components/Card";
import { ILangs } from "../../interfaces/lang";
import { ICineplex } from "../../models/Cineplex";
import Cinema from "./Cinema";
import Cineplex from "./Cineplex";

interface RMovieCinemaProps {
  lang: string;
  langs: ILangs;
  cineplexes: ICineplex[];
}

const RMovieCinema: React.FunctionComponent<RMovieCinemaProps> = (props) => {
  const { lang, langs, cineplexes } = props;

  return (
    <div className="movie-cinema__responsive">
      <Card.Wrapper className="responsive__card">
        {cineplexes.map((cineplex) => {
          return (
            <Cineplex
              key={cineplex.id}
              lang={lang}
              langs={langs}
              cineplex={cineplex}
            />
          );
        })}
      </Card.Wrapper>
    </div>
  );
};

export default RMovieCinema;
