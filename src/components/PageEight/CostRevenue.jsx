import React, { useState, useRef } from "react";
import "./CostRevenue.scss";
import MyBarChart from "./Chart";
import { useScrollAnimation } from "../../Helper"; // Assuming the hook is imported

const CostRevenue = () => {
  const defaultTitles = [
    "Asset Manager : UBS",
    "Asset Manager : Natixis",
    "Retirement Advisor : Nuveen",
    "Insurance Firm : Pimco",
  ];




  const scrollRef = useRef(null);

  // Dynamically create the animations for each cost_rev_item
  const animations = defaultTitles.map((item, idx) => ({
    selector: `.cost_rev_item_${idx}`,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 }
  }));

  // Use the custom hook for scroll animation
  useScrollAnimation({
    trigger: ".cost_revenue_container",
    start: "top 70%",
    end: "+=650",
    markers: false,
    scrub: true,
    toggleActions: "restart none none none",
    animations: animations, // Pass the dynamically created animations
  });

  return (
    <div className="cost_revenue_container" ref={scrollRef}>
      <div className="cost_revenue">
        <div className="cost_rev_title">The Cost of Repeating the above Process</div>

        <div className="cost_rev_subcontainer">
          <div className="cost_rev_graphs">
            {defaultTitles.map((item, idx) => (
              <div key={idx} className={`cost_rev_item cost_rev_item_${idx}`}>
                <div className="cost_rev_item_title">{item}</div>
                <div className="cost_rev_item_elements">
                  <div>Security Model</div>
                  <div>Market Data</div>
                  <div>Ledger</div>
                  <div>P&L</div>
                  <div>Risk</div>
                </div>
              </div>
            ))}
          </div>
          <div className="cost_bar_chart">
            <MyBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostRevenue;
