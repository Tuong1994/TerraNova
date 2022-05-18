import React from "react";
import { ELangs, ILangs } from "../../../../interfaces/lang";
import { IMovie } from "../../../../models/Movie";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard";

interface MovieListProps {
  lang: string;
  langs: ILangs;
  movies: IMovie[];
}

const MovieList: React.FunctionComponent<MovieListProps> = (props) => {
  const { movies, lang, langs } = props;

  const [nowShowingArr, setNowShowingArr] = React.useState<any>([]);
  const [commingSoonArr, setCommingSoonArr] = React.useState<any>([]);
  const [tabActive, setTabActive] = React.useState<number>(1);

  React.useEffect(() => {
    if (movies) {
      setNowShowingArr(
        movies
          ?.slice(0, 20)
          .reduce(
            (rows, key, index) =>
              (index % 6 === 0
                ? rows.push([key])
                : rows[rows.length - 1].push(key)) && rows,
            [] as any[]
          )
      );
      setCommingSoonArr(
        movies
          ?.slice(0, 10)
          .reduce(
            (rows, key, index) =>
              (index % 6 === 0
                ? rows.push([key])
                : rows[rows.length - 1].push(key)) && rows,
            [] as any[]
          )
      );
    }
  }, [movies]);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    className: "slider",
  };

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
    <div className="movie-home__list">
      <div className="list__title">
        <div
          className={`title__item ${tabActive === 1 && "title__item--active"}`}
          onClick={() => setTabActive(1)}
        >
          {langs?.movie.home.list.tabTitle_1}
        </div>
        <div
          className={`title__item ${tabActive === 2 && "title__item--active"}`}
          onClick={() => setTabActive(2)}
        >
          {langs?.movie.home.list.tabTitle_2}
        </div>
      </div>
      <div className="list__content">
        <div
          className={`content__inner ${
            tabActive === 1 && "content__inner--active"
          }`}
        >
          <Slider {...settings}>
            {nowShowingArr.map((slide: any, index: number) => {
              return (
                <div className="inner__slide" key={index}>
                  {slide?.map((movie: any) => {
                    return (
                      <MovieCard
                        key={movie.id}
                        langs={langs}
                        movie={movie}
                        renderMovieName={renderMovieName}
                      />
                    );
                  })}
                </div>
              );
            })}
          </Slider>
        </div>

        <div
          className={`content__inner ${
            tabActive === 2 && "content__inner--active"
          }`}
        >
          <Slider {...settings}>
            {commingSoonArr.map((slide: any, index: number) => {
              return (
                <div className="inner__slide" key={index}>
                  {slide?.map((movie: any) => {
                    return (
                      <MovieCard
                        key={movie.id}
                        langs={langs}
                        movie={movie}
                        renderMovieName={renderMovieName}
                      />
                    );
                  })}
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
