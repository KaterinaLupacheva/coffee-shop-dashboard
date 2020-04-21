import React from "react";
import Grid from "@material-ui/core/Grid";
import ProductCard from "../components/Cards/productCard.component";
import AddNew from "../components/Cards/addNewCard.component";
import { PRODUCTS } from "../data/products";

const ProductsPage = () => {
  return (
    <>
      {PRODUCTS.map((item, id) => (
        <Grid item xs={12} sm={6} md={3} key={id}>
          <ProductCard item={item} />
        </Grid>
      ))}
      <AddNew />
    </>
  );
};

export default ProductsPage;
