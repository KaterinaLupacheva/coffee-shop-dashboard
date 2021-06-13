import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import { addNewCardStyles } from "./addNewCard.styles";

const useStyles = makeStyles(addNewCardStyles);

const AddNew = ({ openForm }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.root} onClick={openForm}>
        <CardActionArea>
          <CardContent className={classes.content}>
            <AddSharpIcon fontSize="large" />
            <Typography variant="h5">Add New</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default AddNew;
