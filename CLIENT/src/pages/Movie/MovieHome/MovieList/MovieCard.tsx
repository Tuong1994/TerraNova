import React from "react";
import { useDispatch } from "react-redux";
import { ILangs } from "../../../../interfaces/lang";
import { IMovie } from "../../../../models/Movie";
import { Link } from "react-router-dom";
import { EVideoActionTypes } from "../../../../redux/actionTypes/VideoActionTypes";
import { EModalActionTypes } from "../../../../redux/actionTypes/ModalActionTypes";

interface MovieCardProps {
  langs: ILangs;
  movie: IMovie;
  renderMovieName: (movie: IMovie) => string | undefined;
}

const MovieCard: React.FunctionComponent<MovieCardProps> = (props) => {
  const { langs, movie, renderMovieName } = props;
  const dispatch = useDispatch();

  return (
    <div className="slide__card">
      <div className="card__image">
        <img
          className="image"
          src={movie.image || "/img/movie/secret_of_dumbledore.jpg"}
          alt={movie.nameENG}
        />
        <div className="image__overlay">
          <div
            className="overlay__play"
            onClick={() => {
              dispatch({
                type: EVideoActionTypes.ADD_LINK,
                payload: movie.trailer,
              });
              setTimeout(() => {
                dispatch({
                  type: EModalActionTypes.OPEN_TRAILER_MODAL,
                });
              }, 300);
            }}
          >
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
      <div className="card__name">
        <p className="name__text">{renderMovieName(movie)}</p>
        <Link to="/movie" className="button--submit name__link">
          {langs?.button.bookTicket}
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
