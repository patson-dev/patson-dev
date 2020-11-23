import React from "react";
import { Row, Col } from "reactstrap";
import Breadcrumbs from "../../../../components/@dev/breadCrumbs/BreadCrumb";
import SubscribersGained from "./SubscriberGained";
import RevenueGenerated from "./RevenueGenerated";
import QuaterlySales from "./QuaterlySales";
import OrdersReceived from "./OrdersReceived";
import StatisticsCard from "../../../../components/@dev/statisticsCard/StatisticsCard";
import {
  Monitor,
  UserCheck,
  Mail,
  Truck,
  Cpu,
  Server,
  Activity,
  AlertOctagon,
  PlayCircle,
  ThumbsDown,
  ThumbsUp,
  ShoppingCart,
  Star,
} from "react-feather";
import {
  siteTraffic,
  siteTrafficSeries,
  activeUsers,
  activeUsersSeries,
  newsLetter,
  newsLetterSeries,
} from "./StatisticsData2";

class StatisticsCards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Statistics"
          breadCrumbParent="Card"
          breadCrumbActive="Statistics Cards"
        />
        <Row>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<PlayCircle className="primary" size={22} />}
              stat="130k"
              statTitle="Plays"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<ThumbsUp className="primary" size={22} />}
              stat="12k"
              statTitle="Likes"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<ShoppingCart className="primary" size={22} />}
              stat="498"
              statTitle="Orders"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<ThumbsDown className="primary" size={22} />}
              stat="26.7k"
              statTitle="Dislikes"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<Star className="primary" size={22} />}
              stat="689"
              statTitle="Reviews"
            />
          </Col>

          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<Truck className="primary" size={22} />}
              stat="2"
              statTitle="Returns"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatisticsCard
              hideChart
              iconRight
              iconBg="primary"
              icon={<Cpu className="primary" size={22} />}
              stat="18t"
              statTitle="Annual Network Difficulty"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatisticsCard
              hideChart
              iconRight
              iconBg="primary"
              icon={<Server className="primary" size={22} />}
              stat="1.2gb"
              statTitle="Remaining Storage"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatisticsCard
              hideChart
              iconRight
              iconBg="primary"
              icon={<Activity className="primary" size={22} />}
              stat="0.1%"
              statTitle="Daily Mempool Size [Bytes]"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatisticsCard
              hideChart
              iconRight
              iconBg="primary"
              icon={<AlertOctagon className="primary" size={22} />}
              stat="13"
              statTitle="Errors Found"
            />
          </Col>
          <Col lg="3" md="6" sm="12">
            <SubscribersGained />
          </Col>
          <Col lg="3" md="6" sm="12">
            <RevenueGenerated />
          </Col>
          <Col lg="3" md="6" sm="12">
            <QuaterlySales />
          </Col>
          <Col lg="3" md="6" sm="12">
            <OrdersReceived />
          </Col>
          <Col lg="4" md="6" sm="12">
            <StatisticsCard
              iconRight
              icon={<Monitor className="primary" size={22} />}
              stat="78.9k"
              statTitle="Site Traffic"
              options={siteTraffic}
              series={siteTrafficSeries}
              type="line"
            />
          </Col>
          <Col lg="4" md="6" sm="12">
            <StatisticsCard
              iconRight
              icon={<UserCheck className="primary" size={22} />}
              iconBg="primary"
              stat="659.8k"
              statTitle="Active Users"
              options={activeUsers}
              series={activeUsersSeries}
              type="line"
            />
          </Col>
          <Col lg="4" md="6" sm="12">
            <StatisticsCard
              iconRight
              icon={<Mail className="primary" size={22} />}
              iconBg="primary"
              stat="28.7k"
              statTitle="Newsletter"
              options={newsLetter}
              series={newsLetterSeries}
              type="line"
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default StatisticsCards;
