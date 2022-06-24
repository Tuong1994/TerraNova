import React from "react";
import * as Card from "../../../../components/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { ESortBy, IQueryList } from "../../../../interfaces/query";
import {
  getMovieScheduleList,
  removeMovieSchedule,
} from "../../../../redux/actionCreators/MovieScheduleCreators";
import ContentHeader from "../../../../components/ContentHeader";
import Table from "../../../../components/Table";
import Filter from "../../../../components/Filter";
import ShowTimeAdminRow from "../../../../components/TableRow/ShowTimeAdminRow";
import DataLoading from "../../../../components/Loading/DataLoading";
import Pagination from "../../../../components/Pagination";
import utils from "../../../../utils";
import RemoveModal from "../../../../components/Remove";

const ShowTimeList: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );
  const { dataLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );
  const { movieScheduleList } = useSelector(
    (state: ReducerState) => state.MovieScheduleReducer
  );

  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [scheduleId, setScheduleId] = React.useState<string>("");
  const [freeText, setFreeText] = React.useState<string>("");
  const [sortBy, setSortBy] = React.useState<number>(ESortBy.newest);
  const typingRef = React.useRef<any>(null);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  const { total, limits, schedules } = movieScheduleList;

  React.useEffect(() => {
    const query: IQueryList = {
      page: page,
      limits: 10,
      freeText: freeText,
      sortBy: sortBy,
    };

    dispatch(getMovieScheduleList(query));
  }, [page, freeText, sortBy]);

  const handleSearch = (v: string) => {
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }
    typingRef.current = setTimeout(() => {
      setFreeText(v);
    }, 500);
  };

  const handleRemove = () => {
    const query: IQueryList = {
      movieScheduleId: scheduleId,
    };
    dispatch(
      removeMovieSchedule(
        query,
        langs?.toastMessages.success.remove,
        langs?.toastMessages.error.remove
      )
    );
    setIsShow(false)
  };

  const renderScheduleList = () => {
    if (schedules && schedules.length > 0) {
      return schedules.map((schedule, index) => {
        return (
          <ShowTimeAdminRow
            key={schedule.id}
            lang={lang}
            index={index}
            schedule={schedule}
            setScheduleId={setScheduleId}
            setIsShow={setIsShow}
          />
        );
      });
    }
  };

  return (
    <div className="showTime">
      <ContentHeader
        name={langs?.admin.pageTitle.showTime || ""}
        right={() => {
          return (
            <Link to="/admin/showtime/addShowtime" className="button--add">
              {langs?.button.addShowTime}
            </Link>
          );
        }}
      />
      <Filter
        defaultSortValue={sortBy}
        onSort={(value) => {
          setSortBy(value);
        }}
        onSearch={handleSearch}
      />
      <Card.Wrapper>
        <Table
          headers={[
            { title: langs?.tableHeader.number || "" },
            { title: langs?.tableHeader.showTime || "" },
            { title: langs?.tableHeader.movie || "" },
            { title: langs?.tableHeader.cinema || "" },
            { title: langs?.tableHeader.createdAt || "" },
            { title: langs?.tableHeader.updatedAt || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          isNodata={schedules || 0}
          noDataTitle={langs?.noData.data || ""}
          renderNoDataLink={() => {
            return (
              <Link to="/admin/showtime/addShowtime" className="button--add">
                {langs?.button.addShowTime}
              </Link>
            );
          }}
        >
          {(() => {
            if (!dataLoading) {
              return renderScheduleList();
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

      <Pagination perPage={limits} total={total} isShowContent />
      <RemoveModal
        show={isShow}
        content={() => {
          return (
            <div>
              <p>{langs?.removeModal.showTimeRemove}</p>
            </div>
          );
        }}
        onHide={() => setIsShow(false)}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default ShowTimeList;
