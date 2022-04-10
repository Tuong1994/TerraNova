import React from "react";

interface AvatarProps {}

const Avatar: React.FunctionComponent<AvatarProps> = props => {
    return <div className="sidebar__avatar">
        <img className="avatar__img" src="../img/avatar.png" alt="avatar" />
        <div className="avatar__info">
            <p>Hello, Admin</p>
        </div>
        <div className="avatar__line"></div>
    </div>
}

export default Avatar;