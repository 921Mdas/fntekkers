import React, { useEffect } from 'react';
import "./AMRoutine.scss"; // Styles specific to this component
import { GoGoal } from "react-icons/go"; // Icon for goals
import { FaRegMessage } from "react-icons/fa6"; // Icon for messages
import { IoPerson } from "react-icons/io5"; // Icon for person
import { useScrollAnimation } from '../../Helper'; // Custom hook for scroll-triggered animations
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // GSAP plugin for scroll-based animations

const AMRoutine = () => {

  // Using a custom hook to trigger animations on scroll with GSAP and ScrollTrigger
  // Each animation defines a target element (by selector), initial style (from), and final style (to)
  useScrollAnimation({
    trigger: ".AMRoutine_container_parent", // Element that triggers the scroll animation
    start: "top 70%", // Animation starts when the trigger element top hits 70% viewport height
    end: "+=650", // Animation lasts for an additional 650 pixels of scroll
    markers: false, // Disable debugging markers for ScrollTrigger
    scrub: true, // Smooth scrubbing tied to scrollbar position
    toggleActions: "restart none none none", // Defines ScrollTrigger behavior on enter/leave events
    animations: [
      { selector: ".client_A", from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
      { selector: ".client_B", from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
      { selector: ".client_C", from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
      { selector: ".client_D", from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
      { selector: ".client_E", from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
      { selector: ".asset_manager", from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
      { selector: ".question_one", from: { opacity: 0 }, to: { opacity: 1, y: 0 } },
      { selector: ".question_two", from: { opacity: 0 }, to: { opacity: 1, y: 0 } },
      { selector: ".question_three", from: { opacity: 0 }, to: { opacity: 1, y: 0 } },
      { selector: ".question_four", from: { opacity: 0 }, to: { opacity: 1, y: 0 } },
      { selector: ".question_five", from: { opacity: 0 }, to: { opacity: 1, y: 0 } },
    ],
  });

  // Cleanup function to kill all ScrollTrigger instances when component unmounts
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className='AMRoutine_container_parent'>
      {/* Main container for the entire asset manager routine section */}

      <div className='AMRoutine_container'>
        {/* Content wrapper for title and client sections */}

        <div className="asset_manager_content">
          {/* Section title */}
          <h1 className="asset_manager_title">
            Common Security Model Building process
          </h1>
        </div>

        <div className="clients_content">
          {/* Section displaying clients and their needs */}

          {/* Client A block */}
          <div className="client_A">
            <div className="client_A_needs client_asset_manager_link_one">
              <span>
                <IoPerson size={15} />
                <span>John Doe</span>
              </span>
              <br />
              <span>
                <FaRegMessage size={15} />
                <span>I want to buy equities</span>
              </span>
              <br />
              <span>
                <GoGoal size={15} />
                <span>Retirement: build savings</span>
              </span>
            </div>
          </div>

          {/* Client B block */}
          <div className="client_B">
            <div className="client_B_needs client_asset_manager_link_two">
              <span>
                <IoPerson size={15} />
                <span>Jane Doe</span>
              </span>
              <br />
              <span>
                <FaRegMessage size={15} />
                <span>Draw $100k P/A</span>
              </span>
              <br />
              <span>
                <GoGoal size={15} />
                <span>Cover retirement</span>
              </span>
            </div>
          </div>

          {/* Client C block */}
          <div className="client_C">
            <div className="client_C_needs client_asset_manager_link_three">
              <span>
                <IoPerson size={15} />
                <span>ABC</span>
              </span>
              <br />
              <span>
                <FaRegMessage size={15} />
                <span>Fund retirement</span>
              </span>
              <br />
              <span>
                <GoGoal size={15} />
                <span>Create Trust Fund</span>
              </span>
            </div>
          </div>

          {/* Client E block */}
          <div className="client_E">
            <div className="client_E_needs client_asset_manager_link_four">
              <span>
                <IoPerson size={15} />
                <span>DEF</span>
              </span>
              <br />
              <span>
                <FaRegMessage size={15} />
                <span>Willing to pay premiums</span>
              </span>
              <br />
              <span>
                <GoGoal size={15} />
                <span>Need coverage for assets</span>
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Asset Manager roles corresponding to clients */}
      <div className="asset_manager">
        <div className="asset_manager_needs equity client_asset_manager_link_one">
          <span>
            <IoPerson />
            <span>Equity Asset Manager</span>
          </span>
        </div>
        <div className="asset_manager_needs client_asset_manager_link_two">
          <span>
            <IoPerson />
            <span>Retirement Advisor</span>
          </span>
        </div>
        <div className="asset_manager_needs client_asset_manager_link_three">
          <span>
            <IoPerson />
            <span>Full Service Asset Manager</span>
          </span>
        </div>
        <div className="asset_manager_needs client_asset_manager_link_four">
          <span>
            <IoPerson />
            <span>Insurance firm</span>
          </span>
        </div>
      </div>

      {/* Common questions related to asset management */}
      <div className="asset_common_questions">
        <div className="question question_one">
          <div className="question_model_one link_one">What exists I can Invest In?</div>
          <div className='question_question link_one'>Security Model</div>
          <div className="question_model_two link_one">Client need assets that match their need. What's available?</div>
        </div>
        <div className="question question_two">
          <div className="question_model_one link_two ">What's the value?</div>
          <div className='question_question link_two'>Market Data</div>
          <div className="question_model_two link_two">What's the current value of security? Does it pay Dividend?</div>
        </div>
        <div className="question question_three">
          <div className="question_model_one link_three">How many do I own?</div>
          <div className='question_question link_three'>Ledger</div>
          <div className="question_model_two link_three">What's the price you bought them at?</div>
        </div>
        <div className="question question_four">
          <div className="question_model_one link_four">Did I make money?</div>
          <div className='question_question link_four'>P&L</div>
          <div className="question_model_two link_four">How much did you make? short term vs long term gains</div>
        </div>
        <div className="question question_five">
          <div className="question_model_one link_five">What will drive future profits and losses?</div>
          <div className='question_question link_five'>Risk</div>
          <div className="question_model_two link_five">How will the price move in response to interest rates?</div>
        </div>
      </div>

    </div>
  );
};

export default AMRoutine;