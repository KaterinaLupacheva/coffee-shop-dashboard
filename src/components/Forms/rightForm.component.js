import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Box
} from "@material-ui/core";
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
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            placeholder="Name"
            variant="outlined"
            className={classes.field}
          />
          <TextField
            id="outlined-basic"
            placeholder="Price"
            variant="outlined"
            className={classes.field}
          />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="button-file"
            multiple
            type="file"
          />
          <label htmlFor="button-file">
            <Button
              variant="contained"
              component="span"
              className={classes.button}
            >
              Upload Image
            </Button>
          </label>
          <FormControlLabel
            control={<Switch color="primary" />}
            label="On sale"
          />
          <Box className={classes.buttons}>
            <Button variant="contained">Save</Button>
            <Button variant="contained" className={classes.actionButton}>
              Cancel
            </Button>
            <Button variant="contained" className={classes.actionButton}>
              Delete
            </Button>
          </Box>
        </form>
      </Drawer>
    </>
  );
};

export default RightForm;
