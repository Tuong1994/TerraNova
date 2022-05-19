import React from "react";
import { ELangs, ILangs } from "../../../../interfaces/lang";
import { EMovieStatus, IMovie } from "../../../../models/Movie";
import { useDispatch } from "react-redux";
import { EPaginationActionTypes } from "../../../../redux/actionTypes/PaginationActionTypes";
import DataLoading from "../../../../components/Loading/DataLoading";
import Pagination from "../../../../components/Pagination";
import MovieCard from "./MovieCard";

interface MovieListProps {
  lang: string;
  langs: ILangs;
  total: number;
  limits: number;
  movies: IMovie[];
  setFilter: React.Dispatch<React.SetStateAction<number>>;
}

const MovieList: React.FunctionComponent<MovieListProps> = (props) => {
  const { movies, total, limits, lang, langs, setFilter } = props;

  const [tabActive, setTabActive] = React.useState<number>(1);

  const dispatch = useDispatch();

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

  const handleResetPage = () => {
    dispatch({
      type: EPaginationActionTypes.CHANGE_PAGE,
      payload: 1,
    });
  };

  return (
    <div className="movie-home__list">
      <div className="list__title">
        <div
          className={`title__item ${tabActive === 1 && "title__item--active"}`}
          onClick={() => {
            setFilter(EMovieStatus.showing);
            setTabActive(1);
            handleResetPage();
          }}
        >
          {langs?.movie.home.list.tabTitle_1}
        </div>
        <div
          className={`title__item ${tabActive === 2 && "title__item--active"}`}
          onClick={() => {
            setFilter(EMovieStatus.comming);
            setTabActive(2);
            handleResetPage();
          }}
        >
          {langs?.movie.home.list.tabTitle_2}
        </div>
      </div>
      <div className="list__content">
        <DataLoading />
        {movies.map((movie) => {
          return (
            <div className="content__inner">
              <MovieCard
                key={movie.id}
                langs={langs}
                movie={movie}
                renderMovieName={renderMovieName}
              />
            </div>
          );
        })}
      </div>

      <Pagination total={total} perPage={limits} />
    </div>
  );
};

export default MovieList;
