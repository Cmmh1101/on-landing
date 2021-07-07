import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";

function Hero(props) {
  return (
    <React.Fragment>
      <Jumbotron className="landing-hero">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-5 text-center mx-lg-auto d-flex justify-content-center align-items-center">
              <div className="text-md-left">
                <h1 className="display-3">
                  OurNet,
                  <br />
                  <span className="orange-span"> YourNet Organizer</span>!
                </h1>
                <p className="lead">
                  OurNet is the best place to keep track of important group
                  events, news, recommentations, plans, and more!
                </p>
                <p className="lead">
                  <Link to="/signuppage" className="btn btn-primary">
                    Sign up - OurNet is Free!
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-5 mx-lg-auto  d-flex justify-content-center align-items-center">
              <div>
                <img
                  className="img-fluid"
                  src="/assets/images/phone.png"
                  alt="Phone"
                />
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    </React.Fragment>
  );
}

export default Hero;
