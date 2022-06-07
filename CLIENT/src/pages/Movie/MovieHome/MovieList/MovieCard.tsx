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

  const [point, setPoint] = React.useState<number>(0);

  React.useEffect(() => {
    if(movie) {
      setPoint(movie.ratePoint || 0)
    }
  }, [movie])

  const getColor = (i: number) => {
    if (i <= point) {
      return "#ffc107";
    } else {
      return "#e4e5e9";
    }
  };

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

      <div className="card__rate">
        {[...Array(5)].map((v, i) => {
          const ratingValue = i + 1;
          return (
            <i
              key={i}
              className="fa-solid fa-star"
              style={{ color: getColor(ratingValue) }}
            ></i>
          );
        })}
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
