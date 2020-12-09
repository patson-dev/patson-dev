import React, { Component } from "react";
import { ArrowRight } from "react-feather";
import { Card, CardBody, Button } from "reactstrap";

export default class One extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="divider text-left">
          <div className="divider-text">1st Example</div>
        </div>
        <Card className="full-view">
          <CardBody className="container">
            <h1 className="font-large-3 mt-5">Eat Local</h1>
            <p className="font-medium-3 mt-2">
              Join us in supporting local farmers at the community farmer's
              market
            </p>
            <Button.Ripple
              color="primary"
              outline
              className="mt-3 round font-weight-bold"
            >
              Learn more&nbsp;
              <ArrowRight />
            </Button.Ripple>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
