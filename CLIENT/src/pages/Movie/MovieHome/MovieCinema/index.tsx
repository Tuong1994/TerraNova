import React from "react";
import * as Card from "../../../../components/Card";
import { ILangs } from "../../../../interfaces/lang";
import { ICineplex } from "../../../../models/Cineplex";
import DataLoading from "../../../../components/Loading/DataLoading";
import SubTabs from "./SubTabs";
import utils from "../../../../utils";

interface MovieCinemaProps {
  lang: string;
  langs: ILangs;
  cineplexes: ICineplex[];
  cineplex: ICineplex;
  setCineplexId: React.Dispatch<React.SetStateAction<string>>;
}

const MovieCinema: React.FunctionComponent<MovieCinemaProps> = (props) => {
  const { lang, langs, cineplexes, cineplex, setCineplexId } = props;

  const [tabActive, setTabActive] = React.useState<number>(-1);

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
                onClick={() => {
                  setCineplexId(cineplex.id || "");
                  setTabActive(index);
                }}
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
          {utils.checkObjectEmpty(cineplex) ? (
            <React.Fragment>
              <DataLoading />
              <SubTabs cineplex={cineplex} lang={lang} langs={langs} />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <DataLoading />
              <div className="content__nodata">
                <p>Choose cinema to book ticket</p>
              </div>
            </React.Fragment>
          )}
        </div>
      </Card.Wrapper>
    </div>
  );
};

export default MovieCinema;
