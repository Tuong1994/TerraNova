import React from "react";
import * as FormControl from "../../components/Fields";
import { ILangs } from "../../interfaces/lang";
import { IUser } from "../../models/User";
import Button from "../../components/Button";
import ButtonLoading from "../Loading/ButtonLoading";

interface CommentControlProps {
  langs: ILangs;
  user: IUser | null;
  dataLoading: boolean;
  handleAdd?: (comment: string, parentId?: string) => void;
}

const CommentControl: React.FunctionComponent<CommentControlProps> = (
  props
) => {
  const { langs, user, dataLoading, handleAdd } = props;

  const [text, setText] = React.useState<string>("");

  const isDisabled = text.length === 0;

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
          {user ? (
            <p>
              {user?.firstName} {user?.lastName}
            </p>
          ) : (
            <p>User</p>
          )}
        </div>
      </div>

      <div className="control__field">
        <FormControl.TextAreaCustom
          placeholder={langs?.comment.placeholder}
          value={text}
          onChange={(e) => {
            const value = e.target.value;
            setText(value);
          }}
        />
        <Button
          type="button"
          className={`button--submit ${
            isDisabled || dataLoading ? "button--disabled" : ""
          }`}
          isDisabled={isDisabled}
          onClick={() => {
            handleAdd && handleAdd(text);
            setText("");
          }}
        >
          <ButtonLoading />
          <span>{langs?.button.post}</span>
        </Button>
      </div>
    </React.Fragment>
  );
};

export default CommentControl;
