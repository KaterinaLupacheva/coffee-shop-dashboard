import { createMuiTheme } from "@material-ui/core/styles";
import { teal, green, red, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#99613f",
    },
    // secondary: {
    //   main: '#19857b',
    // },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f2ece9",
      card: "#e0d4ce",
      menu: "#3DDAD7",
      tealBg: teal["A400"],
      purpleBg: purple[300],
    },
    text: {
      white: "#fff",
      green: green[900],
      red: red["A700"],
    },
  },
});

export default theme;

export const drawerWidth = 240;

export const rightDrawerWidth = 300;
