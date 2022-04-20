import React from "react";
import * as customHooks from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../interfaces/route";
import { IQueryList } from "../../../interfaces/query";
import { getCourseDetail } from "../../../redux/actionCreators/CourseCreators";
import DetailIntro from "./DetailIntro";
import DetailQuestion from "./DetailQuestion";
import utils from "../../../utils";
import DetailInfo from "./DetailInfo";

interface CourseDetailProps extends IRouteParams {}

const CourseDetail: React.FunctionComponent<
  RouteComponentProps<CourseDetailProps>
> = (props) => {
  const id = props.match.params.id;

  const { courseDetail } = useSelector(
    (state: ReducerState) => state.CourseReducer
  );
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  customHooks.useLoading();

  React.useEffect(() => {
    const query: IQueryList = {
      courseId: id,
    };
    dispatch(getCourseDetail(query));
  }, []);

  return (
    <div className="course-detail">
      <DetailIntro langs={langs} lang={lang} courseDetail={courseDetail} />
      <DetailQuestion langs={langs} />
      <DetailInfo langs={langs} courseDetail={courseDetail} />
    </div>
  );
};

export default CourseDetail;
