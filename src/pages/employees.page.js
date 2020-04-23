import React from "react";
import { Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import EmployeesTable from "../components/Tables/employeesTable.component";
import Paper from "@material-ui/core/Paper";
import EmployeeProfile from "../components/Cards/employeeProfile.component";
import { employeesPageStyles } from "./employeesPage.styles";

const useStyles = makeStyles(employeesPageStyles);

const EmployeesPage = ({ match }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Route exact path={`${match.path}`} component={EmployeesTable} />
      <Route path={`${match.path}/:employeeId`} component={EmployeeProfile} />
    </Paper>
  );
};

export default EmployeesPage;
