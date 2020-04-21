import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, IconButton, Divider, List } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { menuListItems } from "../../data/menuItems";
import { sidebarStyles } from "./sidebar.styles";

const useStyles = makeStyles(sidebarStyles);

const Sidebar = ({ open, handleDrawerClose }) => {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{menuListItems}</List>
      <Divider />
    </Drawer>
  );
};

export default Sidebar;
