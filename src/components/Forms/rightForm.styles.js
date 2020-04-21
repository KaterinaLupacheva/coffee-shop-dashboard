import { rightDrawerWidth } from "../../styles/theme";

export const rightFormStyles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  drawerPaper: {
    whiteSpace: "nowrap",
    width: rightDrawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    backgroundColor: theme.palette.background.card
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: 0
  },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  field: {
    padding: theme.spacing(5),
    paddingBottom: 0
  },
  button: {
    margin: theme.spacing(5)
  },
  buttons: {
    position: "fixed",
    bottom: "20px"
  },
  actionButton: {
    marginLeft: theme.spacing(2)
  }
});
