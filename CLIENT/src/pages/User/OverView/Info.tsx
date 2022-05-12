import React from "react";
import * as Card from "../../../components/Card";
import * as content from "../../../configs/shipment";
import { ILangs } from "../../../interfaces/lang";
import { EGender, ERole, IUser } from "../../../models/User";

interface UserInfoProps {
  lang: string;
  langs: ILangs;
  user: IUser | null;
}

const UserInfo: React.FunctionComponent<UserInfoProps> = (props) => {
  const { lang, langs, user } = props;

  const renderGender = () => {
    if (user?.gender === EGender.male) {
      return langs?.user.info.male;
    } else if (user?.gender === EGender.female) {
      return langs?.user.info.female;
    }
  };

  const renderRole = () => {
    if (user) {
      if (user?.role === ERole.admin) {
        return langs?.user.info.admin;
      } else if (user?.role === ERole.user) {
        return langs?.user.info.user;
      }
    }
  };

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
          <li className="list__inner">
            <div className="inner__content">
              <p>{langs?.user.update.role} : </p>
              <strong>{renderRole()}</strong>
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
              <p>{langs?.form.ward} : </p>
              <strong>{content.renderWard(lang, user?.ward)}</strong>
            </div>
          </li>
          <li className="list__inner">
            <div className="inner__content">
              <p>{langs?.form.district} : </p>
              <strong>{content.renderDistrict(lang, user?.district)}</strong>
            </div>
          </li>
          <li className="list__inner">
            <div className="inner__content">
              <p>{langs?.form.province} : </p>
              <strong>{content.renderProvince(lang, user?.province)}</strong>
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
              <strong>{renderGender()}</strong>
            </div>
          </li>
        </ul>
      </Card.Wrapper>
    </div>
  );
};

export default UserInfo;
