import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Doughnut } from "react-chartjs-2";
import ChartTitle from "./chartTitle.component";
import { chartStyles } from "./charts.styles";
import { makeStyles } from "@material-ui/core/styles";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import TabletMacIcon from "@material-ui/icons/TabletMac";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(chartStyles);

const DoughnutChart = () => {
  const classes = useStyles();
  const theme = useTheme();

  const data = {
    labels: ["Desktop", "Mobile", "Tablet"],
    datasets: [
      {
        data: [73, 17, 10],
        backgroundColor: [
          theme.palette.primary.main,
          theme.palette.background.default,
          theme.palette.background.card,
        ],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
  };
  return (
    <>
      <ChartTitle>Users By Device</ChartTitle>
      <Doughnut data={data} options={options} />
      <div className={classes.legend}>
        <div className={classes.legendItem}>
          <DesktopWindowsIcon fontSize="large" />
          <Typography variant="body2">Desktop</Typography>
          <Typography variant="h6">73%</Typography>
        </div>
        <div className={classes.legendItem}>
          <SmartphoneIcon fontSize="large" />
          <Typography variant="body2">Mobile</Typography>
          <Typography variant="h6">17%</Typography>
        </div>
        <div className={classes.legendItem}>
          <TabletMacIcon fontSize="large" />
          <Typography variant="body2">Tablet</Typography>
          <Typography variant="h6">10%</Typography>
        </div>
      </div>
    </>
  );
};

export default DoughnutChart;
