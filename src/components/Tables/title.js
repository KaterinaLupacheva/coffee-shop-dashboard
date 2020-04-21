import React from "react";
import Typography from "@material-ui/core/Typography";

const Title = props => {
  return (
    <Typography
      component="h2"
      variant="h5"
      color="primary"
      align="center"
      gutterBottom
    >
      {props.children}
    </Typography>
  );
};

export default Title;
