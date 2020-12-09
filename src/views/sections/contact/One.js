import React, { Component } from "react";
import {
  Map,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  User,
  Smartphone,
  Edit,
} from "react-feather";
import {
  Card,
  CardBody,
  Button,
  Row,
  Col,
  Label,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

export default class One extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="divider text-left">
          <div className="divider-text">1st Example</div>
        </div>
        <Card>
          <CardBody className="container">
            <h1 className="mt-5 font-large-2">Contact Us</h1>
            <Row className="mt-3">
              <Col lg="6" md="6" sm="12">
                <span className="font-medium-2">
                  <Map size="20" />
                  &nbsp;&nbsp;Address
                </span>
                <p className="font-medium-1 mt-1">50665 Holden Forest Drive</p>
                <span className="font-medium-2 mt-5">
                  <Phone size="20" />
                  &nbsp;&nbsp;Phone
                </span>
                <p className="font-medium-1 mt-1">+1 919 555 0000</p>
              </Col>
              <Col lg="6" md="6" sm="12">
                {" "}
                <Form>
                  <Row>
                    <Col sm="12">
                      <p className="font-medium-3 mt-1 mb-3">
                        Feel Free to contact us and we'll get back to you as
                        soon as possible.
                      </p>
                      <FormGroup className="has-icon-left form-label-group position-relative">
                        <Input
                          type="text"
                          name="name"
                          id="nameFloatingIcons"
                          placeholder="Full Name"
                        />
                        <div className="form-control-position">
                          <User size={15} />
                        </div>
                        <Label for="nameFloatingIcons">Full Name</Label>
                      </FormGroup>
                    </Col>
                    <Col sm="12">
                      <FormGroup className="has-icon-left form-label-group position-relative">
                        <Input
                          type="email"
                          name="Email"
                          id="EmailFloatingIcons"
                          placeholder="Email"
                        />
                        <div className="form-control-position">
                          <Mail size={15} />
                        </div>
                        <Label for="EmailFloatingIcons">Email</Label>
                      </FormGroup>
                    </Col>
                    <Col sm="12">
                      <FormGroup className="has-icon-left form-label-group position-relative">
                        <Input
                          type="number"
                          name="mobile"
                          id="IconsMobileFloating"
                          placeholder="Mobile"
                        />
                        <div className="form-control-position">
                          <Smartphone size={15} />
                        </div>
                        <Label for="IconsMobileFloating">Mobile</Label>
                      </FormGroup>
                    </Col>
                    <Col sm="12">
                      <FormGroup className="has-icon-left form-label-group position-relative">
                        <Input
                          type="textarea"
                          name="textarea"
                          id="IconsMessageFloating"
                          placeholder="Message"
                        />
                        <div className="form-control-position">
                          <Edit size={15} />
                        </div>
                        <Label for="IconsMessageFloating">Message</Label>
                      </FormGroup>
                    </Col>
                    <Col sm="12">
                      <FormGroup className="has-icon-left form-label-group position-relative">
                        <Button.Ripple
                          color="primary"
                          type="submit"
                          className="mr-1 mb-1 square"
                          onClick={(e) => e.preventDefault()}
                        >
                          Send Message
                        </Button.Ripple>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <ul className="list-inline mt-5">
              <li className="list-inline-item font-medium-1">
                <Facebook size="20" /> Facebook
              </li>
              <li className="list-inline-item font-medium-1">
                <Instagram size="20" /> Instagram
              </li>
              <li className="list-inline-item font-medium-1">
                <Twitter size="20" /> Twitter
              </li>
            </ul>
          </CardBody>
        </Card>
      </React.Fragment>
    );
  }
}
