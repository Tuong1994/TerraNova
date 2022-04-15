import React from "react";
import * as FormControl from "../../../components/Fields";
import DataLoading from "../../../components/Loading/DataLoading";

interface CourseListProps {}

const CourseList: React.FunctionComponent<CourseListProps> = (props) => {
  return (
    <div className="course-list">
      <div className="course-list__title">
        <h3>Course</h3>
      </div>
      <div className="course-list__search">
        <FormControl.Search groupClassName="search__input" fieldClassName="input__fields" />
      </div>
      <div className="course-list__wrapper">
        <div className="wrapper__inner">
          <DataLoading />
        </div>
      </div>
    </div>
  );
};

export default CourseList;
