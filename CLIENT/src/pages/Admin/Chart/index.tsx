import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";


const Chart: React.FunctionComponent<{}> = (props) => {
  const data = [
    {
      name: "1",
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2",
      pv: 1398,
      amt: 2210,
    },
    {
      name: "3",
      pv: 7800,
      amt: 2290,
    },
    {
      name: "4",
      pv: 3908,
      amt: 2000,
    },
    {
      name: "5",
      pv: 4800,
      amt: 2181,
    },
    {
      name: "6",
      pv: 3800,
      amt: 2500,
    },
    {
      name: "7",
      pv: 4300,
      amt: 2100,
    },
    {
      name: "8",
      pv: 4450,
      amt: 2100,
    },
    {
      name: "9",
      pv: 6300,
      amt: 2100,
    },
    {
      name: "10",
      pv: 5300,
      amt: 2100,
    },
    {
      name: "11",
      pv: 7300,
      amt: 2100,
    },
    {
      name: "12",
      pv: 7100,
      amt: 2100,
    },
  ];

  return (
    <LineChart
      width={1000}
      height={400}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
    </LineChart>
  );
};

export default Chart;
