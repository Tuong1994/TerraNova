import { CommentAction } from "./../actions/CommentAction";
import { IComment } from "../../models/Comment";
import { ECommentActionTypes } from "../actionTypes/CommentActionTypes";

interface IStateDefault {
  commentList: IComment[];
}

const stateDefault: IStateDefault = {
  commentList: [],
};

export const CommentReducer = (state = stateDefault, action: CommentAction) => {
  switch (action.type) {
    case ECommentActionTypes.GET_COMMENT_LIST: {
      let newState = { ...state };
      newState.commentList = action.payload;
      state = newState;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
