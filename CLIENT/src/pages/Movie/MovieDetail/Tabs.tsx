import React from "react";
import { ILangs } from "../../../interfaces/lang";
import { IMovie } from "../../../models/Movie";
import Comment from "../../../components/Comment";
import Detail from "./Detail";
import ShowTimes from "./ShowTimes";

interface MovieTabsProps {
  lang: string;
  langs: ILangs;
  movie: IMovie;
}

const MovieTabs: React.FunctionComponent<MovieTabsProps> = (props) => {
  const { lang, langs, movie } = props;

  const [tabActive, setTabActive] = React.useState<number>(1);

  return (
    <div className="movie-detail__tabs">
      <div className="tabs__wrapper">
        {/* Tabs title */}
        <div className="wrapper__title">
          <div
            className={`button--fill title__item ${
              tabActive === 1 && "title__item--active"
            }`}
            onClick={() => {
              setTabActive(1);
            }}
          >
            <i className="fa-solid fa-calendar"></i>
            <span>{langs?.movie.detail.tabTitle_1}</span>
          </div>
          <div
            className={`button--fill title__item ${
              tabActive === 2 && "title__item--active"
            }`}
            onClick={() => {
              setTabActive(2);
            }}
          >
            <i className="fa-solid fa-list"></i>
            <span>{langs?.movie.detail.tabTitle_2}</span>
          </div>
          <div
            className={`button--fill title__item ${
              tabActive === 3 && "title__item--active"
            }`}
            onClick={() => {
              setTabActive(3);
            }}
          >
            <i className="fa-solid fa-comment"></i>
            <span>{langs?.movie.detail.tabTitle_3}</span>
          </div>
        </div>

        {/* Tabs content */}
        <div className="wrapper__content">
          <div
            className={`content__item ${
              tabActive === 1 && "content__item--active"
            }`}
          >
            <ShowTimes langs={langs} movie={movie} />
          </div>
          <div
            className={`content__item ${
              tabActive === 2 && "content__item--active"
            }`}
          >
            <Detail lang={lang} langs={langs} movie={movie} />
          </div>
          <div
            className={`content__item ${
              tabActive === 3 && "content__item--active"
            }`}
          >
            <Comment comments={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieTabs;
