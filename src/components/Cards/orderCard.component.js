import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Chip, Typography, Grid } from "@material-ui/core";
import { orderCardStyles } from "./orderCard.styles";
import PlaceIcon from "@material-ui/icons/Place";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const useStyles = makeStyles(orderCardStyles);

const OrderCard = ({ order }) => {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.root}>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={6} sm={2} md={1}>
          <Chip
            variant="outlined"
            label={order.status}
            className={`${order.status === "Done" ? classes.green : ""} ${
              order.status === "Processing" ? classes.purple : ""
            } ${order.status === "Delivery" ? classes.orange : ""}`}
          />
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Typography variant="h6">{order.time}</Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <PlaceIcon />
          <Typography>{order.place}</Typography>
        </Grid>
        <Grid item xs={6} sm={3} md={4}>
          <div className={classes.orderContainer}>
            {order.order.map((o, id) => (
              <Typography key={id}>{o}</Typography>
            ))}
          </div>
        </Grid>
        <Grid item xs={6} sm={2} md={2}>
          <Typography variant="h4">{order.sum}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OrderCard;
