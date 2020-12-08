import React, { Component } from "react";
import { Row } from "reactstrap";
import BreadCrumbs from "../../../components/@dev/breadCrumbs/BreadCrumb";

export default class CTA extends Component {
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Call to Action"
          breadCrumbParent="Section Templates"
          breadCrumbActive="Call to Action Templates"
        />
        <Row></Row>
      </React.Fragment>
    );
  }
}
