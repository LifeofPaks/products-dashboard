import React from "react";
import "../PieChartBox/PieChartBox.scss";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 600, color: "#0088FE" },
  { name: "Desktop", value: 300, color: "#00C49F" },
  { name: "Laptop", value: 300, color: "#FFBB28" },
  { name: "Tablet", value: 450, color: "#FF8042" },
];

const PieChartBox = () => {
  return (
    <div className="pieChart">
      <h1>Leads by source</h1>

      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{
                background: "white",
                border: "none",
                fontSize: "12px",
              }}
            />
            <Pie
              data={data}
              innerRadius={'70%'}
              outerRadius={'90%'}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="summary">
        {data.map((item) => (
          <div className="options" key={item.name}>
            <div className="title">
              <div className="dot" style={{background: item.color}}></div>
              <span className="name">{item.name}</span>
            </div>
            <div className="value">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
