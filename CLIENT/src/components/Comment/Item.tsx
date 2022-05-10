import React from "react";
import * as FormControl from "../../components/Fields";
import { ILangs } from "../../interfaces/lang";
import { IComment } from "../../models/Comment";
import { IUser } from "../../models/User";
import Button from "../../components/Button";
import ButtonLoading from "../Loading/ButtonLoading";
import moment from "moment";

interface CommentItemProps {
  langs: ILangs;
  user: IUser | null;
  comment: IComment;
  dataLoading: boolean;
  activeComment: any;
  parentId?: any;
  setActiveComment: React.Dispatch<React.SetStateAction<any>>;
  replies?: (v?: string) => IComment[];
  onAdd: (comment: string, parentId?: string) => void;
  onUpdate: (
    editComment?: string,
    comment?: IComment,
    parentId?: string
  ) => void;
  onRemove: (id: string) => void;
}

const CommentItem: React.FunctionComponent<CommentItemProps> = (props) => {
  const {
    langs,
    user,
    comment,
    dataLoading,
    activeComment,
    parentId = null,
    setActiveComment,
    replies,
    onAdd,
    onUpdate,
    onRemove,
  } = props;

  const canReply = Boolean(user?.id || user?.userId) && !comment.parentId;
  const canEdit = comment?.userId === user?.id;
  const canDelete = comment?.userId === user?.id;
  const isReply =
    activeComment &&
    activeComment.type === "reply" &&
    activeComment.id === comment.id;
  const isEdit =
    activeComment &&
    activeComment.type === "edit" &&
    activeComment.id === comment.id;
  const replyId = parentId ? parentId : comment.id;

  const [editComment, setEditComment] = React.useState<string>();
  const [replyComment, setReplyComment] = React.useState<string>("");
  const [replyList, setReplyList] = React.useState<IComment[]>([]);

  React.useEffect(() => {
    if (replies) {
      const list = replies(comment?.id);
      setReplyList(list);
    }
  }, [replies]);

  React.useEffect(() => {
    if (comment) {
      setEditComment(comment?.body);
    }
  }, [comment]);

  return (
    <div className="nested__item">
      <div className="item__inner">
        <div className="inner__avatar">
          <img className="avatar__img" src="/img/avatar.png" alt="avatar" />
        </div>

        <div className="inner__content">
          <div className="content__name">
            <span>{comment.userName}</span>
            <span>{moment(comment.createdAt).format("DD/MM/YYYY")}</span>
          </div>

          {!isEdit && (
            <div className="content__area">
              <p>{comment.body}</p>
            </div>
          )}

          {/* Edit control */}
          {isEdit && (
            <div className="content__control">
              <FormControl.InputCustom
                value={editComment}
                placeholder={langs?.comment.placeholder}
                onChange={(e) => {
                  const value = e.target.value;
                  setEditComment(value);
                }}
              />
              <div className="control__button">
                <Button
                  className={`button--submit ${
                    dataLoading ? "button--disabled" : ""
                  }`}
                  onClick={() => {
                    onUpdate(editComment, comment);
                  }}
                >
                  <ButtonLoading />
                  <span>{langs?.button.update}</span>
                </Button>
                <Button
                  className="button--submit"
                  onClick={() => {
                    setActiveComment(null);
                  }}
                >
                  {langs?.button.cancel}
                </Button>
              </div>
            </div>
          )}

          {/* Comment features */}
          <div className="content__features">
            {canReply && (
              <div
                className="features__button"
                onClick={() => {
                  setActiveComment({ id: comment.id, type: "reply" });
                }}
              >
                {langs?.button.reply}
              </div>
            )}

            {canEdit && (
              <div
                className="features__button"
                onClick={() => {
                  setActiveComment({ id: comment.id, type: "edit" });
                }}
              >
                {langs?.button.edit}
              </div>
            )}

            {canDelete && (
              <div
                className={`features__button ${
                  dataLoading ? "features__button--disabled" : ""
                }`}
                onClick={() => onRemove(comment.id || comment.commentId || "")}
              >
                <ButtonLoading className="button__spinner" />
                <span>{langs?.button.delete}</span>
              </div>
            )}
          </div>

          {/* Reply control */}
          {isReply && (
            <div className="content__control">
              <FormControl.InputCustom
                value={replyComment}
                placeholder={langs?.comment.placeholder}
                onChange={(e) => {
                  const value = e.target.value;
                  setReplyComment(value);
                }}
              />
              <div className="control__button">
                <Button
                  className={`button--submit ${
                    dataLoading ? "button--disabled" : ""
                  }`}
                  onClick={() => {
                    onAdd(replyComment, replyId);
                  }}
                >
                  <ButtonLoading />
                  <span>{langs?.button.post}</span>
                </Button>
                <Button
                  className="button--submit"
                  onClick={() => {
                    setActiveComment(null);
                  }}
                >
                  {langs?.button.cancel}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reply list */}
      {replyList.length > 0 && (
        <div className="item__nested">
          {replyList.map((reply) => (
            <CommentItem
              key={reply.id}
              langs={langs}
              user={user}
              comment={reply}
              dataLoading={dataLoading}
              activeComment={activeComment}
              parentId={comment.id}
              setActiveComment={setActiveComment}
              onAdd={onAdd}
              onUpdate={onUpdate}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
