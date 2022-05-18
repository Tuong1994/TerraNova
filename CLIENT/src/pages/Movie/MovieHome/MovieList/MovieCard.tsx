import React from "react";
import { ILangs } from "../../../../interfaces/lang";
import { IMovie } from "../../../../models/Movie";
import { Link } from "react-router-dom";
import PlayButton from "../../../../components/PlayButton";

interface MovieCardProps {
  langs: ILangs;
  movie: IMovie;
  renderMovieName: (movie: IMovie) => string | undefined;
}

const MovieCard: React.FunctionComponent<MovieCardProps> = (props) => {
  const { langs, movie, renderMovieName } = props;

  return (
    <div className="slide__card">
      <div className="card__image">
        <img
          className="image"
          src={movie.image || "/img/movie/secret_of_dumbledore.jpg"}
          alt={movie.nameENG}
        />
        <div className="image__overlay">
          <PlayButton payload={movie.trailer} />
        </div>
      </div>
      <div className="card__name">
        <p className="name__text">{renderMovieName(movie)}</p>
        <Link
          to={`/movieDetail/${movie.id}`}
          className="button--submit name__link"
        >
          {langs?.button.bookTicket}
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
