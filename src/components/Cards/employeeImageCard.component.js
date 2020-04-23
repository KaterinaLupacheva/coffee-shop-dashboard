import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import {employeeImageCardStyles} from './employeeImageCard.styles';

const useStyles = makeStyles(employeeImageCardStyles);

const EmployeeImageCard = ({ profile }) => {
    const classes = useStyles();
  return (
    <Card variant="outlined">
      <CardContent>
        <Box className={classes.imageName}>
          <CardMedia
            className={classes.media}
            image={require(`../../assets/images/${profile.photo}.jpg`)}
            title="Employee image"
          />
          <Typography variant="h5" component="h2">
            {profile.name}
          </Typography>
        </Box>
        <Typography className={classes.pos} color="textSecondary" variant='body1'>
          {profile.position}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Change Image</Button>
      </CardActions>
    </Card>
  );
};

export default EmployeeImageCard;
