import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Navbar className="landing-navbar" color="primary" dark expand="md">
        <div className="container">
          <NavbarBrand href="/">OurNet</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto">
              <Link to="/loginpage" className="btn btn-info text-dark">
                Log in
              </Link>{" "}
              <Link to="/signuppage" className="btn btn-warning text-dark">
                Sign Up
              </Link>{" "}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default Navigation;
