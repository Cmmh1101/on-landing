import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function SimpleNav() {
  return (
    <Navbar className="landing-navbar" color="primary" dark expand="md">
      <div className="container">
        <NavbarBrand className="mx-auto" href="/">
          OurNet
        </NavbarBrand>
      </div>
    </Navbar>
  );
}

export default SimpleNav;
