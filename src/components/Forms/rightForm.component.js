import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Box,
} from "@material-ui/core";
import { rightFormStyles } from "./rightForm.styles";

const useStyles = makeStyles(rightFormStyles);

const RightForm = ({ open, handleClose, data }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    setName(data.name);
    setPrice(data.price);
  }, [data]);
  return (
    <div
      className={clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}
    >
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          className={classes.field}
        />
        <TextField
          id="outlined-basic"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
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
        <Box className={classes.buttons} onClick={handleClose}>
          <Button variant="contained">Save</Button>
          <Button variant="contained" className={classes.actionButton}>
            Cancel
          </Button>
          <Button variant="contained" className={classes.actionButton}>
            Delete
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default RightForm;
