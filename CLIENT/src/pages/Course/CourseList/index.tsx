import React from "react";
import * as customHooks from "../../../hooks";
import * as FormControl from "../../../components/Fields";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../interfaces/route";
import { getCourseByCategory } from "../../../redux/actionCreators/CourseCreators";
import { IQueryList } from "../../../interfaces/query";
import { ELangs } from "../../../interfaces/lang";
import DataLoading from "../../../components/Loading/DataLoading";
import CourseCard from "./CourseCard";
import Pagination from "../../../components/Pagination";
import utils from "../../../utils";

interface CourseListProps extends IRouteParams {}

const CourseList: React.FunctionComponent<
  RouteComponentProps<CourseListProps>
> = (props) => {
  const categoryId = props.match.params.id;

  const { coursesByCategory } = useSelector(
    (state: ReducerState) => state.CourseReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  const { total, limits } = coursesByCategory.course;

  customHooks.useLoading(coursesByCategory.course.courseList);

  React.useEffect(() => {
    if (categoryId) {
      const query: IQueryList = {
        categoryId: categoryId,
        page: 1,
        limits: 10,
      };
      dispatch(getCourseByCategory(query));
    }
  }, []);

  const renderTitle = () => {
    if (lang === ELangs.ENG) {
      return coursesByCategory.categoryName.nameENG;
    } else if (lang === ELangs.VN) {
      return coursesByCategory.categoryName.nameVN;
    } else if (lang === ELangs.CH) {
      return coursesByCategory.categoryName.nameCH;
    }
  };

  const renderCourses = () => {
    if (coursesByCategory) {
      const { course } = coursesByCategory;
      if (course.courseList && course.courseList.length > 0) {
        return course.courseList.map((item) => {
          return <CourseCard key={item.id} course={item} lang={lang} langs={langs} />;
        });
      }
    }
  };

  return (
    <div className="course-list">
      <div className="course-list__title">
        <h3>{langs?.course.list.title} - {renderTitle()}</h3>
      </div>
      <div className="course-list__search">
        <FormControl.Search
          groupClassName="search__input"
          fieldClassName="input__fields"
        />
      </div>
      <div className="course-list__wrapper">
        <div className="wrapper__inner">
          <DataLoading />
          {renderCourses()}
        </div>
      </div>
      <Pagination
        perPage={limits}
        total={total}
        isShowContent={true}
        className="course-list__pagination"
      />
    </div>
  );
};

export default CourseList;
