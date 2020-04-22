import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EmployeesTable from "../components/Tables/employeesTable.component";
import Paper from "@material-ui/core/Paper";
import { employeesPageStyles } from "./employeesPage.styles";

const useStyles = makeStyles(employeesPageStyles);

const EmployeesPage = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <EmployeesTable />
    </Paper>
  );
};

export default EmployeesPage;
