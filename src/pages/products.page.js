import React, { useState } from "react";
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Box
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ProductCard from "../components/Cards/productCard.component";
import AddNew from "../components/Cards/addNewCard.component";
import RightForm from "../components/Forms/rightForm.component";
import { PRODUCTS } from "../data/products";
import { rightDrawerWidth } from "../styles/theme";

const ProductsPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <div style={{ marginRight: `${open ? `${rightDrawerWidth}px` : "0"}` }}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon fontSize="large" />}
          >
            <Typography variant="h4">Hot Drinks</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              {PRODUCTS.map((item, id) => (
                <Grid item xs={12} sm={6} md={3} key={id}>
                  <ProductCard item={item} openForm={() => setOpen(true)} />
                </Grid>
              ))}
              <AddNew />
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <RightForm open={open} />
    </Box>
  );
};

export default ProductsPage;
