export const actionButtonsStyles = theme => ({
  buttons: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",

    "& button": {
      background: theme.palette.background.card,
      color: theme.palette.primary.main,
      fontWeight: "bold"
    }
  }
});
