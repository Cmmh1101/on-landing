import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

const CopyNavigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.Fragment>
      <Navbar className="landing-navbar" color="primary" dark expand="md">
        <NavbarBrand href="/">OurNet</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mx-auto" navbar>
            {/* <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Support
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink className="text-primary" to="/">
                    Frequent Questions
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink className="text-primary" to="/">
                    Contact
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          <Link to="/" className="btn btn-info text-dark">
            Log in
          </Link>{" "}
          <Link to="/" className="btn btn-warning text-dark">
            Sign Up
          </Link>{" "}
        </Collapse>
      </Navbar>
    </React.Fragment>
  );
};

export default CopyNavigation;
