import React from "react";
import * as Card from "../../../components/Card";
import { useDispatch } from "react-redux";
import { ILangs } from "../../../interfaces/lang";
import { Link } from "react-router-dom";
import { IUser } from "../../../models/User";
import { IQueryList } from "../../../interfaces/query";
import Table from "../../../components/Table";
import CourseRow from "../../../components/TableRow/CourseRow";
import { removeCourseOrder } from "../../../redux/actionCreators/CourseOrderCreators";

interface CourseProps {
  lang: string;
  langs: ILangs;
  user: IUser | null;
}

const Course: React.FunctionComponent<CourseProps> = (props) => {
  const { lang, langs, user } = props;

  const dispatch = useDispatch();

  const _removeCourseOrder = (id: string) => {
    const query: IQueryList = {
      courseOrderId: id,
      userId: user?.id,
    };
    dispatch(
      removeCourseOrder(
        query,
        langs?.toastMessages.success.remove,
        langs?.toastMessages.error.remove
      )
    );
  };

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
            { title: langs?.tableHeader.branch || "" },
            { title: langs?.tableHeader.openingDate || "" },
            { title: langs?.tableHeader.createdAt || "" },
            { title: langs?.tableHeader.features || "" },
          ]}
          isNodata={user?.courses || 0}
          noDataTitle={langs?.noData.course || ""}
          renderNoDataLink={() => {
            return (
              <Link to="/course" className="button--submit">
                {langs?.button.registerCourse}
              </Link>
            );
          }}
        >
          {(() => {
            if (user?.courses && user?.courses.length > 0) {
              return user?.courses.map((course) => {
                return (
                  <CourseRow
                    key={course.courseId}
                    lang={lang}
                    langs={langs}
                    courseOrder={course}
                    removeCourseOrder={_removeCourseOrder}
                  />
                );
              });
            }
          })()}
        </Table>
      </Card.Wrapper>
    </div>
  );
};

export default Course;
