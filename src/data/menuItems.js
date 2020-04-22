import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ListAltIcon from "@material-ui/icons/ListAlt";
import * as ROUTES from "../pages/routes";

export const MENU_LIST_ITEMS = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
    route: ROUTES.DASHBOARD
  },
  {
    name: "Orders",
    icon: <ListAltIcon />,
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
