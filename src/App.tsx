import React from "react";
import LoginPage from "./components/pages/LoginPage/LoginPage";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DashboardPage from "./components/pages/DashboardPage/DashboardPage";
import RegressionPage from "./components/pages/RegressionPage/RegressionPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route path="/register" component={RegisterPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/regression" component={RegressionPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
