import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import { adminRoutes, homeRoutes } from "./configs/routes";
import { ToastContainer } from "react-toastify";
import AdminTemplate from "./templates/AdminTemplate";
import HomeTemplate from "./templates/HomeTemplate";
import PageLoading from "./components/Loading/PageLoading";
import 'react-toastify/dist/ReactToastify.css';
import "./sass/main.scss";

export const history = createBrowserHistory();

const App: React.FunctionComponent<{}> = (props) => {
  const renderAdminRoutes = () => {
    return adminRoutes.map((route, index) => {
      return (
        <AdminTemplate
          key={index}
          exact={route.exact}
          path={route.path}
          Component={route.component}
        />
      );
    });
  };
  const renderHomeRoutes = () => {
    return homeRoutes.map((route, index) => {
      return (
        <HomeTemplate
          key={index}
          exact={route.exact}
          path={route.path}
          Component={route.component}
        />
      );
    });
  };

  return (
    <Router history={history}>
      <Switch>
        <>
          {renderHomeRoutes()}
          {renderAdminRoutes()}
          <PageLoading />
          <ToastContainer />
        </>
      </Switch>
    </Router>
  );
};

export default App;
