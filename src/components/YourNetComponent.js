import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import { Link } from "react-router-dom";

class YourNet extends Component {
  render() {
    return (
      <React.Fragment>
        <CardDeck>
          <Link to="/homepage" className="link-card">
            <Card className="create-new__group group-card">
              <span className="create-new__group-add">+</span>

              <p>Create YourNet</p>
            </Card>
          </Link>

          <Link to="/dashboardpage" className="link-card">
            <Card className="group-card">
              <CardImg
                top
                width="100%"
                src="/assets/images/groupmeet.jpg"
                alt="Card image cap"
              />
              <CardBody className="text-center">
                <CardTitle tag="h5">YourNet</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  Co-workers
                </CardSubtitle>
                <CardText>Members: 10</CardText>
              </CardBody>
            </Card>
          </Link>
        </CardDeck>
      </React.Fragment>
    );
  }
}

export default YourNet;
