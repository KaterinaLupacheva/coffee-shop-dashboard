import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Chip, Typography, Grid } from "@material-ui/core";
import { orderCardStyles } from "./orderCard.styles";

const useStyles = makeStyles(orderCardStyles);

const OrderCard = ({ order }) => {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.root}>
      <Grid container>
        <Grid item xs>
          <Chip variant="outlined" label={order.status} />
        </Grid>
        <Grid item xs>
          <Typography variant="h4">{order.time}</Typography>
        </Grid>
        <Grid item xs>
          <Typography>{order.place}</Typography>
        </Grid>
        <Grid iten xs>
          <div className={classes.orderContainer}>
            {order.order.map((o, id) => (
              <Typography key={id}>{o}</Typography>
            ))}
          </div>
        </Grid>
        <Grid item xs>
          <Typography>{order.sum}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OrderCard;
