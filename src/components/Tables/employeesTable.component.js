import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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
            <TableCell className={classes.head}>Location</TableCell>
            <TableCell className={classes.head}>Phone</TableCell>
            <TableCell className={classes.head}>Position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              className={classes.row}
              onClick={() => history.push(`${match.url}/${row.id}`)}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.location}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default withRouter(EmployeesTable);
