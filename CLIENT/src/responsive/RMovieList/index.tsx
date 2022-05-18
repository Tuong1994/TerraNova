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

  const [nowShowingLoad, setNowShowingLoad] = React.useState<number>(3);
  const [commingSoonLoad, setCommingSoonLoad] = React.useState<number>(3);
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

  const handleLoadMore = (type: number) => {
    dispatch(actions.openButtonLoading);
    setTimeout(() => {
      if (type === 1) {
        setNowShowingLoad((prev) => prev + 3);
        dispatch(actions.closeButtonLoading);
      } else if (type === 2) {
        setCommingSoonLoad((prev) => prev + 3);
        dispatch(actions.closeButtonLoading);
      }
    }, 500);
  };

  return (
    <div className="movie-list__responsive">
      {/* Tabs title */}
      <div className="responsive__title">
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

      {/* Tabs content */}
      <div className="responsive__content">
        <div
          className={`content__inner ${
            tabActive === 1 && "content__inner--active"
          }`}
        >
          <div className="inner__list">
            {movies.slice(0, nowShowingLoad).map((movie) => {
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
          {nowShowingLoad < movies.length && (
            <div className="inner__load">
              <Button
                className={`load__button ${
                  buttonLoading && "button--disabled"
                }`}
                onClick={() => handleLoadMore(1)}
              >
                <ButtonLoading />
                <span>{langs?.button.seeMore}</span>
              </Button>
            </div>
          )}
        </div>

        <div
          className={`content__inner ${
            tabActive === 2 && "content__inner--active"
          }`}
        >
          <div className="inner__list">
            {movies.slice(0, commingSoonLoad).map((movie) => {
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
          {commingSoonLoad < movies.length && (
            <div className="inner__load">
              <Button
                className={`load__button ${
                  buttonLoading && "button--disabled"
                }`}
                onClick={() => handleLoadMore(2)}
              >
                <ButtonLoading />
                <span>{langs?.button.seeMore}</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RMovieList;
