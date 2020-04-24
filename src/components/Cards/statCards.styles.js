export const statCardsStyles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  topRow: {
    height: "15vh",
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(1),
  },
  icon: {
    height: "10vh",
    width: "10vh",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  green: {
    color: theme.palette.text.green,
  },
  red: {
    color: theme.palette.text.red,
  },
  iconBgGreen: {
    background: theme.palette.background.tealBg,
  },
  iconBgPurple: {
    background: theme.palette.background.purpleBg,
  },
});
