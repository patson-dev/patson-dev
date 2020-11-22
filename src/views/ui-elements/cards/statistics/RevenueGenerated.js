import React from "react";
import StatisticsCard from "../../../../components/@dev/statisticsCard/StatisticsCard";
import { CreditCard } from "react-feather";
import { revenueGeneratedSeries, revenueGenerated } from "./StatisticsData";

class RevenueGenerated extends React.Component {
  render() {
    return (
      <StatisticsCard
        icon={<CreditCard className="primary" size={22} />}
        iconBg="primary"
        stat="97.5k"
        statTitle="Revenue Generated"
        options={revenueGenerated}
        series={revenueGeneratedSeries}
        type="area"
      />
    );
  }
}
export default RevenueGenerated;
