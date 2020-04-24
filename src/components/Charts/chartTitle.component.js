import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}));

const ChartTitle = (props) => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.root}
      component="h2"
      variant="h4"
      color="primary"
      align="center"
      gutterBottom
    >
      {props.children}
    </Typography>
  );
};

export default ChartTitle;
