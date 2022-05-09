import React from "react";
import * as Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { IQueryList } from "../../interfaces/query";
import { getUserDetail } from "../../redux/actionCreators/UserCreators";
import { IComment } from "../../models/Comment";
import CommentItem from "./Item";
import CommentControl from "./Control";
import utils from "../../utils";

interface CommentProps {
  comments: IComment[];
}

const Comment: React.FunctionComponent<CommentProps> = (props) => {
  const { comments } = props;

  const { lang } = useSelector((state: ReducerState) => state.LangReducer);
  const { user } = useSelector((state: ReducerState) => state.UserReducer);

  const [commentList, setCommentList] = React.useState<IComment[]>([]);
  const [rootComment, setRootComment] = React.useState<IComment[]>([]);

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

  React.useEffect(() => {
    setRootComment(commentList.filter((i) => i.parentId === null));
  }, [commentList]);

  const getReplies = (id: string) => {
    return commentList
      .filter((i) => i.parentId === id)
      .sort(
        (a: IComment, b: IComment) =>
          new Date(a.createdAt || "").getTime() -
          new Date(b.createdAt || "").getTime()
      );
  };

  const handleAdd = (comment: string, parentId?: string) => {

  }

  return (
    <div className="comment">
      <h3 className="comment__title">{langs?.comment.title}</h3>

      <Card.Wrapper className="comment__control">
        <CommentControl langs={langs} user={user} handleAdd={handleAdd} />
      </Card.Wrapper>

      {commentList.length > 0 && (
        <Card.Wrapper className="comment__nested">
          {rootComment.map((comment: any) => {
            return (
              <CommentItem
                key={comment.id}
                langs={langs}
                comment={comment}
                replies={getReplies}
              />
            );
          })}
        </Card.Wrapper>
      )}
    </div>
  );
};

export default Comment;
