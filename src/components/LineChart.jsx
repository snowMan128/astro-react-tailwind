import React from "react";
import { LineChart, Line, ResponsiveContainer, Legend } from "recharts";
import BarChart from "./BarChart";

const data = [
  { name: "Jan", Retail: 3000, Market: 2400 },
  { name: "Feb", Retail: 4000, Market: 3398 },
  { name: "Mar", Retail: 5000, Market: 6800 },
  { name: "Apr", Retail: 2780, Market: 3908 },
  { name: "May", Retail: 1890, Market: 4800 },
  { name: "Jun", Retail: 2390, Market: 3800 },
  { name: "Jul", Retail: 3490, Market: 4300 },
  { name: "Aug", Retail: 2000, Market: 2400 },
  { name: "Sep", Retail: 2780, Market: 3908 },
  { name: "Oct", Retail: 1890, Market: 4800 },
  { name: "Nov", Retail: 2390, Market: 3800 },
  { name: "Dec", Retail: 3490, Market: 4300 },
];

const CustomChart = ({ children }) => {
  return (
    <ResponsiveContainer width={600} height={300}>
      <LineChart
        data={data}
        margin={{
          top: 20,
          bottom: 5,
        }}
      >
        <defs>
          <filter id="blur-filter" x="0" y="-20%" width="100%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
          </filter>
        </defs>
        <Line
          type="monotone"
          dataKey="Retail"
          stroke="#00FF00"
          strokeWidth={4}
          dot={false}
          isAnimationActive={false}
        />
        <Line
          type="monotone"
          dataKey="Market"
          stroke="#8884d8"
          strokeWidth={4}
          dot={false}
          isAnimationActive={false}
        />
        <Legend verticalAlign="bottom" height={36} />
      </LineChart>
      <div className="ml-[-20px] mr-[-20px] px-10 py-5 rounded-md bg-backGray">
        <div className="border-t-[4px] border-dashed border-[#0077B6]">
          {children}
        </div>
      </div>
    </ResponsiveContainer>
  );
};

export default CustomChart;
