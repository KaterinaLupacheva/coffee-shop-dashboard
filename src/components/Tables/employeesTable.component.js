import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Hidden
} from "@material-ui/core";
import Title from "./title";
import { EMPLOYEES } from "../../data/employees";
import { employeesTableStyles } from "./employeesTable.styles";

const createData = (id, name, email, location, phone, position) => {
  return { id, name, email, location, phone, position };
};

const createRows = () => {
  let rows = [];
  EMPLOYEES.forEach((emp, idx) => {
    rows.push(
      createData(
        idx,
        emp.name,
        emp.email,
        emp.location,
        emp.phone,
        emp.position
      )
    );
  });
  return rows;
};

const rows = createRows();

const useStyles = makeStyles(employeesTableStyles);

const EmployeesTable = ({ history, match }) => {
  const classes = useStyles();

  return (
    <>
      <Title>Employees</Title>
      <Table className={classes.root}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.head}>Name</TableCell>
            <TableCell className={classes.head}>Email</TableCell>
            <Hidden xsDown>
              <TableCell className={classes.head}>Location</TableCell>
              <TableCell className={classes.head}>Phone</TableCell>
            </Hidden>
            <TableCell className={classes.head}>Position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow
              key={row.id}
              className={classes.row}
              onClick={() => history.push(`${match.url}/${row.id}`)}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <Hidden xsDown>
                <TableCell>{row.location}</TableCell>
                <TableCell>{row.phone}</TableCell>
              </Hidden>
              <TableCell>{row.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default withRouter(EmployeesTable);
