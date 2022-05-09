import React from "react";
import * as FormControl from "../../components/Fields";
import { ILangs } from "../../interfaces/lang";
import { IUser } from "../../models/User";
import Button from "../../components/Button";

interface CommentControlProps {
  langs: ILangs;
  user: IUser | null;
  handleAdd?: (comment: string, parentId?: string) => void;
}

const CommentControl: React.FunctionComponent<CommentControlProps> = (
  props
) => {
  const { langs, user, handleAdd } = props;

  const [comment, setComment] = React.useState<string>("");
  const isDisabled = comment.length === 0;

  return (
    <React.Fragment>
      <div className="control__user">
        <div className="user__avatar">
          <img
            className="avatar__img"
            src={user?.avatar || "/img/avatar.png"}
            alt="avatar"
          />
        </div>
        <div className="user__name">
          <p>
            {user?.firstName} {user?.lastName}
          </p>
        </div>
      </div>

      <div className="control__field">
        <FormControl.TextAreaCustom
          placeholder={langs?.comment.placeholder}
          value={comment}
          onChange={(e) => {
            const value = e.target.value;
            setComment(value);
          }}
        />
        <Button
          type="button"
          className={`button--submit ${isDisabled ? "button--disabled" : ""}`}
          isDisabled={isDisabled}
          onClick={() => {
           handleAdd && handleAdd(comment);
            setComment("");
          }}
        >
          {langs?.button.post}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default CommentControl;
