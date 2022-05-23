import React from "react";
import * as Card from "../../../components/Card";
import { Link } from "react-router-dom";
import { ILangs } from "../../../interfaces/lang";
import { ETime } from "../../../interfaces/time";
import { IMovie } from "../../../models/Movie";
import moment from "moment";

interface ShowTimesProps {
  langs: ILangs;
  movie: IMovie;
}

const ShowTimes: React.FunctionComponent<ShowTimesProps> = (props) => {
  const { langs, movie } = props;

  const [tabsActive, setTabActive] = React.useState<number>(0);
  const [dateArr, setDateArr] = React.useState<string[]>([]);

  React.useEffect(() => {
    //   GET SHOWTIME ARRAY
    const showTimeArr = movie.cineplexes?.map((cineplex) => {
      return cineplex.cinemas?.map((cinema) => {
        return cinema.theaters?.map((theater) => {
          return theater.schedules?.map((schedule) => {
            return { showTime: schedule.showTime };
          });
        });
      });
    });

    // CONVERT SHOWTIME ARRAY => ARRAY OF DAYS IN WEEK
    const newArr: string[] = [];

    // Flat showtime array
    const flatArr = showTimeArr?.flat(4);

    // Remove duplicate date in array
    flatArr?.forEach((i: any) => {
      const date = new Date(i.showTime);
      const newDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
      if (!newArr.includes(newDate)) {
        newArr.push(newDate);
      }
    });
    setDateArr(newArr);
  }, [movie]);

  const renderDay = (v: number) => {
    switch (v) {
      case ETime.mon: {
        return langs?.time.mon;
      }
      case ETime.tue: {
        return langs?.time.tue;
      }
      case ETime.wed: {
        return langs?.time.wed;
      }
      case ETime.thur: {
        return langs?.time.thur;
      }
      case ETime.fri: {
        return langs?.time.fri;
      }
      case ETime.sat: {
        return langs?.time.sat;
      }
      case ETime.sun: {
        return langs?.time.sun;
      }
    }
  };

  return (
    <Card.Wrapper className="item__showtimes">
      <div className="showtimes__tabs">
        {movie.cineplexes?.map((cineplex, index) => {
          return (
            <div
              key={cineplex.id}
              className={`tabs__logo ${
                tabsActive === index && "tabs__logo--active"
              }`}
              onClick={() => setTabActive(index)}
            >
              <img
                className="logo__image"
                src={`/img/logo/${cineplex.logo}` || "/img/logo/bhd_logo.png"}
                alt={cineplex.name}
              />
            </div>
          );
        })}
      </div>

      <div className="showtimes__content">
        <div className="content__date">
          {dateArr.map((date, index) => {
            return (
              <div className="date__title" key={index}>
                <p>
                  {new Date(date).getDate()}/{new Date(date).getMonth() + 1}
                </p>
                <p>{renderDay(new Date(date).getDay())}</p>
              </div>
            );
          })}
        </div>

        <div className="content__inner">
          {movie.cineplexes?.map((cineplex, index) => {
            return (
              <div
                className={`inner__cinema ${
                  tabsActive === index && "inner__cinema--active"
                }`}
                key={cineplex.id}
              >
                {cineplex.cinemas?.map((cinema) => {
                  return (
                    <div className="cinema__item" key={cinema.id}>

                      <div className="item__info">
                        <img
                          className="info__image"
                          src="/img/cinema.png"
                          alt={cinema.name}
                        />
                        <div className="info__content">
                          <p>{cinema.name}</p>
                          <p>{cinema.address}</p>
                        </div>
                      </div>

                      <div className="item__theater">
                        {cinema.theaters?.map((theater) => {
                          return (
                            <div className="theater__item" key={theater.id}>
                              <p className="item__name">
                                {langs?.movie.detail.theater} {theater.name}
                              </p>
                              <div className="item__schedule">
                                  {theater.schedules?.map(schedule => {
                                      return <Link to={`/movieDetail/${movie.id}`} className="button--round schedule__link">
                                          {moment(schedule.showTime).format("hh:mm: A")}
                                      </Link>
                                  })}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </Card.Wrapper>
  );
};

export default ShowTimes;
