import React, { Component } from "react";
import { Check, X } from "react-feather";
import { Card, CardBody, Row, Col, Button } from "reactstrap";

export default class Two extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="divider text-left">
          <div className="divider-text">2nd Example</div>
        </div>
        <Card className="bg-transparent shadow-none">
          <CardBody className="container">
            <Row className="mt-5 mb-5">
              <Col lg="4" md="6" sm="12" className="mt-1">
                <h1 className="font-large-3 font-bebas">Pricing</h1>
                <p className="font-medium-2">
                  We provide the best value on the market
                </p>
              </Col>
              <Col lg="4" md="6" sm="12" className="mt-1">
                <Card className="shadow p-2 border-dark">
                  <h2>Plus</h2>
                  <h4>$99.99 per month</h4>
                  <ul className="list-unstyled mt-2 pl-1">
                    <li>
                      <Check size="20" className="text-success" />
                      &nbsp;&nbsp;Basic Access
                    </li>
                    <li>
                      <Check size="20" className="text-success" />
                      &nbsp;&nbsp;Access to Updates
                    </li>
                    <li>
                      <Check size="20" className="text-success" />
                      &nbsp;&nbsp;Basic Features
                    </li>
                    <li>
                      <Check size="20" className="text-success" />
                      &nbsp;&nbsp;All Components
                    </li>
                    <li>
                      <X size="20" className="text-danger" />
                      &nbsp;&nbsp;Premium Support
                    </li>
                  </ul>
                  <Button.Ripple
                    className="mr-1 mb-1 square btn-block mt-2"
                    outline
                    color="primary"
                  >
                    Buy Now
                  </Button.Ripple>
                </Card>
              </Col>
              <Col lg="4" md="6" sm="12" className="mt-1">
                <Card className="shadow p-2 border-dark">
                  <h2>Premium</h2>
                  <h4>$199.99 per month</h4>
                  <ul className="list-unstyled mt-2 pl-1">
                    <li>
                      <Check size="20" className="text-success" />
                      &nbsp;&nbsp;Premium Access
                    </li>
                    <li>
                      <Check size="20" className="text-success" />
                      &nbsp;&nbsp;Access to Updates
                    </li>
                    <li>
                      <Check size="20" className="text-success" />
                      &nbsp;&nbsp;Basic Features
                    </li>
                    <li>
                      <Check size="20" className="text-success" />
                      &nbsp;&nbsp;All Components
                    </li>
                    <li>
                      <Check size="20" className="text-success" />
                      &nbsp;&nbsp;Premium Support
                    </li>
                  </ul>{" "}
                  <Button.Ripple
                    className="mr-1 mb-1 square btn-block mt-2"
                    outline
                    color="primary"
                  >
                    Buy Now
                  </Button.Ripple>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
