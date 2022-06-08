import React from "react";
import * as Card from "../../../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { ESortBy, IQueryList } from "../../../../interfaces/query";
import { getMovieList } from "../../../../redux/actionCreators/MovieCreators";
import { Link } from "react-router-dom";
import Table from "../../../../components/Table";
import ContentHeader from "../../../../components/ContentHeader";
import Filter from "../../../../components/Filter";
import MovieAdminRow from "../../../../components/TableRow/MovieAdminRow";
import DataLoading from "../../../../components/Loading/DataLoading";
import Pagination from "../../../../components/Pagination";
import utils from "../../../../utils";

const MovieList: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { dataLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { movieList } = useSelector(
    (state: ReducerState) => state.MovieReducer
  );

  const [filter, setFilter] = React.useState<number>(0);
  const [freeText, setFreeText] = React.useState<string>("");
  const [sortBy, setSortBy] = React.useState<number>(ESortBy.newest);
  const typingRef = React.useRef<any>(null);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  const { total, limits } = movieList;

  React.useEffect(() => {
    const query: IQueryList = {
      isPaging: true,
      page: 1,
      limits: 10,
      filter: filter,
      freeText: freeText,
      sortBy: sortBy,
    };
    dispatch(getMovieList(query));
  }, [filter, freeText, sortBy]);

  const handleSearch = (v: string) => {
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }

    typingRef.current = setTimeout(() => {
      setFreeText(v);
    }, 500);
  };

  const renderMovieList = () => {
    if (movieList) {
      const { movies } = movieList;
      return movies.map((movie, index) => {
        return (
          <MovieAdminRow
            key={movie.id}
            lang={lang}
            langs={langs}
            movie={movie}
            index={index}
          />
        );
      });
    }
  };

  return (
    <div className="movie">
      <ContentHeader
        name={langs?.admin.pageTitle.movie || ""}
        right={() => {
          return (
            <Link to="/admin/movie/addMovie" className="button--add">{langs?.button.addMovie}</Link>
          );
        }}
      />

      <Filter
        defaultFilterValue={filter}
        defaultSortValue={sortBy}
        filterOptions={options?.movieFilter}
        onFilter={(value: any) => {
          setFilter(value);
        }}
        onSort={(value: any) => {
          setSortBy(value);
        }}
        onSearch={handleSearch}
      />

      <Card.Wrapper>
        <Table
          headers={[
            { title: langs?.tableHeader.number || "" },
            { title: langs?.tableHeader.image || "" },
            { title: langs?.tableHeader.movieName || "" },
            { title: langs?.tableHeader.movieType || "" },
            { title: langs?.tableHeader.movieCountry || "" },
            { title: langs?.tableHeader.movieStatus || "" },
            { title: langs?.tableHeader.createdAt || "" },
            { title: langs?.tableHeader.updatedAt || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          isNodata={movieList.movies || 0}
          noDataTitle={langs?.noData.data || ""}
          renderNoDataLink={() => {
            return (
              <Link to="/admin/movie/addMovie" className="button--add">
                {langs?.button.addMovie}
              </Link>
            );
          }}
        >
          {(() => {
            if (!dataLoading) {
              return renderMovieList();
            } else {
              return (
                <div style={{ height: "400px" }}>
                  <DataLoading />
                </div>
              );
            }
          })()}
        </Table>
      </Card.Wrapper>

      <Pagination perPage={limits} total={total} isShowContent={true} />
    </div>
  );
};

export default MovieList;
