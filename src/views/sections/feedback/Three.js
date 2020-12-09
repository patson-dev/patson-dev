import React, { Component } from "react";
import { Card, CardBody, Row, Col, Media } from "reactstrap";

import img1 from "../../../assets/img/portrait/small/avatar-s-5.jpg";
import img2 from "../../../assets/img/portrait/small/avatar-s-6.jpg";
import img3 from "../../../assets/img/portrait/small/avatar-s-7.jpg";

export default class Three extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="divider text-left">
          <div className="divider-text">3rd Example</div>
        </div>
        <Card>
          <CardBody className="container">
            <h1 className="mt-5 font-large-3 text-center">Client Feedback</h1>
            <Row className="mb-5 mt-5">
              <Col lg="4" md="4" sm="12">
                <blockquote className="blockquote mt-2 pl-1 border-left-primary border-left-3">
                  <Media>
                    <Media left>
                      <Media
                        object
                        src={img1}
                        alt="Generic placeholder image"
                        className="img-lg mr-2"
                      />
                    </Media>
                    <Media body>
                      First client feedback statement goes here.
                    </Media>
                  </Media>
                  <footer className="blockquote-footer pl-5 mt-1">
                    John Doe{" "}
                  </footer>
                </blockquote>
              </Col>
              <Col lg="4" md="4" sm="12">
                <blockquote className="blockquote mt-2 pl-1 border-left-primary border-left-3">
                  <Media>
                    <Media left>
                      <Media
                        object
                        src={img2}
                        alt="Generic placeholder image"
                        className="img-lg mr-2"
                      />
                    </Media>
                    <Media body>
                      Second client feedback statement goes here.
                    </Media>
                  </Media>
                  <footer className="blockquote-footer pl-5 mt-1">
                    Jane Doe{" "}
                  </footer>
                </blockquote>
              </Col>
              <Col lg="4" md="4" sm="12">
                <blockquote className="blockquote mt-2 pl-1 border-left-primary border-left-3 mb-5">
                  <Media>
                    <Media left>
                      <Media
                        object
                        src={img3}
                        alt="Generic placeholder image"
                        className="img-lg mr-2"
                      />
                    </Media>
                    <Media body>
                      Third client feedback statement goes here.
                    </Media>
                  </Media>
                  <footer className="blockquote-footer pl-5 mt-1">
                    Lenny Doe{" "}
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
