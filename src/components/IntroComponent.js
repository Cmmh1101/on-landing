import React from "react";

function Intro() {
  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-md-6 col-lg-5 mx-lg-auto">
          <h2>
            Friends, family events & recommendations have never been easier to
            manage
          </h2>
          <p>Trust OurNet to manage YourNet:</p>
          <p className="my-3">
            <i className="fa fa-commenting-o" aria-hidden="true" /> Comments
          </p>
          <p className="my-3">
            <i className="fa fa-calendar" aria-hidden="true" /> Calendar of
            activities and important events
          </p>
          <p className="my-3">
            <i className="fa fa-file-image-o" aria-hidden="true" /> Share photos
            and videos with your group
          </p>
          <p className="my-3">
            <i className="fa fa-list" aria-hidden="true" /> Books, movies,
            recipes, and more Recommendations
          </p>
          <p className="my-3">
            <i className="fa fa-comments" aria-hidden="true" /> Instant messages
          </p>
        </div>
        <div className="col-md-6 col-lg-5 mx-lg-auto d-flex justify-content-center align-items-center">
          <div className="intro-image">
            <img
              className="img-fluid"
              src="/assets/images/groupmeet.jpg"
              alt="Group meet"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
