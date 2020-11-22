import React from "react";
import { Row, Col } from "reactstrap";
import Breadcrumbs from "../../../components/@dev/breadCrumbs/BreadCrumb";
import QuestionsSearch from "./QuestionsSearch";

import "../../../assets/scss/pages/faq.scss";

class Faq extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="FAQ"
          breadCrumbParent="Pages"
          breadCrumbActive="FAQ"
        />
        <Row>
          <Col sm="12">
            <QuestionsSearch />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Faq;
