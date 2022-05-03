import React from "react";
import { ELangs } from "../../interfaces/lang";
import { ICourse } from "../../models/Course";
import { Link } from "react-router-dom";
import TableCol from "../Table/TableCol";

interface CourseAdminRowProps {
  lang: string;
  index: number;
  course: ICourse;
}

const CourseAdminRow: React.FunctionComponent<CourseAdminRowProps> = (
  props
) => {
  const { lang, index, course } = props;

  const renderCourseName = () => {
    switch (lang) {
      case ELangs.ENG: {
        return course.nameENG;
      }
      case ELangs.VN: {
        return course.nameVN;
      }
      case ELangs.CH: {
        return course.nameCH;
      }
    }
  };

  const renderCategoryName = () => {
    switch (lang) {
      case ELangs.ENG: {
        return course?.category?.nameENG;
      }
      case ELangs.VN: {
        return course?.category?.nameVN;
      }
      case ELangs.CH: {
        return course?.category?.nameCH;
      }
    }
  };

  return (
    <tr className="course-admin-row">
      <TableCol>{index + 1}</TableCol>
      <TableCol>
        <div className="image__col">
          <img
            className="col__img"
            src={(() => {
              if (course.image) {
                return course.image;
              } else {
                return "../img/product_img.jpg";
              }
            })()}
            alt="course"
          />
        </div>
      </TableCol>
      <TableCol>
        <p>{renderCategoryName()}</p>
      </TableCol>
      <TableCol>
        <p>{course.id || course.courseId}</p>
      </TableCol>
      <TableCol>
        <p>{renderCourseName()}</p>
      </TableCol>
      <TableCol>
        <p>{course.price?.toLocaleString()} VND</p>
      </TableCol>
      <TableCol>
        <Link to={`/admin/course`} className="button--edit">
          <i className="far fa-edit"></i>
        </Link>
        <div className="button--delete">
          <i className="fas fa-trash-alt"></i>
        </div>
      </TableCol>
    </tr>
  );
};

export default CourseAdminRow;
