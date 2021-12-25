import React from "react";
import { Link } from "react-router-dom";

const Setting: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="sidebar__setting">
      <Link to="/" className="setting__link">
        <i className="fas fa-cog link__icon"></i>
        <span className="link__name">Setting</span>
      </Link>
    </div>
  );
};

export default Setting;
