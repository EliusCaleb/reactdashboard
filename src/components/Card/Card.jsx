import { motion,AnimateSharedLayout } from "framer-motion";
import React, { useState } from "react";
import "./Card.css";
import Chart from 'react-apexcharts'
import { UilTimes } from "@iconscout/react-unicons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
  const [expand, setExpand] = useState(false);
  return (
    <>
      <AnimateSharedLayout>
        {expand ? (
          <ExpandCard params={props} setExpand={() => setExpand(false)} />
        ) : (
          <CompactCard params={props} setExpand={() => setExpand(true)} />
        )}
      </AnimateSharedLayout>
    </>
  );
};

function CompactCard({ params, setExpand }) {
  const Png = params.png;
  return (
    <motion.div
      className="compact"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
      onClick={setExpand}
      layoutId="expandableCard"

    >
      <div className="radialBar">
        <CircularProgressbar
          value={params.barValue}
          text={`${params.barValue}%`}
        />
        <span>{params.title}</span>
      </div>
      <div className="details">
        <Png />
        <span>${params.value}</span>
        <span>Last seen 24hrs</span>
      </div>
    </motion.div>
  );
}

function ExpandCard({ params, setExpand }) {
    const data = {
        options: {
          chart: {
            type: "area",
            height: "auto",
          },
    
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
    
          fill: {
            colors: ["#fff"],
            type: "gradient",
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
            colors: ["white"],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          grid: {
            show: true,
          },
          xaxis: {
            type: "datetime",
            categories: [
              "2018-09-19T00:00:00.000Z",
              "2018-09-19T01:30:00.000Z",
              "2018-09-19T02:30:00.000Z",
              "2018-09-19T03:30:00.000Z",
              "2018-09-19T04:30:00.000Z",
              "2018-09-19T05:30:00.000Z",
              "2018-09-19T06:30:00.000Z",
            ],
          },
        },
      };
    
    
  return (
    <motion.div
      className="expand"
      style={{
        background: params.color.backGround,
        boxShadow: params.color.boxShadow,
      }}
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpand} />
      </div>
      <span>{params.title}</span>
      <div className="chartContainer">
          <Chart series={params.series} type="area" options={data.options}/>
      </div>
      <span>
            last Seen 24 hours
      </span>
    </motion.div>
  );
}

export default Card;
