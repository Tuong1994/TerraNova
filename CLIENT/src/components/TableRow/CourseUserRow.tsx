import React from "react";
import moment from "moment";
import { ELangs, ILangs } from "../../interfaces/lang";
import { ICourseOrder } from "../../models/CourseOrder";
import TableCol from "../Table/TableCol";

interface CourseUserRowProps {
  lang: string;
  langs: ILangs;
  courseOrder: ICourseOrder;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
  setCourseOrderId: React.Dispatch<React.SetStateAction<string>>;
}

const CourseUserRow: React.FunctionComponent<CourseUserRowProps> = (props) => {
  const { lang, langs, courseOrder, setCourseOrderId, setIsShow } = props;

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
      <TableCol>
        <p>{courseOrder?.courseId}</p>
      </TableCol>
      <TableCol>
        <p>{renderCourseName()}</p>
      </TableCol>
      <TableCol>
        <p>{courseDetail?.price?.toLocaleString()} VND</p>
      </TableCol>
      <TableCol>
        <p>{renderSchedule(Number(register.dateType))}</p>
      </TableCol>
      <TableCol>
        <p>{register.branch}</p>
      </TableCol>
      <TableCol>
        <p>{moment(new Date()).format("DD/MM/YYYY")}</p>
      </TableCol>
      <TableCol>
        <p>{moment(courseOrder?.createdAt).format("DD/MM/YYYY")}</p>
      </TableCol>
      <TableCol>
        <div
          className="button--delete"
          onClick={() => {
            setCourseOrderId(courseOrder?.id || courseOrder?.courseOrderId || "");
            setIsShow(true);
          }}
        >
          <i className="fas fa-trash-alt"></i>
        </div>
      </TableCol>
    </tr>
  );
};

export default CourseUserRow;
