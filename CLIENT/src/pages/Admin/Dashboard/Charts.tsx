import React from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Label,
} from "recharts";

interface ChartProps {
  data: any;
  dataKey?: string;
  xTitle?: string;
  yTitle?: string;
  lineColor?: string;
}

const Chart: React.FunctionComponent<ChartProps> = (props) => {
  const { data, dataKey, xTitle, yTitle, lineColor } = props;

  return (
    <LineChart
      width={900}
      height={400}
      data={data}
      margin={{ top: 50, right: 30, left: 30, bottom: 50 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name">
        <Label value={xTitle} offset={0} position="bottom" />
      </XAxis>
      <YAxis label={{ value: yTitle, angle: -90, position: "left" }} />
      <Tooltip />
      <Line type="monotone" dataKey={dataKey} stroke={lineColor || "#8884d8"} />
    </LineChart>
  );
};

export default Chart;
