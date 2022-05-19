import React from "react";
import { ELangs, ILangs } from "../../interfaces/lang";
import { IMovie } from "../../models/Movie";
import { ReducerState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../pages/Movie/MovieHome/MovieList/MovieCard";
import Button from "../../components/Button";
import ButtonLoading from "../../components/Loading/ButtonLoading";
import actions from "../../configs/actions";

interface RMovieListProps {
  lang: string;
  langs: ILangs;
  movies: IMovie[];
}

const RMovieList: React.FunctionComponent<RMovieListProps> = (props) => {
  const { lang, langs, movies } = props;

  const { buttonLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [loadMore, setLoadMore] = React.useState<number>(3);

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

  const handleLoadMore = () => {
    dispatch(actions.openButtonLoading);
    setTimeout(() => {
        setLoadMore((prev) => prev + 3);
        dispatch(actions.closeButtonLoading);
    }, 500);
  };

  return (
    <div className="movie-list__responsive">
      <div className="responsive__content">
        <div className="content__list">
          {movies.slice(0, loadMore).map((movie) => {
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

        {loadMore < movies.length && (
          <div className="content__load">
            <Button
              className={`load__button ${buttonLoading && "button--disabled"}`}
              onClick={handleLoadMore}
            >
              <ButtonLoading />
              <span>{langs?.button.seeMore}</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RMovieList;
