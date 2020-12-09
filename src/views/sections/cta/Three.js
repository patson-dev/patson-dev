import React, { Component } from "react";
import { Card, CardBody, Button } from "reactstrap";

export default class Three extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="divider text-left">
          <div className="divider-text">3rd Example</div>
        </div>
        <Card className="full-view">
          <CardBody className="container">
            <h1 className="font-large-3 mt-5 font-bebas">More Savings</h1>
            <p className="font-medium-2">
              Earn reward points and save more with your card.
            </p>
            <Button.Ripple color="primary" size="lg" className="mt-3">
              Get Started
            </Button.Ripple>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
