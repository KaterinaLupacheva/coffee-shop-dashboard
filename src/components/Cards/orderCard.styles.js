export const orderCardStyles = (theme) => ({
  root: {
    display: "flex",
    width: "100%",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
  },
  orderContainer: {
    display: "flex",
    flexDirection: "column",
  },
  green: {
    backgroundColor: theme.palette.background.tealBg,
  },
  purple: {
    backgroundColor: theme.palette.background.purpleBg,
  },
  orange: {
    backgroundColor: theme.palette.background.orangeBg,
  },
});
