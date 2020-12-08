import React, { Component } from 'react'
import { Row } from "reactstrap";
import BreadCrumbs from "../../../components/@dev/breadCrumbs/BreadCrumb";

export default class Contact extends Component {
    render() {
        return (
          <React.Fragment>
            <BreadCrumbs
              breadCrumbTitle="Contact"
              breadCrumbParent="Section Templates"
              breadCrumbActive="Contact Templates"
            />
            <Row></Row>
          </React.Fragment>
        );
    }
}
