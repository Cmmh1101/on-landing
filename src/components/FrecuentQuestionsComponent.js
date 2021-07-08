import React, { Component } from "react";
import { Card, CardHeader, Collapse, CardBody } from "reactstrap";

class FrequentQuestions extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: 0, cards: [1, 2, 3, 4, 5] };
  }
  toggle(e) {
    let event = e.target.dataset.event;
    this.setState({
      collapse: this.state.collapse === Number(event) ? 0 : Number(event),
    });
  }
  render() {
    const { cards, collapse } = this.state;
    return (
      <div className="container my-5">
        <h3 className="">Frequently Asked Questions</h3>
        {cards.map((index) => {
          return (
            <Card style={{ marginBottom: "1rem" }} key={index}>
              <CardHeader onClick={this.toggle} data-event={index}>
                Header 1
              </CardHeader>
              <Collapse isOpen={collapse === index}>
                <CardBody>Example</CardBody>
              </Collapse>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default FrequentQuestions;
