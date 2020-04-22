import { rightDrawerWidth } from "../../styles/theme";

export const rightFormStyles = theme => ({
  appBarSpacer: theme.mixins.toolbar,
  drawerPaper: {
    position: "fixed",
    right: 0,
    height: "80vh",
    whiteSpace: "nowrap",
    width: rightDrawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    backgroundColor: theme.palette.background.card,
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      margin: "5vh"
    }
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
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  field: {
    padding: theme.spacing(3),
    paddingBottom: 0
  },
  saleField: {
    width: "30%"
  },
  button: {
    // margin: theme.spacing(5)
  },
  buttons: {
    // position: "fixed",
    // bottom: "20px"
  },
  actionButton: {
    marginLeft: theme.spacing(2)
  }
});
