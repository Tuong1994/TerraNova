import React from "react";
import Sidebar from "../../pages/Admin/Sidebar";
import AdminTemplateHeader from "./AdminTemplateHeader";
import RAdminTemplate from "../../responsive/RAdminTemplate/RAdminTemplate";
import { IRoute } from "../../interfaces/route";
import { Route, RouteComponentProps } from "react-router-dom";

interface IAdminTemplateProps extends IRoute {
  Component: any;
}

const AdminTemplate: React.FunctionComponent<IAdminTemplateProps> = (props) => {
  let { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute: RouteComponentProps) => {
        return (
          <div className="admin-template">
            <div className="admin-template__responsive">
              <RAdminTemplate />
            </div>

            <div className="admin-template__menu">
              <Sidebar />
            </div>

            <div className="admin-template__content">
              <AdminTemplateHeader />
              <div className="content__wrapper">
                <Component {...propsRoute} />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default AdminTemplate;
