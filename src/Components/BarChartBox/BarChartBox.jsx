import React from "react";
import "../BarChartBox/BarChartBox.scss";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";


const BarChartBox = (props) => {
  return (
    <div className="barChartBox">
      <h1 className="title">{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.chartData}>
            <Tooltip
                contentStyle={{background: '#2a3447', borderRadius: '5px', fontSize :'12px' }}
                labelStyle={{ display: "none" }}
                cursor={{fill: 'none'}}
            />
            <Bar dataKey={props.dataKey}fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
