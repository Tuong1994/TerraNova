import React from "react";
import { ILangs } from "../../../interfaces/lang";
import { ICourse } from "../../../models/Course";

interface DetailInfoProps {
  langs: ILangs;
  courseDetail: ICourse;
}

const DetailInfo: React.FunctionComponent<DetailInfoProps> = (props) => {
  const { langs, courseDetail } = props;

  return <div className="course-detail__info">

  </div>;
};

export default DetailInfo;
