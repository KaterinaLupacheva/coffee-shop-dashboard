import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, MenuItem, Divider } from "@material-ui/core";
import ActionButtons from "./actionButtons.component";
import { positions } from "../../data/employees";
import { employeeFormStyles } from "./employeeForm.styles";

const useStyles = makeStyles(employeeFormStyles);

const EmployeeForm = ({ employee, history }) => {
  const classes = useStyles();
  const [profile, setProfile] = useState(employee);

  const handleClose = () => {
    history.push("/employees");
  };

  const handleChange = (event) => {
    if (event.target.name === "first_name") {
      const name = event.target.value
        .concat(" ")
        .concat(profile.name.split(" ")[1]);
      setProfile({
        ...profile,
        name,
      });
    } else if (event.target.name === "last_name") {
      const name = profile.name
        .split(" ")[0]
        .concat(" ")
        .concat(event.target.value);
      setProfile({
        ...profile,
        name,
      });
    } else if (event.target.name === "city") {
      const location = event.target.value
        .concat(",")
        .concat(profile.location.split(",")[1]);
      setProfile({
        ...profile,
        location,
      });
    } else if (event.target.name === "state") {
      const location = profile.location
        .split(",")[0]
        .concat(" ,")
        .concat(event.target.value);
      setProfile({
        ...profile,
        location,
      });
    } else {
      setProfile({
        ...profile,
        [event.target.name]: [event.target.value],
      });
    }
  };
  return (
    <Paper className={classes.container} elevation={5}>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.field}
          label="First Name"
          name="first_name"
          size="small"
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.fieldFontSize,
            },
          }}
          value={profile.name.split(" ")[0]}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className={classes.field}
          label="Last Name"
          name="last_name"
          size="small"
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.fieldFontSize,
            },
          }}
          value={profile.name.split(" ")[1]}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className={classes.field}
          label="Email"
          name="email"
          size="small"
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.fieldFontSize,
            },
          }}
          value={profile.email}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className={classes.field}
          label="Phone"
          name="phone"
          size="small"
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.fieldFontSize,
            },
          }}
          value={profile.phone}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className={classes.field}
          label="City"
          name="city"
          size="small"
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.fieldFontSize,
            },
          }}
          value={profile.location.split(",")[0]}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className={classes.field}
          label="State"
          name="state"
          size="small"
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.fieldFontSize,
            },
          }}
          value={profile.location.split(",")[1]}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          className={classes.field}
          select
          name="position"
          label="Position"
          size="small"
          variant="outlined"
          InputProps={{
            classes: {
              input: classes.fieldFontSize,
            },
          }}
          value={profile.position}
          onChange={(e) => handleChange(e)}
        >
          {positions.map((pos) => (
            <MenuItem key={pos} value={pos}>
              {pos}
            </MenuItem>
          ))}
        </TextField>
        <Divider />
        <ActionButtons handleClose={handleClose} />
      </form>
    </Paper>
  );
};

export default withRouter(EmployeeForm);
