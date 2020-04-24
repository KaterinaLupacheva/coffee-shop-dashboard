import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Line } from "react-chartjs-2";
import { labels, hourlyVisitors } from "../../data/daySales";
import Title from "../Tables/title";
import { Box } from "@material-ui/core";
import { lineChartStyles } from "./lineChart.styles";

const useStyles = makeStyles(lineChartStyles);

const LineChart = () => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    labels: labels,
    datasets: [
      {
        fill: true,
        lineTension: 0.5,
        backgroundColor: theme.palette.background.default,
        borderColor: theme.palette.primary.main,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: hourlyVisitors,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Visitors",
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Working Hours",
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

  return (
    <>
      <Title>Hourly Visitors</Title>
      <Box className={classes.container}>
        <Line data={data} width={100} height={250} options={options} />
      </Box>
    </>
  );
};

export default LineChart;
