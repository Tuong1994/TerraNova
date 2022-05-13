import React from "react";
import * as Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { IQueryList } from "../../interfaces/query";
import { getUserDetail } from "../../redux/actionCreators/UserCreators";
import { IComment } from "../../models/Comment";
import {
  createComment,
  removeComment,
  updateComment,
} from "../../redux/actionCreators/CommentCreators";
import { ACCOUNT } from "../../configs/setting";
import { history } from "../../App";
import CommentItem from "./Item";
import CommentControl from "./Control";
import utils from "../../utils";

interface CommentProps {
  comments: IComment[];
  productId?: string;
  courseId?: string;
}

const Comment: React.FunctionComponent<CommentProps> = (props) => {
  const { comments, productId, courseId } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { user } = useSelector((state: ReducerState) => state.UserReducer);
  const { dataLoading } = useSelector(
    (state: ReducerState) => state.LoadingReducer
  );

  const [commentList, setCommentList] = React.useState<IComment[]>([]);
  const [rootComment, setRootComment] = React.useState<IComment[]>([]);
  const [activeComment, setActiveComment] = React.useState<any>(null);

  const dispatch = useDispatch();

  const langs = utils.changeLang(lang);

  React.useEffect(() => {
    if (user) {
      const query: IQueryList = {
        userId: user.id || user.userId,
      };
      dispatch(getUserDetail(query));
    }
  }, []);

  React.useEffect(() => {
    setCommentList(comments);
  }, [comments]);

  // Get root commnet list
  React.useEffect(() => {
    setRootComment(commentList.filter((i) => i.parentId === ""));
  }, [commentList]);

  // Get replies comment list
  const getReplies = (id?: string) => {
    return commentList
      .filter((i) => i.parentId === id)
      .sort(
        (a: IComment, b: IComment) =>
          new Date(a.createdAt || "").getTime() -
          new Date(b.createdAt || "").getTime()
      );
  };

  // Add Comment
  const handleAdd = (comment: string, parentId?: string) => {
    const userName = (user?.firstName || "") + " " + (user?.lastName || "");
    const query: IQueryList = {
      productId: productId,
    };
    const newComment = {
      body: comment,
      userName: userName,
      userId: user?.id || user?.userId,
      parentId: parentId || "",
      productId: productId || "",
      courseId: courseId || "",
    };
    if(!localStorage.getItem(ACCOUNT)) {
      history.push("/signIn");
      return
    }
    dispatch(createComment(newComment, query, setActiveComment));
  };

  // Update Comment
  const handleUpdate = (editComment?: string, comment?: IComment) => {
    const query: IQueryList = {
      commentId: comment?.id,
      productId: productId,
    };
    const commentUpdate = {
      ...comment,
      body: editComment,
    };
    dispatch(updateComment(query, commentUpdate, setActiveComment));
  };

  // Remove comment
  const handleRemove = (commentId: string) => {
    const query: IQueryList = {
      productId: productId,
      commentId: commentId,
    };
    dispatch(removeComment(query));
  };

  return (
    <div className="comment">
      <h3 className="comment__title">{langs?.comment.title}</h3>

      <Card.Wrapper className="comment__control">
        <CommentControl
          langs={langs}
          user={user}
          dataLoading={dataLoading}
          handleAdd={handleAdd}
        />
      </Card.Wrapper>

      {commentList.length > 0 && (
        <Card.Wrapper className="comment__nested">
          {rootComment.map((comment: any) => {
            return (
              <CommentItem
                key={comment.id}
                langs={langs}
                comment={comment}
                user={user}
                dataLoading={dataLoading}
                activeComment={activeComment}
                setActiveComment={setActiveComment}
                replies={getReplies}
                onAdd={handleAdd}
                onUpdate={handleUpdate}
                onRemove={handleRemove}
              />
            );
          })}
        </Card.Wrapper>
      )}
    </div>
  );
};

export default Comment;
