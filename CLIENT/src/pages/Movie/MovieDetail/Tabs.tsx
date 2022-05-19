import React from "react";
import Comment from "../../../components/Comment";
import { ILangs } from "../../../interfaces/lang";
import { IMovie } from "../../../models/Movie";
import Detail from "./Detail";
import ShowTimes from "./ShowTimes";

interface MovieTabsProps {
  langs: ILangs;
  movie: IMovie;
}

const MovieTabs: React.FunctionComponent<MovieTabsProps> = (props) => {
  const { langs } = props;

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
            {langs?.movie.detail.tabTitle_1}
          </div>
          <div
            className={`button--fill title__item ${
              tabActive === 2 && "title__item--active"
            }`}
            onClick={() => {
              setTabActive(2);
            }}
          >
            {langs?.movie.detail.tabTitle_2}
          </div>
          <div
            className={`button--fill title__item ${
              tabActive === 3 && "title__item--active"
            }`}
            onClick={() => {
              setTabActive(3);
            }}
          >
            {langs?.movie.detail.tabTitle_3}
          </div>
        </div>

        {/* Tabs content */}
        <div className="wrapper__content">
          <div
            className={`content__item ${
              tabActive === 1 && "content__item--active"
            }`}
          >
            <ShowTimes />
          </div>
          <div
            className={`content__item ${
              tabActive === 2 && "content__item--active"
            }`}
          >
            <Detail />
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
