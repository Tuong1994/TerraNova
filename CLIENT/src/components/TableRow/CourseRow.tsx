import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { ELangs, ILangs } from "../../interfaces/lang";
import { ICourseOrder } from "../../models/CourseOrder";
import TableCol from "../Table/TableCol";

interface CourseRowProps {
  lang: string;
  langs: ILangs;
  courseOrder: ICourseOrder;
  removeCourseOrder(i: string): void;
}

const CourseRow: React.FunctionComponent<CourseRowProps> = (props) => {
  const { lang, langs, courseOrder, removeCourseOrder } = props;

  const [courseDetail, setCourseDetail] = React.useState<any>({});
  const [register, setRegister] = React.useState<any>({});

  React.useEffect(() => {
    if (courseOrder) {
      setCourseDetail(courseOrder.course);
      setRegister(courseOrder.register);
    }
  }, [courseOrder]);

  const renderCourseName = () => {
    if (lang === ELangs.ENG) {
      return courseDetail.nameENG;
    } else if (lang === ELangs.VN) {
      return courseDetail.nameVN;
    } else if (lang === ELangs.CH) {
      return courseDetail.nameCH;
    }
  };

  const renderSchedule = (i: any) => {
    if (i === 1) {
      return `${langs?.course.detail.register.schedule.mon} + ${langs?.course.detail.register.schedule.wed} + ${langs?.course.detail.register.schedule.fri}`;
    } else if (i === 2) {
      return `${langs?.course.detail.register.schedule.tue} + ${langs?.course.detail.register.schedule.thur} + ${langs?.course.detail.register.schedule.sat}`;
    } else if (i === 3) {
      return `${langs?.course.detail.register.schedule.sat} + ${langs?.course.detail.register.schedule.sun}`;
    }
  };

  return (
    <tr className="course-row">
      <TableCol>{courseOrder?.courseId}</TableCol>
      <TableCol>{renderCourseName()}</TableCol>
      <TableCol>{courseDetail?.price?.toLocaleString()} VND</TableCol>
      <TableCol>{renderSchedule(Number(register.dateType))}</TableCol>
      <TableCol>{register.branch}</TableCol>
      <TableCol>{moment(new Date()).format("DD/MM/YYYY")}</TableCol>
      <TableCol>{moment(courseOrder?.createdAt).format("DD/MM/YYYY")}</TableCol>
      <TableCol>
        <Link to="/" className="button--edit">
          <i className="far fa-edit"></i>
        </Link>
        <div className="button--delete" onClick={() => removeCourseOrder(courseOrder?.courseOrderId || "")}>
          <i className="fas fa-trash-alt"></i>
        </div>
      </TableCol>
    </tr>
  );
};

export default CourseRow;
