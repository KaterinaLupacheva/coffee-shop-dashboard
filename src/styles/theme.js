import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2A93D5", //bondi_blue
    },
    // secondary: {
    //   main: '#19857b',
    // },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
      menu: "#3DDAD7", //californian coral
    },
    //Waimea waters color palette from canva
    //glass: "#EDFAFD",
    // chill: "#AED9DA",
    //californian_coral: "#3DDAD7",
    //bondi_blue: "#2A93D5",
    // marina: "#135589"
  },
});

export default theme;

export const drawerWidth = 240;
