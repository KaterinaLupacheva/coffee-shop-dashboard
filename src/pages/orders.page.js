import React from "react";
import OrderCard from "../components/Cards/orderCard.component";
import { orders } from "../data/orders";

const OrdersPage = () => {
  return (
    <>
      {orders.map((order, id) => (
        <OrderCard key={id} order={order} />
      ))}
    </>
  );
};

export default OrdersPage;
