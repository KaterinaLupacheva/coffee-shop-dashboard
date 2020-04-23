import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import EmployeeImageCard from "../Cards/employeeImageCard.component";
import { EMPLOYEES } from "../../data/employees";

const useStyles = makeStyles({});

const EmployeeProfile = ({ match }) => {
  const classes = useStyles();
  const profile = EMPLOYEES[match.params.employeeId];
  return (
    <Grid item xs={12} md={4} lg={3}>
      <EmployeeImageCard profile={profile} />
    </Grid>
  );
};

export default EmployeeProfile;
