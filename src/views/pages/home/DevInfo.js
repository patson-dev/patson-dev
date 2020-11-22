import React, { Component } from "react";

import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  ButtonGroup,
  ListGroup,
  ListGroupItem,
  Media,
} from "reactstrap";
import { Layout, Linkedin, Twitter, Terminal } from "react-feather";

import img1 from "../../../assets/img/pages/patson.png";

export default class DevInfo extends Component {
  render() {
    return (
      <Row>
        <Col lg="4" md="6" sm="12">
          <Card>
            <CardBody>
              <Media>
                <Media left href="#">
                  <Media
                    className="rounded-circle"
                    object
                    src={img1}
                    height="80"
                    width="100"
                    alt="Generic placeholder image"
                  />
                </Media>
                <Media body>
                  <p className="mb-0 font-mono">Hi there, my name is</p>
                  <h3>Patson Nyandoro</h3>
                  <p className="mb-0 font-mono">I'm a</p>
                  <h3>Web Developer</h3>
                  <p className="font-mono mb-0">Find me on</p>
                  <ButtonGroup>
                    <a href="https://www.linkedin.com/in/patsonnyandoro">
                      <Button.Ripple color="primary" className="square">
                        <Linkedin size={15} />
                      </Button.Ripple>{" "}
                    </a>
                    <a href="https://twitter.com/patsondev">
                      <Button.Ripple color="primary" className="square">
                        <Twitter size={15} />
                      </Button.Ripple>{" "}
                    </a>
                  </ButtonGroup>
                </Media>
              </Media>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="12">
          <Card>
            <CardBody>
              <h3 className="font-large-1">Tech Skills</h3>
              <hr className="my-1" />
              <ListGroup>
                <ListGroupItem>
                  <p className="float-left mb-0 mr-1">
                    <i class="fab fa-react"></i>
                  </p>
                  <span className="font-mono">React</span>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="float-left mb-0 mr-1">
                    <i class="fab fa-html5"></i>
                  </p>
                  <span className="font-mono">HTML</span>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="float-left mb-0 mr-1">
                    <i class="fab fa-sass"></i>
                  </p>
                  <span className="font-mono">SASS</span>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="float-left mb-0 mr-1">
                    <i class="fab fa-js-square"></i>
                  </p>
                  <span className="font-mono">JavaScript</span>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="float-left mb-0 mr-1">
                    <i class="fab fa-python"></i>
                  </p>
                  <span className="font-mono">Python</span>
                </ListGroupItem>
                <ListGroupItem>
                  <p className="float-left mb-0 mr-1">
                    <i class="fab fa-node"></i>
                  </p>
                  <span className="font-mono">NodeJS</span>
                </ListGroupItem>
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" md="6" sm="12">
          <Card>
            <CardBody>
              <h3 className="font-large-1">Services</h3>
              <hr className="my-1" />
              <ul class="list-inline font-large-1">
                <li class="list-inline-item">
                  <Layout size="20" />
                </li>
                <li class="list-inline-item">
                  <h3 className="mb-0 inline-block">&nbsp;Web Design</h3>
                </li>
              </ul>
              <p className="font-mono">
                I design app and/or website layouts for computers &amp; mobile
                devices, with a focus on maximizing usability and simplyfing the
                user experience.
              </p>
              <ul class="list-inline font-large-1">
                <li class="list-inline-item">
                  <Terminal size="30" />
                </li>
                <li class="list-inline-item">
                  <h3 className="mb-0 inline-block">&nbsp;Web Development</h3>
                </li>
              </ul>
              <p className="font-mono">
                I can also build anything from a simple static web page to a
                complex web-based internet application. All based on client
                design specifications.
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
