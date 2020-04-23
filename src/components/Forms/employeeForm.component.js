import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, MenuItem } from "@material-ui/core";
import { positions } from "../../data/employees";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const EmployeeForm = () => {
  const classes = useStyles();
  const [position, setPosition] = useState(positions[0]);
  return (
    <Paper>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField placeholder="First Name" variant="filled" />
        <TextField placeholder="Last Name" variant="filled" />
        <TextField placeholder="Email" variant="filled" />
        <TextField placeholder="Phone" variant="filled" />
        <TextField placeholder="City" variant="filled" />
        <TextField placeholder="State" variant="filled" />
        <TextField
          select
          label="Position"
          variant="filled"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          {positions.map((pos) => (
            <MenuItem key={pos} value={pos}>
              {pos}
            </MenuItem>
          ))}
        </TextField>
      </form>
    </Paper>
  );
};

export default EmployeeForm;
