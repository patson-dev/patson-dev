import React, { Component } from "react";
import { Card, CardBody, Button } from "reactstrap";

export default class Two extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="divider text-left">
          <div className="divider-text">2nd Example</div>
        </div>
        <Card className="full-view text-center">
          <CardBody className="container">
            <h1 className="font-large-3 mt-5 font-bebas text-center">
              SKY DIVING
            </h1>
            <p className="font-large-1 text-center">
              Challenge yourself by testing your limits!
            </p>
            <Button.Ripple color="primary" className="mt-5 square shadow-sm">
              SIGN UP TODAY
            </Button.Ripple>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
