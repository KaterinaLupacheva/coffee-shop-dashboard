import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography, Divider } from "@material-ui/core";
import { statCardsStyles } from "./statCards.styles";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MoneyIcon from "@material-ui/icons/Money";
import GroupAddIcon from "@material-ui/icons/GroupAdd";

const useStyles = makeStyles(statCardsStyles);

const StatCards = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <div className={classes.topRow}>
              <div>
                <Typography variant="button">Total Visitors</Typography>
                <Typography variant="h4">1,264</Typography>
              </div>
              <div className={classes.icon}>
                <PeopleOutlineIcon fontSize="large" />
              </div>
            </div>
            <Divider />
            <div className={classes.bottomRow}>
              <ArrowUpwardIcon className={classes.green} />
              <Typography variant="body2">
                &nbsp;<span className={classes.green}>17%</span> to last month
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <div className={classes.topRow}>
              <div>
                <Typography variant="button">Average Bill</Typography>
                <Typography variant="h4">$7.38</Typography>
              </div>
              <div className={classes.icon}>
                <LocalAtmIcon fontSize="large" />
              </div>
            </div>
            <Divider />
            <div className={classes.bottomRow}>
              <ArrowDownwardIcon fontSize="small" className={classes.red} />
              <Typography variant="body2">
                &nbsp;<span className={classes.red}>2.3%</span> to last month
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <div className={classes.topRow}>
              <div>
                <Typography variant="button">Net Profit</Typography>
                <Typography variant="h4">$2,390</Typography>
              </div>
              <div className={classes.icon}>
                <MoneyIcon fontSize="large" />
              </div>
            </div>
            <Divider />
            <div className={classes.bottomRow}>
              <ArrowUpwardIcon fontSize="small" className={classes.green} />
              <Typography variant="body2">
                &nbsp;<span className={classes.green}>2.3%</span> to last month
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
            <div className={classes.topRow}>
              <div>
                <Typography variant="button">IG Followers</Typography>
                <Typography variant="h4">3.287</Typography>
              </div>
              <div className={classes.icon}>
                <GroupAddIcon fontSize="large" />
              </div>
            </div>
            <Divider />
            <div className={classes.bottomRow}>
              <ArrowUpwardIcon fontSize="small" className={classes.green} />
              <Typography variant="body2">
                &nbsp;<span className={classes.green}>78</span> to last month
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default StatCards;
