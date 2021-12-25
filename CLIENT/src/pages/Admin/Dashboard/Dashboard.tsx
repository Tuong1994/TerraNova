import React from "react";
import Box from "../../../components/Box/Box";
import Card from "../../../components/Card/Card";
import ContentHeader from "../../../components/ContentHeader/ContentHeader";
import overviewList from "../../../configs/overviewList";
import pageTitleList from "../../../configs/pageTitleList";
import Chart from "../Chart/Chart";
import { ResponsiveContainer } from "recharts";

const Dashboard: React.FunctionComponent<{}> = (props) => {
  const renderOverview = () => {
    return overviewList.map((overview, index) => {
      return <Box key={index} title={overview.title} total={overview.total} />;
    });
  };
  return (
    <div className="dashboard">
      <ContentHeader name={pageTitleList.dashBoard} />
      <Card>
        <div className="dashboard__box">{renderOverview()}</div>
        <div className="dashboard__chart">
          <div className="chart__wrapper">
            <ResponsiveContainer>
              <Chart />
            </ResponsiveContainer>
          </div>
          {/* <div className="chart__wrapper">
            <ResponsiveContainer>
              <Chart />
            </ResponsiveContainer>
            <ResponsiveContainer>
              <Chart />
            </ResponsiveContainer>
            <ResponsiveContainer>
              <Chart />
            </ResponsiveContainer>
          </div> */}
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
