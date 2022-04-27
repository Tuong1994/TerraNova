import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { IRoute } from "../../interfaces/route";
import Header from "../../components/Header";
import Sidebar from "../../pages/User/Sidebar";
import Footer from "../../components/Footer";
import RUserSidebar from "../../responsive/RUserTemplate/RUserSidebar";

interface UserTemplateProps extends IRoute {
  Component?: any;
}

const UserTemplate: React.FunctionComponent<UserTemplateProps> = (props) => {
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute: RouteComponentProps) => {
        return (
          <div className="user-template">
            <Header />
            <div className="user-template__content">
              <Sidebar />
              <RUserSidebar />
              <div className="content__inner">
                <Component {...propsRoute} />
              </div>
            </div>
            <Footer />
          </div>
        );
      }}
    />
  );
};

export default UserTemplate;
