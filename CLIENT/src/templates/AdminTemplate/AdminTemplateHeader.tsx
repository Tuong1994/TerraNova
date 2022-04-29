import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReducerState } from "../../redux/store";
import Translate from "../../components/Translate";

const AdminTemplateHeader: React.FunctionComponent<{}> = (props) => {
  const { user } = useSelector((state: ReducerState) => state.UserReducer);

  return (
    <div className="content__header">
      <div className="header__user">
        <Link to="/user" className="user__link">
          <span className="link__name">
            {user?.firstName} {user?.lastName}
          </span>
          <img
            src={user?.avatar || "../img/avatar.png"}
            alt=""
            className="link__img"
          />
        </Link>
      </div>
      <div className="header__translate">
        <Translate />
      </div>
    </div>
  );
};

export default AdminTemplateHeader;
