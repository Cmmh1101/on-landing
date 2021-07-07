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

class LoginPage extends Component {
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
              <h2>Log in</h2>
              <hr />
            </div>
            <div className="col-md-10 col-lg-8 mx-auto">
              <Form onSubmit={this.handleSubmit}>
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
                      placeholder="Password"
                      value={this.state.password}
                      invalid={errors.password}
                      onBlur={this.handleBlur("password")}
                      onChange={this.handleInputChange}
                    />
                    <FormFeedback>{errors.password}</FormFeedback>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col md={{ size: 10, offset: 2 }} lg={{ size: 8, offset: 3 }}>
                    <Button type="submit" color="primary" className="btn-block">
                      Log in
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
              <div className="row">
                <Col md={{ size: 10, offset: 2 }} lg={{ size: 8, offset: 3 }}>
                  <p>
                    Forgot you password?
                    <Link to="/">
                      <b> Reset Password</b>
                    </Link>
                  </p>
                  <p>
                    First time in OurNet?
                    <Link to="/signuppage">
                      <b> Sign up here</b>{" "}
                    </Link>
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
export default LoginPage;
