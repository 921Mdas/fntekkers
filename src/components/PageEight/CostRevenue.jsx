import React, { useRef } from "react";
import "./CostRevenue.scss";
import MyBarChart from "./Chart";
import { useScrollAnimation } from "../../Helper"; // Custom hook for scroll-triggered animations

const CostRevenue = () => {
  // Titles to display on the left-hand side of the component for each firm
  const defaultTitles = [
    "Asset Manager : UBS",
    "Asset Manager : Natixis",
    "Retirement Advisor : Nuveen",
    "Insurance Firm : Pimco",
  ];

  const scrollRef = useRef(null); // Ref used for scroll tracking if needed later

  /**
   * Create animation configurations dynamically.
   * Each animation is tied to a specific `.cost_rev_item_{idx}` class,
   * so that the corresponding box fades and slides up when it comes into view.
   */
  const animations = defaultTitles.map((item, idx) => ({
    selector: `.cost_rev_item_${idx}`,
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 }
  }));

  /**
   * Apply scroll-triggered animations using the custom hook.
   * This setup ensures animations trigger when `.cost_revenue_container` enters view.
   */
  useScrollAnimation({
    trigger: ".cost_revenue_container",
    start: "top 70%", // Start animation when top of element is at 70% of viewport
    end: "+=650", // End after 650px of scroll
    markers: false, // Disable debug markers
    scrub: true, // Animation syncs with scroll
    toggleActions: "restart none none none", // Restart animation on re-entry
    animations: animations, // Pass the generated animation config
  });

  return (
    <div className="cost_revenue_container" ref={scrollRef}>
      <div className="cost_revenue">
        {/* Main Title */}
        <div className="cost_rev_title">
          The Cost of Repeating the above Process
        </div>

        {/* Subcontainer splits into two parts: left = firm + services, right = bar chart */}
        <div className="cost_rev_subcontainer">

          {/* Left: Firm list with associated services */}
          <div className="cost_rev_graphs">
            {defaultTitles.map((item, idx) => (
              <div key={idx} className={`cost_rev_item cost_rev_item_${idx}`}>
                
                {/* Company title */}
                <div className="cost_rev_item_title">{item}</div>

                {/* Services offered by the firm */}
                <div className="cost_rev_item_elements">
                  <div>Security Model</div>
                  <div>Market Data</div>
                  <div>Ledger</div>
                  <div>P&amp;L</div>
                  <div>Risk</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Bar chart visualizing cost data */}
          <div className="cost_bar_chart">
            <MyBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostRevenue;