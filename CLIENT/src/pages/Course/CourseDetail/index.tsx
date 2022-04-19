import React from "react";
import * as customHooks from "../../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import { RouteComponentProps } from "react-router-dom";
import { IRouteParams } from "../../../interfaces/route";
import { IQueryList } from "../../../interfaces/query";
import { getCourseDetail } from "../../../redux/actionCreators/CourseCreators";

interface CourseDetailProps extends IRouteParams {}

const CourseDetail: React.FunctionComponent<
  RouteComponentProps<CourseDetailProps>
> = (props) => {
  const id = props.match.params.id;

  const { courseDetail } = useSelector(
    (state: ReducerState) => state.CourseReducer
  );

  const dispatch = useDispatch();

  customHooks.useLoading();

  React.useEffect(() => {
    const query: IQueryList = {
      courseId: id,
    };
    dispatch(getCourseDetail(query));
  }, []);

  console.log(courseDetail)

  return <div></div>;
};

export default CourseDetail;
