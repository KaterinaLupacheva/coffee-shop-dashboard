import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { productCardStyles } from "./productCard.styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider,
  Tooltip,
} from "@material-ui/core";
import FreeBreakfastOutlinedIcon from "@material-ui/icons/FreeBreakfastOutlined";
import ListAltIcon from "@material-ui/icons/ListAlt";

const useStyles = makeStyles(productCardStyles);

const ProductCard = ({ item, openForm, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {item.sale && (
        <div className={classes.ribbon}>
          <span>{`${item.sale}`}</span>
        </div>
      )}
      <CardActionArea onClick={openForm}>
        <CardMedia
          className={classes.media}
          image={require(`../../assets/images/${item.photo}.jpg`)}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions className={classes.actions}>
        <Tooltip title={"price per unit"}>
          <Button size="small" color="primary">
            <FreeBreakfastOutlinedIcon />
            &nbsp; {item.price}
          </Button>
        </Tooltip>
        <Tooltip title={"today orders"}>
          <Button size="small" color="primary">
            <ListAltIcon /> {item.orders}
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
