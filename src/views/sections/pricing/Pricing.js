import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import BreadCrumbs from "../../../components/@dev/breadCrumbs/BreadCrumb";
import One from "./One";
import Three from "./Three";
import Two from "./Two";

export default class Pricing extends Component {
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Pricing"
          breadCrumbParent="Section Templates"
          breadCrumbActive="Pricing Templates"
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
