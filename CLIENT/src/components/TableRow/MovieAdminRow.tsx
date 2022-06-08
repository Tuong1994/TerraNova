import React from "react";
import {
  EMovieCountry,
  EMovieStatus,
  EMovieType,
  IMovie,
} from "../../models/Movie";
import { Link } from "react-router-dom";
import { ELangs, ILangs } from "../../interfaces/lang";
import TableCol from "../Table/TableCol";
import moment from "moment";

interface MovieAdminRowProps {
  lang: string;
  langs: ILangs;
  movie: IMovie;
  index: number;
}

const MovieAdminRow: React.FunctionComponent<MovieAdminRowProps> = (props) => {
  const { lang, langs, movie, index } = props;

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

  const renderMovieStatus = () => {
    switch (movie.status) {
      case EMovieStatus.comming: {
        return langs?.status.comming;
      }
      case EMovieStatus.showing: {
        return langs?.status.showing;
      }
    }
  };

  return (
    <tr className="movie-admin-row">
      <TableCol>{index + 1}</TableCol>

      <TableCol>
        <div className="image__col">
          <img
            className="col__img"
            src={(() => {
              if (movie.image) {
                return movie.image;
              } else {
                return "../img/product_img.jpg";
              }
            })()}
            alt="movie"
          />
        </div>
      </TableCol>

      <TableCol>
        <p>{renderMovieName()}</p>
      </TableCol>

      <TableCol>
        <p>{renderMovieType()}</p>
      </TableCol>

      <TableCol>
        <p>{renderMovieCountry()}</p>
      </TableCol>

      <TableCol>
        <p>{renderMovieStatus()}</p>
      </TableCol>

      <TableCol>
        <p>{moment(movie.createdAt).format("DD/MM/YYYY")}</p>
      </TableCol>

      <TableCol>
        <p>{moment(movie.updatedAt).format("DD/MM/YYYY")}</p>
      </TableCol>

      <TableCol>
        <Link
          to={`/admin/course/editCourse/${movie.id || movie.movieId}`}
          className="button--edit"
        >
          <i className="far fa-edit"></i>
        </Link>
        <div className="button--delete">
          <i className="fas fa-trash-alt"></i>
        </div>
      </TableCol>
    </tr>
  );
};

export default MovieAdminRow;
