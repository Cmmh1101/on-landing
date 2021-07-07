import React from "react";
import { NavbarBrand } from "reactstrap";

function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container py-5">
        <div className="row">
          <div className="col-6 text-center d-flex justify-content-center align-items-center">
            <NavbarBrand className="text-white" href="/">
              OurNet
            </NavbarBrand>
          </div>

          <div className="col-6 text-center text-white social-icons">
            <h5 className="text-white">Follow us</h5>
            <a href="http://instagram.com/">
              <i className="fa fa-instagram" />
            </a>{" "}
            <a href="http://www.facebook.com/">
              <i className="fa fa-facebook" />
            </a>{" "}
            <a href="http://twitter.com/">
              <i className="fa fa-twitter" />
            </a>{" "}
            <a href="http://youtube.com/">
              <i className="fa fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
