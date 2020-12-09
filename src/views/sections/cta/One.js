import React, { Component } from "react";
import { ArrowRight } from "react-feather";
import { Card, CardBody, Button } from "reactstrap";

import bg from "../../../assets/img/pages/bg.jpg";

export default class One extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="divider text-left">
          <div className="divider-text">1st Example</div>
        </div>
        <Card
          className="full-view"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <CardBody className="container">
            <h1 className="font-large-3 mt-5 font-weight-bolder text-white">
              Eat Local
            </h1>
            <p className="font-medium-3 mt-2 text-white">
              Join us in supporting local farmers at the community farmer's
              market
            </p>
            <Button.Ripple
              color="white"
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
