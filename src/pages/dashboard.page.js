import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LineChart from "../components/Charts/lineChart.component";
import BarChart from "../components/Charts/barChart.component";
import { Paper, Grid } from "@material-ui/core";
import { dashboardPageStyles } from "./dashboardPage.styles";
import StatCards from "../components/Cards/statCards.component";
import DeliveryOrdersTable from "../components/Tables/deliveryOrdersTable.component";
import DoughnutChart from "../components/Charts/doughnutChart.component";

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
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={8}>
          <Paper elevation={5}>
            <DeliveryOrdersTable />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={5}>
            <DoughnutChart />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardPage;
