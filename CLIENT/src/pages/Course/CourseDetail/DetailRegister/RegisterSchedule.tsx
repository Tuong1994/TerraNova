import React from "react";
import * as Card from "../../../../components/Card";
import moment from "moment";
import Table from "../../../../components/Table";
import TableCol from "../../../../components/Table/TableCol";
import { ILangs } from "../../../../interfaces/lang";
import { ICourse } from "../../../../models/Course";

interface RegisterScheduleProps {
  langs: ILangs;
  course: ICourse;
}

const RegisterSchedule: React.FunctionComponent<RegisterScheduleProps> = (
  props
) => {
  const { langs, course } = props;

  const schedule = [
    {
      id: 1,
      startDate: new Date(),
      dateType: 1,
      branch: 1,
    },
    {
      id: 2,
      startDate: new Date(),
      dateType: 2,
      branch: 1,
    },
    {
      id: 3,
      startDate: new Date(),
      dateType: 3,
      branch: 1,
    },
    {
      id: 4,
      startDate: new Date(),
      dateType: 1,
      branch: 2,
    },
    {
      id: 5,
      startDate: new Date(),
      dateType: 2,
      branch: 2,
    },
    {
      id: 6,
      startDate: new Date(),
      dateType: 3,
      branch: 2,
    },
  ];

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
            isNodata={schedule}
            noDataTitle=""
          >
            {(() => {
              if (schedule && schedule.length > 0) {
                return schedule
                  .filter((i) => i.branch === 1)
                  .map((i) => {
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
            isNodata={schedule}
            noDataTitle=""
          >
            {(() => {
              if (schedule && schedule.length > 0) {
                return schedule
                  .filter((i) => i.branch === 2)
                  .map((i) => {
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
