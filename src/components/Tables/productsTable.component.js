import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./title";
import { PRODUCTS } from "../../data/products";

// Generate Order Data
const createData = (id, name, price) => {
  return { id, name, price };
};

const createRows = () => {
  let rows = [];
  PRODUCTS.forEach((product, idx) => {
    rows.push(createData(idx, product.name, product.price));
  });
  return rows;
};

const rows = createRows();

const preventDefault = event => {
  event.preventDefault();
};

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

const ProductsTable = () => {
  const classes = useStyles();
  return (
    <>
      <Title>Products</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Unit Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ProductsTable;
