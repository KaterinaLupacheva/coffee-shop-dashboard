import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import EmployeeImageCard from "./employeeImageCard.component";
import EmployeeForm from "../Forms/employeeForm.component";
import { EMPLOYEES } from "../../data/employees";

const useStyles = makeStyles({});

const EmployeeProfile = ({ match }) => {
  const classes = useStyles();
  const profile = EMPLOYEES[match.params.employeeId];
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}  lg={3}>
        <EmployeeImageCard profile={profile} />
      </Grid>
      <Grid item xs={12} sm={8}  lg={9}>
        <EmployeeForm />
      </Grid>
    </Grid>
  );
};

export default EmployeeProfile;
