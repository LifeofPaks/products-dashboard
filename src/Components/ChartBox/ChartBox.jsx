import React from "react";
import "../ChartBox/ChartBox.scss";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";


const ChartBox = (props) => {
  return (
    <div className="chartBox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="chart-image" />
          <span className="chartTitle">{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link path="/" className="link" style={{ color: props.color }}>
          View all
        </Link>
      </div>

      <div className="chartInfo">
        <div className="charts">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" , fontSize :'12px'}}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 55 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text">
          <span
            className="percentage"
            style={{ color: props.percentage > 0 ? "limegreen" : "tomato" }}
          >
            {props.percentage}%
          </span>
          <span className="duration">This month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
