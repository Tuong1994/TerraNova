import React from "react";
import * as Card from "../../../components/Card";
import { ILangs } from "../../../interfaces/lang";
import { IUser } from "../../../models/User";

interface UserInfoProps {
  langs: ILangs;
  user: IUser | null;
}

const UserInfo: React.FunctionComponent<UserInfoProps> = (props) => {
  const { langs, user } = props;
  return (
    <div className="overview__user">
      <Card.Wrapper className="user__info">
        <h5 className="info__title">{langs?.user.overview.accountInfo}</h5>
        <ul className="info__list">
          <li className="list__inner">
            <div className="inner__content">
              <p>{langs?.form.account} : </p>
              <strong>{user?.account}</strong>
            </div>
          </li>
          <li className="list__inner">
            <div className="inner__content">
              <p>{langs?.form.email} : </p>
              <strong>{user?.email}</strong>
            </div>
          </li>
        </ul>
      </Card.Wrapper>
      <Card.Wrapper className="user__info">
        <h5 className="info__title">{langs?.user.overview.personalInfo}</h5>
        <ul className="info__list">
          <li className="list__inner">
            <div className="inner__content">
              <p>{langs?.form.name} : </p>
              <strong>
                {user?.firstName} {user?.lastName}
              </strong>
            </div>
          </li>
          <li className="list__inner">
            <div className="inner__content">
              <p>{langs?.form.phone} : </p>
              <strong>{user?.phone}</strong>
            </div>
          </li>
          <li className="list__inner">
            <div className="inner__content">
              <p>{langs?.form.address} : </p>
              <strong>{user?.address}</strong>
            </div>
          </li>
          <li className="list__inner">
            <div className="inner__content">
              <p>{langs?.form.birthday} : </p>
              <strong>{user?.birthDay}</strong>
            </div>
          </li>
          <li className="list__inner">
            <div className="inner__content">
              <p>{langs?.form.gender} : </p>
              <strong>{user?.gender}</strong>
            </div>
          </li>
        </ul>
      </Card.Wrapper>
    </div>
  );
};

export default UserInfo;
