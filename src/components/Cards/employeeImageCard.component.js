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
  Paper,
  Divider
} from "@material-ui/core";
import { employeeImageCardStyles } from "./employeeImageCard.styles";

const useStyles = makeStyles(employeeImageCardStyles);

const EmployeeImageCard = ({ profile }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.container} elevation={5}>
      <Card className={classes.root}>
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
          <Typography
            className={classes.pos}
            color="textSecondary"
            variant="body1"
          >
            {profile.position}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <Button size="small" variant="contained" className={classes.button}>Change Image</Button>
        </CardActions>
      </Card>
    </Paper>
  );
};

export default EmployeeImageCard;
