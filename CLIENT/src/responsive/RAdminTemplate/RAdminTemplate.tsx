import React from "react";
import Button from "../../components/Button";
import RAdminSidebar from "./RAdminSidebar";

const RAdminTemplate: React.FunctionComponent<{}> = (props) => {
  return (
    <div className="responsive">
      <div className="responsive__logo">
        <div className="logo__left">A</div>
        <div className="logo__right">
          <div>MIN</div>
          <div>PLATFORM</div>
        </div>
      </div>

      <div className="responsive__button">
        <Button type="button" className="button--page">
          <i className="fa fa-bars"></i>
        </Button>
      </div>

      <div className="responsive__menu">
        <RAdminSidebar />
      </div>
    </div>
  );
};

export default RAdminTemplate;
