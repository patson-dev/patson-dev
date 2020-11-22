import React from "react";
import { Row, Col } from "reactstrap";
import Breadcrumbs from "../../../../components/@dev/breadCrumbs/BreadCrumb";
import RadioBasic from "./RadioBasic";
import RadioCustom from "./RadioCustom";
import RadioDev from "./RadioDev";
import RadioColors from "./RadioColors";
import RadioSizes from "./RadioSizes";

class Radio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Radio"
          breadCrumbParent="Form Elements"
          breadCrumbActive="Radio"
        />
        <Row>
          <Col lg="6" md="12">
            <RadioBasic />
          </Col>
          <Col lg="6" md="12">
            <RadioCustom />
          </Col>
          <Col lg="6" md="12">
            <RadioDev />
          </Col>
          <Col lg="6" md="12">
            <RadioColors />
          </Col>
          <Col sm="12">
            <RadioSizes />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default Radio;
