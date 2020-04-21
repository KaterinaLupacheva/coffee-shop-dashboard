import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {productCardStyles } from './productCard.styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider
} from "@material-ui/core";
import FreeBreakfastOutlinedIcon from "@material-ui/icons/FreeBreakfastOutlined";
import ListAltIcon from "@material-ui/icons/ListAlt";

const useStyles = makeStyles(productCardStyles);

const ProductCard = ({ item, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
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
        <Button size="small" color="primary">
          <FreeBreakfastOutlinedIcon />
          &nbsp; {item.price}
        </Button>
        <Button size="small" color="primary">
          <ListAltIcon /> {item.orders}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
