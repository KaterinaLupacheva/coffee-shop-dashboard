import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { statCardsStyles } from "./statCards.styles";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles(statCardsStyles);

const StatCards = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <div className={classes.topRow}>
              <div>
                <Typography variant="button">Total Visitors</Typography>
                <Typography variant="h4">1,264</Typography>
              </div>
              <div className={clsx(classes.icon, classes.iconBgPurple)}>
                <PeopleOutlineIcon fontSize="large" />
              </div>
            </div>
            <Divider />
            <div className={classes.bottomRow}>
              <ArrowUpwardIcon fontSize="small" className={classes.green} />
              <Typography variant="body2">
                &nbsp;<span className={classes.green}>17%</span> Since last
                month
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <div className={classes.topRow}>
              <div>
                <Typography variant="button">Average Bill</Typography>
                <Typography variant="h4">$7.38</Typography>
              </div>
              <div className={clsx(classes.icon, classes.iconBgGreen)}>
                <LocalAtmIcon fontSize="large" />
              </div>
            </div>
            <Divider />
            <div className={classes.bottomRow}>
              <ArrowDownwardIcon fontSize="small" className={classes.red} />
              <Typography variant="body2">
                &nbsp;<span className={classes.red}>2.3%</span> Since last month
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default StatCards;
