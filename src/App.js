import React from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./styles/theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "./pages/routes";
import DashboardPage from "./pages/dashboard.page";
import OrdersPage from "./pages/orders.page";
import EmployeesPage from "./pages/employees.page";
import ProductsPage from "./pages/products.page";
import AppBarWithSidebar from "./components/MainLayout/appBarWithSidebar.component";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <AppBarWithSidebar>
            <Switch>
              <Route exact path={ROUTES.DASHBOARD} component={DashboardPage} />
              <Route path={ROUTES.ORDERS} component={OrdersPage} />
              <Route path={ROUTES.EMPLOYEES} component={EmployeesPage} />
              <Route path={ROUTES.PRODUCTS} component={ProductsPage} />
            </Switch>
          </AppBarWithSidebar>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
