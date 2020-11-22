import React from "react";
import StatisticsCard from "../../../../components/@dev/statisticsCard/StatisticsCard";
import { ShoppingCart } from "react-feather";
import { quaterlySales, quaterlySalesSeries } from "./StatisticsData";

class QuaterlySales extends React.Component {
  render() {
    return (
      <StatisticsCard
        icon={<ShoppingCart className="primary" size={22} />}
        iconBg="sucess"
        stat="36%"
        statTitle="Quarterly Sales"
        options={quaterlySales}
        series={quaterlySalesSeries}
        type="area"
      />
    );
  }
}
export default QuaterlySales;
