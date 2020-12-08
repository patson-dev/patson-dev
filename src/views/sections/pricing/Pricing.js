import React, { Component } from "react";
import { Row } from "reactstrap";
import BreadCrumbs from "../../../components/@dev/breadCrumbs/BreadCrumb";

export default class Pricing extends Component {
  render() {
    return (
      <React.Fragment>
        <BreadCrumbs
          breadCrumbTitle="Pricing"
          breadCrumbParent="Section Templates"
          breadCrumbActive="Pricing Templates"
        />
        <Row></Row>
      </React.Fragment>
    );
  }
}
