import React from "react";
import Hero from "./HeroComponent";
import Intro from "./IntroComponent";

function LandingPage() {
  return (
    <React.Fragment>
      <Hero />
      <Intro />
    </React.Fragment>
  );
}

export default LandingPage;
