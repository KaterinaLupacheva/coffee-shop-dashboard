import React from "react";
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ProductCard from "../components/Cards/productCard.component";
import AddNew from "../components/Cards/addNewCard.component";
import { PRODUCTS } from "../data/products";

const ProductsPage = () => {
  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h4">Hot Drinks</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            {PRODUCTS.map((item, id) => (
              <Grid item xs={12} sm={6} md={3} key={id}>
                <ProductCard item={item} />
              </Grid>
            ))}
            <AddNew />
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
};

export default ProductsPage;
