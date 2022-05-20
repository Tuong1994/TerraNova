import React from "react";
import * as Card from "../../../components/Card";
import { ELangs, ILangs } from "../../../interfaces/lang";
import { IMovie } from "../../../models/Movie";
import PlayButton from "../../../components/PlayButton";
import moment from "moment";

interface MovieInfoProps {
  lang: string;
  langs: ILangs;
  movie: IMovie;
}

const MovieInfo: React.FunctionComponent<MovieInfoProps> = (props) => {
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
    <div className="movie-detail__info">
      <Card.Wrapper className="info__card">
        <div className="card__image">
          <img
            className="image"
            src={movie.image || "/img/movie/doctor_strange_2.jpg"}
            alt={movie.nameENG}
          />
          <div className="image__overlay">
            <PlayButton payload={movie.trailer} />
          </div>
        </div>

        <div className="card__content">
          <h3>
            {langs?.movie.detail.movieName} : <span>{renderMovieName()}</span>
          </h3>
          <p>
            {langs?.movie.detail.releaseDay} :{" "}
            <span>{moment(movie.releaseDay).format("DD/MM/YYYY")}</span>
          </p>
        </div>

        <div className="card__rate">
          <div className="rate__point">0/5</div>
          <div className="rate__icon">
            {[...Array(5)].map((v, i) => {
              return (
                <i
                  key={i}
                  className="fa-solid fa-star"
                  style={{ color: "#e4e5e9" }}
                ></i>
              );
            })}
          </div>
        </div>
      </Card.Wrapper>
    </div>
  );
};

export default MovieInfo;
