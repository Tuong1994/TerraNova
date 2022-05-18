import React from "react";
import { Link } from "react-router-dom";
import { ELangs, ILangs } from "../../../../interfaces/lang";
import { ICineplex } from "../../../../models/Cineplex";
import { IMovie } from "../../../../models/Movie";

interface SubTabsProps {
  lang: string;
  langs: ILangs;
  tabActive: number;
  index: number;
  cineplex: ICineplex;
}

const SubTabs: React.FunctionComponent<SubTabsProps> = (props) => {
  const { lang, langs, cineplex, tabActive, index } = props;

  const [subTabActive, setSubTabActive] = React.useState<number>(0);

  const renderMovieName = (movie: IMovie) => {
    switch (lang) {
      case ELangs.ENG: {
        return movie.nameENG;
      }
      case ELangs.VN: {
        return movie.nameVN;
      }
      case ELangs.CH: {
        return movie.nameCH;
      }
    }
  };

  return (
    <div
      className={`content__subtabs ${
        tabActive === index && "content__subtabs--active"
      }`}
    >
      <div className="subtabs__title">
        {cineplex?.cinemas?.slice(0, 8).map((cinema, index) => {
          return (
            <div
              className={`title__item ${
                subTabActive === index && "title__item--active"
              }`}
              key={cinema.id}
              onClick={() => setSubTabActive(index)}
            >
              <img
                className="item__image"
                src="/img/cinema.png"
                alt={cinema.name}
              />
              <div className="item__detail">
                <p>{cinema.name}</p>
                <p>{cinema.address}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="subtabs__content">
        {cineplex?.cinemas?.map((cinema, index) => {
          return (
            <div
              className={`content__inner ${
                subTabActive === index && "content__inner--active"
              }`}
              key={cinema.id}
            >
              {cinema?.movieList?.slice(0, 12).map((movie) => {
                return (
                  <div key={movie.id} className="inner__item">
                    <img
                      className="item__image"
                      src="/img/movie/the_batman.jpg"
                      alt={movie.nameENG}
                    />
                    <div className="item__detail">
                      <p className="detail__name">{renderMovieName(movie)}</p>
                      <Link
                        to={`/movieDetail/${movie.id}`}
                        className="button--submit detail__link"
                      >
                        {langs?.button.bookTicket}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SubTabs;
