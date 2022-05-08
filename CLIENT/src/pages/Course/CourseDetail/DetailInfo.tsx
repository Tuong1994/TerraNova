import React from "react";
import { ILangs } from "../../../interfaces/lang";
import { ICourse } from "../../../models/Course";

interface DetailInfoProps {
  langs: ILangs;
  courseDetail: ICourse;
}

const DetailInfo: React.FunctionComponent<DetailInfoProps> = (props) => {
  const { langs, courseDetail } = props;

  const [studyWeeks, setStudyWeeks] = React.useState<number>(0);

  React.useEffect(() => {
    if (courseDetail && courseDetail.trainingTime) {
      const weeks = (courseDetail.trainingTime * 4) / 1;
      setStudyWeeks(weeks);
    }
  }, [courseDetail]);

  return (
    <div className="course-detail__info">
      <div className="info__inner">
        <div className="inner__group">
          <div className="group__content">
            <i className="fa-solid fa-calendar-days"></i>
            <span>
              {courseDetail.trainingTime} {langs?.time.months} - {studyWeeks}{" "}
              {langs?.time.weeks}
            </span>
          </div>
          <div className="group__content">
            <i className="fa-solid fa-book-open"></i>
            <span>
              {courseDetail?.lessons?.length} {langs?.course.list.lessonDesc}
            </span>
          </div>
        </div>

        <div className="inner__group">
          <div className="group__content">
            <i className="fa-solid fa-wifi"></i>
            <span>{langs?.course.list.online}</span>
          </div>
          <div className="group__content">
            <i className="fa-solid fa-dollar-sign"></i>
            <span>{langs?.course.list.job}</span>
          </div>
        </div>

        <div className="inner__group">
          <div className="group__content">
            <i className="fa-solid fa-graduation-cap"></i>
            <span>{langs?.course.list.graduate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
