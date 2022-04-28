import React from "react";
import { ILangs } from "../../../interfaces/lang";
import { IUser } from "../../../models/User";

interface AvatarProps {
  user: IUser | null | undefined;
  langs: ILangs;
}

const Avatar: React.FunctionComponent<AvatarProps> = (props) => {
  const { user, langs } = props;

  return (
    <div className="sidebar__avatar">
      <img className="avatar__img" src={user?.avatar || "../img/avatar.png"} alt="avatar" />
      <div className="avatar__info">
        <p>{langs?.user.overview.hello}, {user?.firstName} {user?.lastName}</p>
      </div>
      <div className="avatar__line"></div>
    </div>
  );
};

export default Avatar;
