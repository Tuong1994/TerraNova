import React from "react";
import { ELangs, ILangs } from "../../../interfaces/lang";
import { EMovieCountry, EMovieType, IMovie } from "../../../models/Movie";

interface DetailProps {
  lang: string;
  langs: ILangs;
  movie: IMovie;
}

const Detail: React.FunctionComponent<DetailProps> = (props) => {
  const { lang, langs, movie } = props;

  const renderMovieContent = () => {
    switch (lang) {
      case ELangs.VN: {
        return movie.descVN;
      }
      case ELangs.ENG: {
        return movie.descENG;
      }
      case ELangs.CH: {
        return movie.descCH;
      }
    }
  };

  const renderMovieType = () => {
    switch (movie.type) {
      case EMovieType.action: {
        return langs?.movie.movieType.action;
      }
      case EMovieType.comedy: {
        return langs?.movie.movieType.comedy;
      }
      case EMovieType.sciFi: {
        return langs?.movie.movieType.sciFi;
      }
      case EMovieType.adventure: {
        return langs?.movie.movieType.adventure;
      }
      case EMovieType.horror: {
        return langs?.movie.movieType.horror;
      }
      case EMovieType.drama: {
        return langs?.movie.movieType.drama;
      }
      case EMovieType.thriller: {
        return langs?.movie.movieType.thriller;
      }
    }
  };

  const renderMovieCountry = () => {
    switch (movie.country) {
      case EMovieCountry.america: {
        return langs?.movie.movieCountry.america;
      }
      case EMovieCountry.china: {
        return langs?.movie.movieCountry.china;
      }
      case EMovieCountry.australia: {
        return langs?.movie.movieCountry.australia;
      }
      case EMovieCountry.england: {
        return langs?.movie.movieCountry.england;
      }
      case EMovieCountry.korean: {
        return langs?.movie.movieCountry.korean;
      }
      case EMovieCountry.vietnam: {
        return langs?.movie.movieCountry.vietnam;
      }
    }
  };

  console.log(movie)

  return (
    <div className="item__detail">
      <div className="detail__info">
        <div className="info__item">
          <p>{langs?.movie.detail.director} : </p>
          <p>{movie.director}</p>
        </div>
        <div className="info__item">
          <p>{langs?.movie.detail.actors} : </p>
          <p>{movie.actors}</p>
        </div>
        <div className="info__item">
          <p>{langs?.movie.detail.type} : </p>
          <p>{renderMovieType()}</p>
        </div>
        <div className="info__item">
          <p>{langs?.movie.detail.country} : </p>
          <p>{renderMovieCountry()}</p>
        </div>
      </div>
      <div className="detail__content">
        <p>{langs?.movie.detail.content} : </p>
        <p>{renderMovieContent()}</p>
      </div>
    </div>
  );
};

export default Detail;
