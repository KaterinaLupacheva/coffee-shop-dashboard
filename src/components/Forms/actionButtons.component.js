import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Box, Button} from "@material-ui/core";
import {actionButtonsStyles} from './actionButtons.styles';

const useStyles = makeStyles(actionButtonsStyles);

const ActionButtons = ({handleClose}) => {
    const classes = useStyles();
    return(
        <Box className={classes.buttons} onClick={handleClose}>
          <Button variant="contained">Save</Button>
          <Button variant="contained">Cancel</Button>
          <Button variant="contained">Delete</Button>
        </Box>
    )
};

export default ActionButtons;