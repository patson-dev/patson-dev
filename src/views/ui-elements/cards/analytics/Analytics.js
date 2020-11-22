import React from "react";
import { Row, Col } from "reactstrap";
import Breadcrumbs from "../../../../components/@dev/breadCrumbs/BreadCrumb";
import Sales from "./Sales";
import SupportTracker from "./SupportTracker";
import Revenue from "./Revenue";
import GoalOverview from "./GoalOverview";
import AvgSession from "./AvgSessions";
import Tasks from "./Tasks";
import Sales2 from "./Sales2";
import Funds from "./Funds";
import BrowserStats from "./BrowserStatistics";
import ClientRetention from "./ClientRetention";

import "../../../../assets/scss/pages/card-analytics.scss";

let $primary = "#15346a",
  $success = "#24562b",
  $danger = "#d61a3c",
  $info = "#0e26b1",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#b9c3cd",
  $label_color = "#e7eef7",
  $purple = "#df87f2",
  $white = "#fff";

class AnalyticsCards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Analytics"
          breadCrumbParent="Card"
          breadCrumbActive="Analytics Cards"
        />
        <Row>
          <Col lg="8" sm="12">
            <Revenue
              primary={$primary}
              dangerLight={$danger_light}
              strokeColor={$stroke_color}
              labelColor={$label_color}
            />
          </Col>
          <Col lg="4" sm="12">
            <GoalOverview strokeColor={$stroke_color} success={$success} />
          </Col>
          <Col lg="6" sm="12">
            <AvgSession labelColor={$label_color} primary={$primary} />
          </Col>
          <Col lg="6" sm="12">
            <Tasks />
          </Col>
          <Col lg="9" md="12" sm="12">
            <Sales2
              strokeColor={$stroke_color}
              primary={$primary}
              purple={$purple}
              labelColor={$label_color}
            />
          </Col>
          <Col lg="3" md="12" sm="12">
            <Funds />
          </Col>
          <Col lg="4" md="12">
            <BrowserStats />
          </Col>
          <Col lg="8" md="12">
            <ClientRetention
              strokeColor={$stroke_color}
              primary={$primary}
              danger={$danger}
              labelColor={$label_color}
            />
          </Col>
          <Col lg="6" sm="12">
            <Sales
              strokeColor={$stroke_color}
              infoLight={$info_light}
              primary={$primary}
              info={$info}
            />
          </Col>
          <Col lg="6" sm="12">
            <SupportTracker
              primary={$primary}
              danger={$danger}
              white={$white}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AnalyticsCards;
