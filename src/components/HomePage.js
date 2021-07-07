import React from "react";

import Welcome from "./WelcomeComponent";

function HomePage() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col my-5">
            <Welcome />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
