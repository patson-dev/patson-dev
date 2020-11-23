import React from "react";
import { AlertOctagon } from "react-feather";
import { Card, CardBody, Button, Row, Col } from "reactstrap";

class Maintenance extends React.Component {
  render() {
    return (
      <Row className="m-0">
        <Col sm="12">
          <Card className="auth-card bg-transparent shadow-none rounded-0 mb-0 w-100">
            <CardBody className="text-center">
              <AlertOctagon size="150" />
              <h1 className="font-large-2 my-1">Under Maintenance!</h1>
              <p className="px-2 mb-0">
                Sorry, this site is currently under maintainance.
              </p>
              <Button.Ripple
                tag="a"
                href="/"
                color="primary"
                size="lg"
                className="mt-1"
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
export default Maintenance;
