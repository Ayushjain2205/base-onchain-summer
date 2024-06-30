import React from "react";
import { ComposedChart, Line, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { week: "Week 1", volume: 1000, price: 0.5 },
  { week: "Week 2", volume: 1200, price: 0.52 },
  { week: "Week 3", volume: 1100, price: 0.51 },
  { week: "Week 4", volume: 1300, price: 0.53 },
  { week: "Week 5", volume: 1500, price: 0.55 },
  { week: "Week 6", volume: 1400, price: 0.54 },
  { week: "Week 7", volume: 1600, price: 0.56 },
  { week: "Week 8", volume: 1800, price: 0.58 },
];

const SocialTokenChart = () => {
  return (
    <div className="w-full h-full">
      <ComposedChart width={370} height={300} data={data}>
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Bar yAxisId="left" dataKey="volume" fill="#8884d8" />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="price"
          stroke="#82ca9d"
        />
      </ComposedChart>
      <p>Hello</p>
    </div>
  );
};

export default SocialTokenChart;
