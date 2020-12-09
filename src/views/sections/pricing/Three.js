import React, { Component } from "react";
import { Check, X } from "react-feather";
import { Card, CardBody, Row, Col, Button } from "reactstrap";

export default class Three extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="divider text-left">
          <div className="divider-text">3rd Example</div>
        </div>
        <Card className="bg-primary text-center">
          <CardBody className="container">
            <h1 className="font-large-3 mt-5 font-bebas text-center text-white">
              Pricing
            </h1>
            <p className="font-medium-2 text-center text-white">
              Pick a plan from our affordable options
            </p>
            <Row className="mt-5 mb-5">
              <Col lg="3" md="6" sm="12" className="mt-1">
                <Card className="shadow p-2 border-primary">
                  <h2>Basic</h2>
                  <h4>$9.99 per month</h4>
                  <hr />
                  <p className="mt-1 mb-1">
                    Vestibulum vitae rhoncus dolor, vel ullamcorper dui. Sed
                    pharetra pellentesque aliquet.
                  </p>
                  <Button.Ripple
                    className="mr-1 mb-1 square btn-block mt-2"
                    color="primary"
                  >
                    Buy Now
                  </Button.Ripple>
                </Card>
              </Col>
              <Col lg="3" md="6" sm="12" className="mt-1">
                <Card className="shadow p-2 border-primary">
                  <h2>Plus</h2>
                  <h4>$19.99 per month</h4>
                  <hr />
                  <p className="mt-1 mb-1">
                    Vestibulum vitae rhoncus dolor, vel ullamcorper dui. Sed
                    pharetra pellentesque aliquet.
                  </p>
                  <Button.Ripple
                    className="mr-1 mb-1 square btn-block mt-2"
                    color="primary"
                  >
                    Buy Now
                  </Button.Ripple>
                </Card>
              </Col>
              <Col lg="3" md="6" sm="12" className="mt-1">
                <Card className="shadow p-2 border-primary">
                  <h2>Premium</h2>
                  <h4>$29.99 per month</h4>
                  <hr />
                  <p className="mt-1 mb-1">
                    Vestibulum vitae rhoncus dolor, vel ullamcorper dui. Sed
                    pharetra pellentesque aliquet.
                  </p>
                  <Button.Ripple
                    className="mr-1 mb-1 square btn-block mt-2"
                    color="primary"
                  >
                    Buy Now
                  </Button.Ripple>
                </Card>
              </Col>
              <Col lg="3" md="6" sm="12" className="mt-1">
                <Card className="shadow p-2 border-primary">
                  <h2>Unlimited</h2>
                  <h4>$39.99 per month</h4>
                  <hr />
                  <p className="mt-1 mb-1">
                    Vestibulum vitae rhoncus dolor, vel ullamcorper dui. Sed
                    pharetra pellentesque aliquet.
                  </p>
                  <Button.Ripple
                    className="mr-1 mb-1 square btn-block mt-2"
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
