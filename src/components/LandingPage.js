import React from "react";
import Navigation from "./Navigation";
import Hero from "./HeroComponent";
import Intro from "./IntroComponent";
import Footer from "./footerComponent";

function LandingPage() {
  return (
    <React.Fragment>
      <Navigation />
      <Hero />
      <Intro />
      <Footer />
    </React.Fragment>
  );
}

export default LandingPage;
