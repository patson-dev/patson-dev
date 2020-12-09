import React, { Component } from "react";
import { Card, CardBody, Button } from "reactstrap";

import bg from "../../../assets/img/pages/bg-2.jpg";

export default class Two extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="divider text-left">
          <div className="divider-text">2nd Example</div>
        </div>
        <Card
          className="full-view text-center"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <CardBody className="container">
            <h1 className="font-large-3 mt-5 font-bebas text-center text-white">
              SKY DIVING
            </h1>
            <p className="font-large-1 text-center text-white">
              Challenge yourself by testing your limits!
            </p>
            <Button.Ripple
              color="white"
              outline
              className="mt-5 square shadow-sm"
            >
              SIGN UP TODAY
            </Button.Ripple>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
