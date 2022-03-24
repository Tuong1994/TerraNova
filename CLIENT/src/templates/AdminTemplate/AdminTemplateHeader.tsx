import React from "react";
import { Link } from "react-router-dom";

const AdminTemplateHeader: React.FunctionComponent<{}> = (props) => {
  return <div className="content__header">
      <div className="header__user">
          <Link to="/" className="user__link">
            <span className="link__name">Admin</span>
            <img src="../img/avatar.png" alt="" className="link__img" />
          </Link> 
      </div>
  </div>;
};

export default AdminTemplateHeader;
