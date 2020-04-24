import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Line } from "react-chartjs-2";
import { labels, hourlyVisitors } from "../../data/daySales";
import ChartTitle from "./chartTitle.component";
import { Box, TextField, MenuItem } from "@material-ui/core";
import { chartStyles } from "./charts.styles";

const useStyles = makeStyles(chartStyles);

const LineChart = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [type, setType] = useState("Visitors");
  const [date, setDate] = useState("2020-04-20");

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
        data: hourlyVisitors(),
      },
    ],
  };

  const updateData = () => {
    data.data = hourlyVisitors();
  };

  const options = {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: type,
            fontSize: 18,
            fontColor: theme.palette.primary.main,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Working Hours",
            fontSize: 18,
            fontColor: theme.palette.primary.main,
          },
        },
      ],
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
  };

  return (
    <>
      <Box className={classes.options}>
        <TextField
          className={classes.field}
          select
          name="type"
          label="Type"
          size="small"
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.fieldFontSize,
            },
          }}
          value={type}
          onChange={(e) => {
            setType(e.target.value);
            updateData();
          }}
        >
          <MenuItem key={"Visitors"} value={"Visitors"}>
            {"Visitors"}
          </MenuItem>
          <MenuItem key={"Revenue"} value={"Revenue"}>
            {"Revenue"}
          </MenuItem>
        </TextField>
        <TextField
          label="Date"
          type="date"
          size="small"
          variant="outlined"
          className={classes.field}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            classes: {
              input: classes.dateField,
            },
          }}
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            updateData();
          }}
        />
        <ChartTitle>{`Hourly ${type}`}</ChartTitle>
      </Box>

      <Box className={classes.container}>
        <Line data={data} width={100} height={250} options={options} />
      </Box>
    </>
  );
};

export default LineChart;
