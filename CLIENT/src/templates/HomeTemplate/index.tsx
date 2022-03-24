import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import { IRoute } from "../../interfaces/route";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

interface IHomeTemplateProps extends IRoute {
    Component: any
}

const HomeTemplate: React.FunctionComponent<IHomeTemplateProps> = props => {
    let {Component, ...restProps} = props;
    return <Route
        {...restProps}
        render={(propsRoute: RouteComponentProps) => {
            return <div>
                <Header />
                <Component {...propsRoute} />
                <Footer />
            </div>
        }}
    />
}

export default HomeTemplate;