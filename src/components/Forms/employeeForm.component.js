import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, MenuItem } from "@material-ui/core";
import ActionButtons from "./actionButtons.component";
import { positions } from "../../data/employees";
import { employeeFormStyles } from "./employeeForm.styles";

const useStyles = makeStyles(employeeFormStyles);

const EmployeeForm = () => {
  const classes = useStyles();
  const [position, setPosition] = useState(positions[0]);

  const handleClose = () => {};
  return (
    <Paper className={classes.container} elevation={5}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.field}
          placeholder="First Name"
          variant="filled"
        />
        <TextField
          className={classes.field}
          placeholder="Last Name"
          variant="filled"
        />
        <TextField
          className={classes.field}
          placeholder="Email"
          variant="filled"
        />
        <TextField
          className={classes.field}
          placeholder="Phone"
          variant="filled"
        />
        <TextField
          className={classes.field}
          placeholder="City"
          variant="filled"
        />
        <TextField
          className={classes.field}
          placeholder="State"
          variant="filled"
        />
        <TextField
          className={classes.field}
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
        <ActionButtons handleClose={handleClose} />
      </form>
    </Paper>
  );
};

export default EmployeeForm;
