import React from "react";
import StatisticsCard from "../../../../components/@dev/statisticsCard/StatisticsCard";
import { Package } from "react-feather";
import { ordersReceived, ordersReceivedSeries } from "./StatisticsData";

class OrdersReceived extends React.Component {
  render() {
    return (
      <StatisticsCard
        icon={<Package className="primary" size={22} />}
        iconBg="primary"
        stat="97.5K"
        statTitle="Orders Received"
        options={ordersReceived}
        series={ordersReceivedSeries}
        type="area"
      />
    );
  }
}
export default OrdersReceived;
