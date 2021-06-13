import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import OrderCard from "../components/Cards/orderCard.component";
import Typography from "@material-ui/core/Typography";
import { orders } from "../data/orders";
import { ordersPageStyles } from "./ordersPage.styles";

const useStyles = makeStyles(ordersPageStyles);

const OrdersPage = () => {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        className={classes.title}
      >
        Latest Orders
      </Typography>
      {orders.map((order, id) => (
        <OrderCard key={id} order={order} />
      ))}
    </>
  );
};

export default OrdersPage;
