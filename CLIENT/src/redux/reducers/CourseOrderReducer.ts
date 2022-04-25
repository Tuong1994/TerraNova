import { ICourseOrder } from "../../models/CourseOrder";
import { CourseOrderAction } from "../actions/CourseOrderAction";
import { ECourseOrderActionTypes } from "../actionTypes/CourseOrderActionTypes";

interface IStateDefault {
  courseOrder: ICourseOrder;
}

const stateDefault: IStateDefault = {
  courseOrder: {},
};

export const CourseOrderReducer = (
  state = stateDefault,
  action: CourseOrderAction
) => {
  switch (action.type) {
    case ECourseOrderActionTypes.CREATE_COURSE_ORDER: {
      let newState = { ...state };
      newState.courseOrder = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
