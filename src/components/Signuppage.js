import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from "reactstrap";
import SimpleNav from "./SimpleNav";

class SignUpPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      touched: {
        firstName: false,
        lastName: false,
        password: false,
        email: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate(firstName, lastName, email, password) {
    const errors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    if (this.state.touched.firstName) {
      if (firstName.length < 2) {
        errors.firstName = "First name must be at least 2 characters.";
      } else if (firstName.length > 15) {
        errors.firstName = "First name must be 15 or less characters.";
      }
    }

    if (this.state.touched.lastName) {
      if (lastName.length < 2) {
        errors.lastName = "Last name must be at least 2 characters.";
      } else if (lastName.length > 15) {
        errors.lastName = "Last name must be 15 or less characters.";
      }
    }

    const reg = /^\d+$/;
    if (this.state.touched.password && !reg.test(password)) {
      errors.password = "The pasword should contain only numbers.";
    }

    if (this.state.touched.email && !email.includes("@")) {
      errors.email = "Email should contain a @";
    }

    return errors;
  }

  handleBlur = (field) => () => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert("Current state is: " + JSON.stringify(this.state));
    event.preventDefault();
  }
  render() {
    const errors = this.validate(
      this.state.firstName,
      this.state.lastName,
      this.state.email,
      this.state.password
    );

    return (
      <React.Fragment>
        <SimpleNav />
        <div className="container">
          <div className="row row-content">
            <div className="col-12 my-5">
              <h2>Sign up</h2>
              <hr />
            </div>
            <div className="col-md-10 col-lg-8 mx-auto">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Label htmlFor="firstName" md={2} lg={3}>
                    First Name
                  </Label>
                  <Col md={10} lg={8}>
                    <Input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      value={this.state.firstName}
                      invalid={errors.firstName}
                      onBlur={this.handleBlur("firstName")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.firstName}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="lastName" md={2} lg={3}>
                    Last Name
                  </Label>
                  <Col md={10} lg={8}>
                    <Input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      value={this.state.lastName}
                      invalid={errors.lastName}
                      onBlur={this.handleBlur("lastName")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.lastName}</FormFeedback>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="email" md={2} lg={3}>
                    Email
                  </Label>
                  <Col md={10} lg={8}>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={this.state.email}
                      invalid={errors.email}
                      onBlur={this.handleBlur("email")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.email}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="password" md={2} lg={3}>
                    Password
                  </Label>
                  <Col md={10} lg={8}>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Create Password"
                      value={this.state.password}
                      invalid={errors.password}
                      onBlur={this.handleBlur("password")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.password}</FormFeedback>
                  </Col>
                </FormGroup>
                <div className="row">
                  <Col md={{ size: 10, offset: 2 }} lg={{ size: 8, offset: 3 }}>
                    <p>
                      By signing up, you agree to our{" "}
                      <Link to="/">Terms of Service</Link> and{" "}
                      <Link to="/">Private Policy</Link> and to receive notice
                      on event and services.
                    </p>
                  </Col>
                </div>
                <FormGroup row>
                  <Col md={{ size: 10, offset: 2 }} lg={{ size: 8, offset: 3 }}>
                    <Button type="submit" color="primary" className="btn-block">
                      Sign up
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
              <div className="row">
                <Col md={{ size: 10, offset: 2 }} lg={{ size: 8, offset: 3 }}>
                  <p>
                    Already a Member?
                    <Link to="/loginpage"> Log in</Link>
                  </p>
                </Col>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default SignUpPage;
