import React from "react";
import * as FormControl from "../../components/Fields";
import { ILangs } from "../../interfaces/lang";
import { IComment } from ".";
import Button from "../../components/Button";
import moment from "moment";

interface CommentItemProps {
  langs: ILangs;
  comment: any;
  replies?: (v: string) => IComment[];
}

const CommentItem: React.FunctionComponent<CommentItemProps> = (props) => {
  const { langs, comment, replies } = props;

  const [isReply, setIsReply] = React.useState<boolean>(false);
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [replyList, setReplyList] = React.useState<IComment[]>([]);

  React.useEffect(() => {
    if (replies) {
      const list = replies(comment.id);
      setReplyList(list);
    }
  }, [replies]);

  console.log(replyList)

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

          {!isEdit ? (
            <div className="content__area">
              <p>{comment.body}</p>
            </div>
          ) : null}

          {isEdit && (
            <div className="content__control">
              <FormControl.InputCustom
                placeholder={langs?.comment.placeholder}
              />
              <div className="control__button">
                <Button className="button--submit">
                  {langs?.button.update}
                </Button>
                <Button
                  className="button--submit"
                  onClick={() => setIsEdit(false)}
                >
                  {langs?.button.cancel}
                </Button>
              </div>
            </div>
          )}

          <div className="content__features">
            <div className="features__button" onClick={() => setIsReply(true)}>
              {langs?.button.reply}
            </div>
            <div className="features__button" onClick={() => setIsEdit(true)}>
              {langs?.button.edit}
            </div>
            <div className="features__button">{langs?.button.delete}</div>
          </div>

          {isReply && (
            <div className="content__control">
              <FormControl.InputCustom
                placeholder={langs?.comment.placeholder}
              />
              <div className="control__button">
                <Button className="button--submit">{langs?.button.post}</Button>
                <Button
                  className="button--submit"
                  onClick={() => setIsReply(false)}
                >
                  {langs?.button.cancel}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {replyList.length > 0 && (
        <div className="item__nested">
          {replyList.map((reply) => (
            <CommentItem key={reply.id} langs={langs} comment={reply}  />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
