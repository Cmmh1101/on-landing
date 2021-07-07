import React from "react";
import LandingPage from "./LandingPage";
import SignUpPage from "./Signuppage";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import DashboardPage from "./DashboardPage";

function Main() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/home" component={LandingPage} />
        <Route exact path="/features" />
        <Route exact path="/signuppage" component={SignUpPage} />
        <Route exact path="/loginpage" component={LoginPage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/dashboardpage" component={DashboardPage} />
        <Route exact path="/contactus" />
        <Redirect to="/home" />
      </Switch>
    </React.Fragment>
  );
}

export default Main;
