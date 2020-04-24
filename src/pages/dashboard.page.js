import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LineChart from "../components/Charts/lineChart.component";
import BarChart from "../components/Charts/barChart.component";
import { Paper } from "@material-ui/core";
import { dashboardPageStyles } from "./dashboardPage.styles";
import StatCards from "../components/Cards/statCards.component";

const useStyles = makeStyles(dashboardPageStyles);

const DashboardPage = () => {
  const classes = useStyles();
  return (
    <>
      <StatCards />
      <Paper className={classes.root} elevation={5}>
        <LineChart />
      </Paper>
      <Paper className={classes.root} elevation={5}>
        <BarChart />
      </Paper>
    </>
  );
};

export default DashboardPage;
