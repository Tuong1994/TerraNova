import React from "react";
import * as Card from "../../../components/Card";
import { ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { ReducerState } from "../../../redux/store";
import Box from "../../../components/Box";
import ContentHeader from "../../../components/ContentHeader";
import Chart from "./Charts";
import utils from "../../../utils";

const Dashboard: React.FunctionComponent<{}> = (props) => {
  const { lang } = useSelector((state: ReducerState) => state.LangReducer);

  const langs = utils.changeLang(lang);

  const boxList = [
    {
      id: 1,
      title: langs?.admin.dashboard.totalRevenue,
      total: 0,
      background: "#0faf37",
    },
    {
      id: 2,
      title: langs?.admin.dashboard.totalCustomers,
      total: 0,
      background: "#2955b6",
    },
    {
      id: 3,
      title: langs?.admin.dashboard.totalOrders,
      total: 0,
      background: "#e24f4f",
    },
    {
      id: 4,
      title: langs?.admin.dashboard.totalTickets,
      total: 0,
      background: "#6093ff",
    },
  ];

  const data = [
    {
      name: "1",
      percent: 23,
    },
    {
      name: "2",
      percent: 45,
    },
    {
      name: "3",
      percent: 63,
    },
    {
      name: "4",
      percent: 80,
    },
    {
      name: "5",
      percent: 75,
    },
    {
      name: "6",
      percent: 92,
    },
    {
      name: "7",
      percent: 88,
    },
    {
      name: "8",
      percent: 73,
    },
    {
      name: "9",
      percent: 65,
    },
    {
      name: "10",
      percent: 54,
    },
    {
      name: "11",
      percent: 78,
    },
    {
      name: "12",
      percent: 95,
    },
  ];

  const renderBox = () => {
    return boxList.map((box) => {
      return (
        <div className="box__item">
          <Box
            key={box.id}
            title={box.title}
            total={box.total}
            background={box.background}
          />
        </div>
      );
    });
  };
  return (
    <div className="dashboard">
      <ContentHeader name={langs?.admin.pageTitle.dashBoard || ""} />
      <div className="dashboard__wrapper">
        <div className="wrapper__box">{renderBox()}</div>

        <Card.Wrapper className="wrapper__card">
          <h3 className="card__title">
            <span>{langs?.admin.dashboard.totalRevenue}</span>
            <span>
              {langs?.time.year} : {new Date().getFullYear()}
            </span>
          </h3>
          <div className="card__chart">
            <ResponsiveContainer width={900} height={400}>
              <Chart
                data={data}
                dataKey="percent"
                xTitle={langs?.time.month}
                yTitle={langs?.admin.dashboard.percent}
              />
            </ResponsiveContainer>
          </div>
        </Card.Wrapper>

        <Card.Wrapper className="wrapper__card">
          <h3 className="card__title">
            <span>{langs?.admin.dashboard.totalCustomers}</span>
            <span>
              {langs?.time.year} : {new Date().getFullYear()}
            </span>
          </h3>
          <div className="card__chart">
            <ResponsiveContainer width={900} height={400}>
              <Chart
                data={data}
                dataKey="percent"
                xTitle={langs?.time.month}
                yTitle={langs?.admin.dashboard.percent}
              />
            </ResponsiveContainer>
          </div>
        </Card.Wrapper>

        <Card.Wrapper className="wrapper__card">
          <h3 className="card__title">
            <span>{langs?.admin.dashboard.totalOrders}</span>
            <span>
              {langs?.time.year} : {new Date().getFullYear()}
            </span>
          </h3>
          <div className="card__chart">
            <ResponsiveContainer width={900} height={400}>
              <Chart
                data={data}
                dataKey="percent"
                xTitle={langs?.time.month}
                yTitle={langs?.admin.dashboard.percent}
              />
            </ResponsiveContainer>
          </div>
        </Card.Wrapper>

        <Card.Wrapper className="wrapper__card">
          <h3 className="card__title">
            <span>{langs?.admin.dashboard.totalTickets}</span>
            <span>
              {langs?.time.year} : {new Date().getFullYear()}
            </span>
          </h3>
          <div className="card__chart">
            <ResponsiveContainer width={900} height={400}>
              <Chart
                data={data}
                dataKey="percent"
                xTitle={langs?.time.month}
                yTitle={langs?.admin.dashboard.percent}
              />
            </ResponsiveContainer>
          </div>
        </Card.Wrapper>
      </div>
    </div>
  );
};

export default Dashboard;
