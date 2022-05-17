import React from "react";
import { Link } from "react-router-dom";
import { ILangs } from "../../../../interfaces/lang";
import { ICineplex } from "../../../../models/Cineplex";

interface SubTabsProps {
  langs: ILangs;
  tabActive: number;
  index: number;
  cineplex: ICineplex;
}

const SubTabs: React.FunctionComponent<SubTabsProps> = (props) => {
  const { langs, cineplex, tabActive, index } = props;

  const [subTabActive, setSubTabActive] = React.useState<number>(0);

  return (
    <div
      className={`content__subtabs ${
        tabActive === index && "content__subtabs--active"
      }`}
    >
      <div className="subtabs__title">
        {cineplex?.cinemas?.map((cinema, index) => {
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
            >
              {cinema?.movieList?.map((movie) => {
                return (
                  <div key={movie.id} className="inner__item">
                    <img
                      className="item__image"
                      src="/img/movie/the_batman.jpg"
                      alt={movie.nameENG}
                    />
                    <div className="item__detail">
                      <p className="detail__name">{movie.nameENG}</p>
                      <Link to="/movie" className="button--submit detail__link">
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
