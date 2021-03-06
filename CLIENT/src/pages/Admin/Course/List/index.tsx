import React from "react";
import * as Card from "../../../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../../redux/store";
import { Link } from "react-router-dom";
import { ESortBy, IQueryList } from "../../../../interfaces/query";
import {
  getCourseList,
  removeCourse,
} from "../../../../redux/actionCreators/CourseCreators";
import { ICourse } from "../../../../models/Course";
import CourseAdminRow from "../../../../components/TableRow/CourseAdminRow";
import DataLoading from "../../../../components/Loading/DataLoading";
import Filter from "../../../../components/Filter";
import Pagination from "../../../../components/Pagination";
import RemoveModal from "../../../../components/Remove";
import ContentHeader from "../../../../components/ContentHeader";
import Table from "../../../../components/Table";
import utils from "../../../../utils";

const CourseList: React.FunctionComponent<{}> = (props) => {
  const { page } = useSelector(
    (state: ReducerState) => state.PaginationReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { courses } = useSelector((state: ReducerState) => state.CourseReducer);
  const { dataLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const dispatch = useDispatch();

  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [course, setCourse] = React.useState<ICourse>({});
  const [filter, setFilter] = React.useState<string>("all");
  const [sortBy, setSortBy] = React.useState<number>(ESortBy.newest);
  const [freeText, setFreeText] = React.useState<string>("");
  const typingRef = React.useRef<any>(null);

  const langs = utils.changeLang(lang);
  const options = utils.getOptionByLang(lang);

  const { total, limits } = courses;

  React.useEffect(() => {
    const query: IQueryList = {
      page: page,
      limits: 10,
      filter: filter,
      sortBy: sortBy,
      freeText: freeText,
    };
    dispatch(getCourseList(query));
  }, [page, filter, sortBy, freeText]);

  const handleSearch = (v: string) => {
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }

    typingRef.current = setTimeout(() => {
      setFreeText(v);
    }, 500);
  };

  const handleRemove = () => {
    const lessonIds = course?.lessons?.map((i) => {
      return i.id;
    });
    const scheduleIds = course?.schedules?.map((i) => {
      return i.id;
    });
    const data = {
      lessonIds,
      scheduleIds,
    };
    const query: IQueryList = {
      courseId: course?.id || course?.courseId,
    };

    dispatch(
      removeCourse(
        query,
        langs?.toastMessages.success.remove,
        langs?.toastMessages.error.remove,
        data
      )
    );
    setIsShow(false);
  };

  const renderCourseList = () => {
    if (courses) {
      const { courseList } = courses;
      return courseList?.map((course, index) => {
        return (
          <CourseAdminRow
            key={course.id || course.courseId}
            lang={lang}
            index={index}
            course={course}
            setIsShow={setIsShow}
            setCourse={setCourse}
          />
        );
      });
    }
  };

  return (
    <div className="course">
      <ContentHeader
        name={langs?.admin.pageTitle.course || ""}
        right={() => {
          return (
            <Link to="/admin/course/addCourse" className="button--add">
              {langs?.button.addCourse}
            </Link>
          );
        }}
      />

      <Filter
        defaultFilterValue={filter}
        defaultSortValue={sortBy}
        filterOptions={options?.courseFilter}
        isFilter
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
            { title: langs?.tableHeader.category || "" },
            { title: langs?.tableHeader.courseId || "" },
            { title: langs?.tableHeader.courseName || "" },
            { title: langs?.tableHeader.price || "" },
            { title: langs?.tableHeader.createdAt || "" },
            { title: langs?.tableHeader.updatedAt || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          isNodata={courses?.courseList || 0}
          noDataTitle={langs?.noData.data || ""}
          renderNoDataLink={() => (
            <Link to="/admin/course/addCourse" className="button--add">
              {langs?.button.addCourse}
            </Link>
          )}
        >
          {(() => {
            if (!dataLoading) {
              return renderCourseList();
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
      <RemoveModal
        show={isShow}
        content={() => {
          return (
            <div>
              <p>{langs?.removeModal.courseRemove}</p>
            </div>
          );
        }}
        onHide={() => setIsShow(false)}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default CourseList;
