import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import BreadCrumbs from "../../../components/@dev/breadCrumbs/BreadCrumb";
import One from "./One";
import Three from "./Three";
import Two from "./Two";

export default class CTA extends Component {
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Call to Action"
          breadCrumbParent="Section Templates"
          breadCrumbActive="Call to Action Templates"
        />
        <Row>
          <Col sm="12">
            <One />
          </Col>
          <Col sm="12">
            <Two />
          </Col>
          <Col sm="12">
            <Three />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
