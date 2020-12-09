import React, { Component } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

export default class One extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="divider text-left">
          <div className="divider-text">1st Example</div>
        </div>
        <Card>
          <CardBody className="container">
            <h1 className="mt-5 font-large-3">Customer Feedback</h1>
            <Row className="mb-5 mt-5">
              <Col lg="4" md="4" sm="12">
                <blockquote className="blockquote pl-1 border-left-primary border-left-3 mt-2">
                  <p className="mb-0">
                    First customer feedback statement goes here.
                  </p>
                  <footer className="blockquote-footer mt-1">
                    Jane Doe{" "}
                    <cite title="Source Title">&nbsp;Happy customer</cite>
                  </footer>
                </blockquote>
              </Col>
              <Col lg="4" md="4" sm="12">
                <blockquote className="blockquote pl-1 border-left-primary border-left-3 mt-2">
                  <p className="mb-0">
                    Second customer feedback statement goes here.
                  </p>
                  <footer className="blockquote-footer mt-1">
                    John Doe{" "}
                    <cite title="Source Title">&nbsp;Happy customer</cite>
                  </footer>
                </blockquote>
              </Col>
              <Col lg="4" md="4" sm="12">
                <blockquote className="blockquote pl-1 border-left-primary border-left-3 mt-2 mb-5">
                  <p className="mb-0">
                    Third customer feedback statement goes here.
                  </p>
                  <footer className="blockquote-footer mt-1">
                    Lenny Doe{" "}
                    <cite title="Source Title">&nbsp;Happy customer</cite>
                  </footer>
                </blockquote>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
