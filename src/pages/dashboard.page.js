import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LineChart from "../components/Charts/lineChart.component";
import { Paper } from "@material-ui/core";
import { dashboardPageStyles } from "./dashboardPage.styles";

const useStyles = makeStyles(dashboardPageStyles);

const DashboardPage = () => {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.root}>
        <LineChart />
      </Paper>
    </>
  );
};

export default DashboardPage;
