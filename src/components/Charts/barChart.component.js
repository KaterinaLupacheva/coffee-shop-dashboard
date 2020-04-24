import React from "react";
import { Bar } from "react-chartjs-2";
import { labels } from "../../data/weekSales";
import Title from "../Tables/title";
import { Box } from "@material-ui/core";
import { chartStyles } from "./charts.styles";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(chartStyles);

const data = {
  labels: labels,
  datasets: [
    {
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Revenue",
          fontSize: 18,
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100,
        },
      },
    ],
  },
  maintainAspectRatio: false,
  layout: {
    padding: 30,
  },
  legend: {
    display: false,
  },
};

const BarChart = () => {
  const classes = useStyles();
  return (
    <>
      <Title>Daily Revenue</Title>
      <Box className={classes.container}>
        <Bar data={data} width={100} height={250} options={options} />
      </Box>
    </>
  );
};

export default BarChart;
