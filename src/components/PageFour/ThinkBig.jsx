import "./ThinkBig.scss";
import React, { useEffect } from "react";
import { useScrollAnimation } from "../../Helper";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LuArrowUpFromLine } from "react-icons/lu";

const ThinkBig = () => {
  // Animate elements on scroll using custom hook
  useScrollAnimation({
    trigger: ".ThinkBig",
    start: "top 70%",
    end: "+=350",
    scrub: true,
    toggleActions: "restart none none none",
    animations: [
      { selector: ".traditional_corp", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0 } },
      { selector: ".from_raw", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0 } },
      { selector: ".start_ups", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0 } },
      { selector: ".revenue_share", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0 } },
      { selector: ".fintekkers_title", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0 } },
    ],
  });

  // Clean up GSAP scroll triggers on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="ThinkBig">
      {/* Section header with title and brain icon */}
      <div className="headline_container">
        <h3 className="headline_thinkbig">
          Thinking <span>Bigger</span>
        </h3>
        <img src="/assets-images/brain.svg" alt="" className="svg_thinkbig" />
      </div>

      {/* Comparison of traditional corporations and startups */}
      <div className="thinkbig_orgs">
        <h3 className="traditional_corp">Traditional Corporations</h3>
        <h3 className="start_ups">Start-ups</h3>
      </div>

      {/* Core content: growth strategy and revenue-share model */}
      <div className="thinkbig_content">
        <div className="from_raw">
          <p className="fromraw_content">
            <span className="fromraw_grow">Grow</span> from <em>‘raw’ infra</em> (e.g. reference data) to higher
            margin services (e.g. security selection service):{" "}
            <span className="thinkbig_number">$10B</span> + annual SaaS revenue
          </p>
        </div>

        {/* Visual icon representing growth */}
        <div className="middle_svg">
          <LuArrowUpFromLine size={50} />
        </div>

        <div className="revenue_share">
          Revenue-share in startups. E.g. provide services ‘at cost’ in exchange for{" "}
          <span className="thinkbig_number_revenue_share">15-30%</span> of revenue<br />
          ? but very large ?
        </div>
      </div>

      {/* Final callout */}
      <h3 className="fintekkers_title">Fintekkers</h3>
    </div>
  );
};

export default ThinkBig;