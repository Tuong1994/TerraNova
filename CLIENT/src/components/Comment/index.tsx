import React from "react";
import * as Card from "../../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { ReducerState } from "../../redux/store";
import { IQueryList } from "../../interfaces/query";
import { getUserDetail } from "../../redux/actionCreators/UserCreators";
import CommentItem from "./Item";
import CommentControl from "./Control";
import utils from "../../utils";

interface CommentProps {}

export interface IComment {
  id?: any;
  body?: string;
  userName?: string;
  userId?: string;
  parentId?: any;
  createdAt: Date | string;
}

const Comment: React.FunctionComponent<CommentProps> = (props) => {
  const commentsArr = [
    {
      id: 1,
      body: "First comment",
      userName: "Jack Ryan",
      userId: "1",
      parentId: null,
      createdAt: new Date(),
    },
    {
      id: 2,
      body: "Second comment",
      userName: "John Ryan",
      userId: "2",
      parentId: null,
      createdAt: new Date(),
    },
    {
      id: 3,
      body: "First comment first child",
      userName: "Jack Ryan",
      userId: "1",
      parentId: 1,
      createdAt: new Date(),
    },
    {
      id: 4,
      body: "Second comment first child",
      userName: "John Ryan",
      userId: "2",
      parentId: 2,
      createdAt: new Date(),
    },
  ];

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
    setCommentList(commentsArr);
  }, []);

  React.useEffect(() => {
    setRootComment(commentList.filter((i) => i.parentId === null))
  }, [commentList])

  const getReplies = (id: string) => {
    return commentList
      .filter((i) => i.parentId === id)
      .sort(
        (a: IComment, b: IComment) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  };

  const handleAdd = (comment: string, parentId?: string) => {
    const newComment = {
      id: Math.random().toString(36).substr(2, 9),
      body: comment,
      userName: "John Ryan",
      userId: "2",
      parentId: parentId || null,
      createdAt: new Date(),
    };
    setCommentList([newComment, ...commentList])
  };

  return (
    <div className="comment">
      <h3 className="comment__title">{langs?.comment.title}</h3>

      <Card.Wrapper className="comment__control">
        <CommentControl langs={langs} user={user} handleAdd={handleAdd} />
      </Card.Wrapper>

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
    </div>
  );
};

export default Comment;
