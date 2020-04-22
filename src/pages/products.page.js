import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import EmojiFoodBeverageIcon from "@material-ui/icons/EmojiFoodBeverage";
import CakeIcon from "@material-ui/icons/Cake";
import { PRODUCTS } from "../data/products";
import { rightDrawerWidth } from "../styles/theme";
import { productPageStyles } from "./productPage.styles";

const useStyles = makeStyles(productPageStyles);

const ProductsPage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: ""
  });

  return (
    <Box className={classes.container}>
      <div style={{ marginRight: `${open ? `${rightDrawerWidth}px` : "0"}` }}>
        <ExpansionPanel className={classes.panel} elevation={5}> 
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon fontSize="large" />}
          >
            <EmojiFoodBeverageIcon fontSize="large" color="primary" />
            <Typography variant="h4">&nbsp; Hot Drinks</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              {PRODUCTS.drinks.map((item, id) => (
                <Grid item xs={12} sm={6} md={3} key={id}>
                  <ProductCard
                    item={item}
                    openForm={() => {
                      setOpen(true);
                      setData({
                        ...data,
                        name: item.name,
                        price: item.price
                      });
                    }}
                  />
                </Grid>
              ))}
              <AddNew openForm={() => setOpen(true)} />
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel className={classes.panel} elevation={5}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon fontSize="large" />}
          >
            <CakeIcon fontSize="large" color="primary" />
            <Typography variant="h4">&nbsp; Cakes</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={3}>
              {PRODUCTS.cakes.map((item, id) => (
                <Grid item xs={12} sm={6} md={3} key={id}>
                  <ProductCard
                    item={item}
                    openForm={() => {
                      setOpen(true);
                      setData({
                        ...data,
                        name: item.name,
                        price: item.price
                      });
                    }}
                  />
                </Grid>
              ))}
              <AddNew openForm={() => setOpen(true)} />
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <RightForm open={open} handleClose={() => setOpen(false)} data={data} />
    </Box>
  );
};

export default ProductsPage;
