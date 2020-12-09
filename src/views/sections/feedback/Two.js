import React, { Component } from "react";
import { Card, CardBody, Row, Col, Media } from "reactstrap";

import img1 from "../../../assets/img/portrait/small/avatar-s-5.jpg";
import img2 from "../../../assets/img/portrait/small/avatar-s-6.jpg";
import img3 from "../../../assets/img/portrait/small/avatar-s-7.jpg";

export default class Two extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="divider text-left">
          <div className="divider-text">2nd Example</div>
        </div>
        <Card>
          <CardBody className="container">
            <h1 className="mt-5 font-large-3 text-center">Feedback</h1>
            <h5 className="mb-5 text-center font-medium-3">
              Here is what our customers are saying
            </h5>
            <Row className="mb-5 mt-5">
              <Col lg="4" md="4" sm="12">
                <blockquote className="blockquote mt-2">
                  <Media>
                    <Media left>
                      <Media
                        object
                        src={img1}
                        alt="Generic placeholder image"
                        className="img-lg rounded-circle mr-2"
                      />
                    </Media>
                    <Media body>
                      First customer feedback statement goes here.
                    </Media>
                  </Media>
                  <footer className="blockquote-footer pl-5 mt-1">
                    John Doe{" "}
                  </footer>
                </blockquote>
              </Col>
              <Col lg="4" md="4" sm="12">
                <blockquote className="blockquote mt-2">
                  <Media>
                    <Media left>
                      <Media
                        object
                        src={img2}
                        alt="Generic placeholder image"
                        className="img-lg rounded-circle mr-2"
                      />
                    </Media>
                    <Media body>
                      Second customer feedback statement goes here.
                    </Media>
                  </Media>
                  <footer className="blockquote-footer pl-5 mt-1">
                    Jane Doe{" "}
                  </footer>
                </blockquote>
              </Col>
              <Col lg="4" md="4" sm="12">
                <blockquote className="blockquote mt-2 mb-5">
                  <Media>
                    <Media left>
                      <Media
                        object
                        src={img3}
                        alt="Generic placeholder image"
                        className="img-lg rounded-circle mr-2"
                      />
                    </Media>
                    <Media body>
                      Third customer feedback statement goes here.
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
