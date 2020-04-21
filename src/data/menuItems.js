import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import * as ROUTES from "../pages/routes";

export const MENU_LIST_ITEMS = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    route: ROUTES.DASHBOARD
  },
  {
    name: "Orders",
    icon: <ShoppingCartIcon />,
    route: ROUTES.ORDERS
  },
  {
    name: "Employees",
    icon: <PeopleIcon />,
    route: ROUTES.EMPLOYEES
  },
  {
    name: "Products",
    icon: <ShoppingBasketIcon />,
    route: ROUTES.PRODUCTS
  }
];
