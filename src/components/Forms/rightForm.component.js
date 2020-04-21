import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import { rightFormStyles } from "./rightForm.styles";

const useStyles = makeStyles(rightFormStyles);

const RightForm = ({ open }) => {
  const classes = useStyles();
  return (
    <>
      <Drawer
        variant="permanent"
        anchor="right"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.appBarSpacer} />
        TEST
      </Drawer>
    </>
  );
};

export default RightForm;
