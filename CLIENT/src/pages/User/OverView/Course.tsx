import React from "react";
import * as Card from "../../../components/Card";
import { ILangs } from "../../../interfaces/lang";
import { Link } from "react-router-dom";
import Table from "../../../components/Table";

interface CourseProps {
  langs: ILangs;
}

const Course: React.FunctionComponent<CourseProps> = (props) => {
  const { langs } = props;

  return (
    <div className="overview__course">
      <h5 className="course__title">{langs?.user.overview.courseTitle}</h5>
      <Card.Wrapper className="course__list">
        <Table
          headers={[
            { title: langs?.tableHeader.courseId || "" },
            { title: langs?.tableHeader.courseName || "" },
            { title: langs?.tableHeader.price || "" },
            { title: langs?.tableHeader.studyDates || "" },
            { title: langs?.tableHeader.openingDate || "" },
            { title: langs?.tableHeader.createdAt || "" },
          ]}
          noDataTitle={langs?.noData.course || ""}
          isNodata={0}
          renderNoDataLink={() => {
            return (
              <Link to="/course" className="button--submit">
                {langs?.button.registerCourse}
              </Link>
            );
          }}
        ></Table>
      </Card.Wrapper>
    </div>
  );
};

export default Course;
