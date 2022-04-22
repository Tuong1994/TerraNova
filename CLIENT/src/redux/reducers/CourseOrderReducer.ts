import { CourseOrderAction } from "../actions/CourseOrderAction";

interface IStateDefault {}

const stateDefault: IStateDefault = {};

export const CourseOrderReducer = (
  state = stateDefault,
  action: CourseOrderAction
) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
