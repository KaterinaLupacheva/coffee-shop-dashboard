import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./styles/theme";
import AppBarWithSidebar from "./components/MainLayout/appBarWithSidebar.component";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBarWithSidebar>TEST</AppBarWithSidebar>
      </div>
    </ThemeProvider>
  );
}

export default App;
