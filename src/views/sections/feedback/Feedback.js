import React, { Component } from 'react'
import { Row } from "reactstrap";
import BreadCrumbs from "../../../components/@dev/breadCrumbs/BreadCrumb";

export default class Feedback extends Component {
    render() {
        return (
          <React.Fragment>
            <BreadCrumbs
              breadCrumbTitle="Feedback"
              breadCrumbParent="Section Templates"
              breadCrumbActive="Feedback Templates"
            />
            <Row></Row>
          </React.Fragment>
        );
    }
}
