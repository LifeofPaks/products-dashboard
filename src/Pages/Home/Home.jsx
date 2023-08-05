import React from "react";
import "../Home/Home.scss";
import TopBox from "../../Components/TopBox/TopBox";
import ChartBox from "../../Components/ChartBox/ChartBox";
import { chartBoxUser } from "../../Data/Data";
import { chartBoxProduct } from "../../Data/Data";
import { chartBoxRevenue } from "../../Data/Data";
import { chartBoxConversion } from "../../Data/Data";
import BarChartBox from "../../Components/BarChartBox/BarChartBox";
import { barChartBoxVisit } from "../../Data/Data";
import { barChartBoxRevenue } from "../../Data/Data";
import PieChartBox from "../../Components/PieChartBox/PieChartBox";
import BigChartBox from "../../Components/BigChartBox/BigChartBox";


const Home = () => {
  return (
    <>
      <div className="home">
        <div className="box box1">
          <TopBox />
        </div>

        <div className="box box2">
          <ChartBox {...chartBoxUser} />
        </div>

        <div className="box box3">
          <ChartBox {...chartBoxProduct} />
        </div>

        <div className="box box4">
          <PieChartBox />
        </div>

        <div className="box box5">
          <ChartBox {...chartBoxRevenue} />
        </div>

        <div className="box box6">
          <ChartBox {...chartBoxConversion} />
        </div>

        <div className="box box7">
          <BigChartBox />
        </div>

        <div className="box box8">
          <BarChartBox {...barChartBoxVisit} />
        </div>

        <div className="box box9">
          <BarChartBox {...barChartBoxRevenue} />
        </div>
      </div>
    </>
  );
};

export default Home;
