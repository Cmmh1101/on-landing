import React from "react";
import LandingPage from "./LandingPage";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./NavigationComponent";
import Footer from "./footerComponent";
import About from "./AboutComponent";
import Features from "./FeaturesComponent";
import FrequentQuestions from "./FrecuentQuestionsComponent";
import ContactUs from "./ContactUsComponent";

function Main() {
  return (
    <React.Fragment>
      <Navigation />
      <Switch>
        <Route path="/home" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/features" component={Features} />
        <Route exact path="/frequentquestions" component={FrequentQuestions} />
        <Route exact path="/contactus" component={ContactUs} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default Main;
