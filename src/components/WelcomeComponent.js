import React from "react";
import "../css/Welcome.css";
import YourNet from "./YourNetComponent";

function Welcome() {
  return (
    <div className="container appBody">
      <div className="row">
        <div className="col-12 col-lg-10 my-3">
          <h1 className="mb-3">Welcome to OurNet</h1>
          <p className="my-3">
            OurNet is perfect to be shared with members of your troop, family,
            member of YourNet. You can be a part of different troops and access
            your accounts from any device.
          </p>
          <p className="text-center">
            <em>
              <b>- Plan - Share - Communicate - Enjoy Together -</b>
            </em>
          </p>
          <h4 className="my-3">Next Steps:</h4>
          <div className="col-12 steps d-flex flex-wrap justify-content-center align-items-center">
            <div className="col-md-6 col-lg-3 my-1 step">
              <p>Create YourNet and Invite new members to join</p>
            </div>
            <div className="col-md-6 col-lg-3 my-1 step">
              <p>Add your next events to your shared calendar</p>
            </div>
            <div className="col-md-6 col-lg-3 my-1 step">
              <p>Recommend movies, books, recipes, and more</p>
            </div>
            <div className="col-md-6 col-lg-3 my-1 step">
              <p>Share photos and video with your group</p>
            </div>
          </div>
          <hr />
        </div>

        <div className="row">
          <div className="col-12 my-3">
            <h4>YourNet</h4>
          </div>
          <div className="col">
            <YourNet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
