import React from "react";
import * as Card from "../../../../components/Card";
import moment from "moment";
import Table from "../../../../components/Table";
import TableCol from "../../../../components/Table/TableCol";
import { ILangs } from "../../../../interfaces/lang";
import { ICourse } from "../../../../models/Course";
import { ISchedule } from "../../../../models/CourseSchedule";

interface RegisterScheduleProps {
  langs: ILangs;
  course: ICourse;
}

const RegisterSchedule: React.FunctionComponent<RegisterScheduleProps> = (
  props
) => {
  const { langs, course } = props;

  const renderStudyDates = (i: any) => {
    if (i === 1) {
      return `${langs?.course.detail.register.schedule.mon} + ${langs?.course.detail.register.schedule.wed} + ${langs?.course.detail.register.schedule.fri}`;
    } else if (i === 2) {
      return `${langs?.course.detail.register.schedule.tue} + ${langs?.course.detail.register.schedule.thur} + ${langs?.course.detail.register.schedule.sat}`;
    } else if (i === 3) {
      return `${langs?.course.detail.register.schedule.sat} + ${langs?.course.detail.register.schedule.sun}`;
    }
  };

  return (
    <div className="content__schedule">
      <h3 className="schedule__title">
        {langs?.course.detail.register.title_1}
      </h3>
      <div className="schedule__table">
        <p className="table__title">{langs?.footer.address_1}</p>
        <Card.Wrapper className="table__wrapper">
          <Table
            headers={[
              { title: langs?.tableHeader.studyDates || "" },
              { title: langs?.tableHeader.openingDate || "" },
            ]}
            isNodata={course?.schedules || 0}
            noDataTitle=""
          >
            {(() => {
              if (course?.schedules && course?.schedules?.length > 0) {
                return course?.schedules
                  .filter((i: ISchedule) => i.branch === 1)
                  .map((i: ISchedule) => {
                    return (
                      <tr key={i.id}>
                        <TableCol>{renderStudyDates(i.dateType)}</TableCol>
                        <TableCol>
                          {moment(i.startDate).format("DD/MM/YYYY")}
                        </TableCol>
                      </tr>
                    );
                  });
              }
            })()}
          </Table>
        </Card.Wrapper>
        
        <p className="table__title">{langs?.footer.address_2}</p>
        <Card.Wrapper className="table__wrapper">
          <Table
            headers={[
              { title: langs?.tableHeader.studyDates || "" },
              { title: langs?.tableHeader.openingDate || "" },
            ]}
            isNodata={course?.schedules || 0}
            noDataTitle=""
          >
            {(() => {
              if (course?.schedules && course?.schedules?.length > 0) {
                return course.schedules
                  .filter((i: ISchedule) => i.branch === 2)
                  .map((i: ISchedule) => {
                    return (
                      <tr key={i.id}>
                        <TableCol>{renderStudyDates(i.dateType)}</TableCol>
                        <TableCol>
                          {moment(i.startDate).format("DD/MM/YYYY")}
                        </TableCol>
                      </tr>
                    );
                  });
              }
            })()}
          </Table>
        </Card.Wrapper>
      </div>
      <div className="schedule__fee">
        <p>
          {langs?.course.detail.register.schedule.fee} :{" "}
          <span>{course.price?.toLocaleString()} VND</span>
        </p>
      </div>
    </div>
  );
};

export default RegisterSchedule;
