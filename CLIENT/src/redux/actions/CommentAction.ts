import { ECommentActionTypes } from './../actionTypes/CommentActionTypes';

interface GET_COMMENT_LIST {
    type: ECommentActionTypes.GET_COMMENT_LIST,
    payload: any
}

export type CommentAction = GET_COMMENT_LIST