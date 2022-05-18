import React from "react";
import { Link } from "react-router-dom";
import { ELangs, ILangs } from "../../interfaces/lang";
import { IMovie } from "../../models/Movie";

interface MovieProps {
  lang: string;
  langs: ILangs;
  movie: IMovie;
}

const Movie: React.FunctionComponent<MovieProps> = (props) => {
  const { lang, langs, movie } = props;

  const renderMovieName = () => {
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
    <div className="content__movie">
      <img
        className="movie__image"
        src={movie.image || "/img/movie/the_batman.jpg"}
        alt={movie.nameENG}
      />
      <div className="movie__content">
        <p className="content__name">{renderMovieName()}</p>
        <Link to={`/movieDetail/${movie.id}`} className="button--submit content__link">
          {langs?.button.bookTicket}
        </Link>
      </div>
    </div>
  );
};

export default Movie;
