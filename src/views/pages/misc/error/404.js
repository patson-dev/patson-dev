import React from "react";
import { AlertTriangle } from "react-feather";
import { Card, CardBody, Button, Row, Col } from "reactstrap";

class Error404 extends React.Component {
  render() {
    return (
      <Row className="m-0">
        <Col sm="12">
          <Card className="auth-card bg-transparent shadow-none rounded-0 mb-0 w-100">
            <CardBody className="text-center">
              <AlertTriangle size="150" />
              <h1 className="font-large-2 my-1">404 - Page Not Found!</h1>
              <p className="pt-2 mb-0">
                SORRY, THE PAGE YOU ARE LOOKING FOR CANNOT BE FOUND.
              </p>
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
export default Error404;
