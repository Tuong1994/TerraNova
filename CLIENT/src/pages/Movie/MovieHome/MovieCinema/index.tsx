import React from "react";
import * as Card from "../../../../components/Card";
import { ILangs } from "../../../../interfaces/lang";
import { ICineplex } from "../../../../models/Cineplex";
import SubTabs from "./SubTabs";

interface MovieCinemaProps {
  lang: string;
  langs: ILangs;
  cineplexes: ICineplex[];
}

const MovieCinema: React.FunctionComponent<MovieCinemaProps> = (props) => {
  const { lang, langs, cineplexes } = props;

  const [tabActive, setTabActive] = React.useState<number>(0);


  return (
    <div className="movie-home__cinema">
      <Card.Wrapper className="cinema__tabs">
        <div className="tabs__title">
          {cineplexes?.map((cineplex, index) => {
            return (
              <div
                className={`title__item ${
                  tabActive === index && "title__item--active"
                }`}
                key={cineplex.id}
                onClick={() => setTabActive(index)}
              >
                <img
                  className="item__logo"
                  src={`/img/logo/${cineplex.logo}`}
                  alt={cineplex.name}
                />
              </div>
            );
          })}
        </div>
        <div className="tabs__content">
          {cineplexes?.map((cineplex, index) => {
            return (
              <SubTabs
                key={cineplex.id}
                cineplex={cineplex}
                index={index}
                lang={lang}
                langs={langs}
                tabActive={tabActive}
              />
            );
          })}
        </div>
      </Card.Wrapper>
    </div>
  );
};

export default MovieCinema;
