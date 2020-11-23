import React from "react";
import { Server } from "react-feather";
import { Card, CardBody, Button, Row, Col } from "reactstrap";

class Error500 extends React.Component {
  render() {
    return (
      <Row className="m-0">
        <Col sm="12">
          <Card className="auth-card bg-transparent shadow-none rounded-0 mb-0 w-100">
            <CardBody className="text-center">
              <Server size="150" />
              <h1 className="font-large-2 my-2 mt-3">
                500 - Internal Server Error!
              </h1>
              <Button.Ripple
                tag="a"
                href="/"
                color="primary"
                size="lg"
                className="mt-2"
              >
                Back to Home
              </Button.Ripple>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default Error500;
