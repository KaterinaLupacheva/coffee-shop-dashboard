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
import ActionButtons from "./actionButtons.component";
import { rightFormStyles } from "./rightForm.styles";

const useStyles = makeStyles(rightFormStyles);

const RightForm = ({ open, handleClose, data }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [disabled, setDisabled] = useState(true);

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
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          variant="outlined"
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
        <Box>
          <FormControlLabel
            onChange={() => setDisabled(false)}
            control={<Switch color="primary" />}
            label="On sale"
          />
          <TextField
            disabled={disabled}
            size="small"
            variant="outlined"
            placeholder="-20%"
            className={classes.saleField}
          />
        </Box>
        <ActionButtons handleClose={handleClose} />
      </form>
    </div>
  );
};

export default RightForm;
