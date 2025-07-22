// Import necessary libraries and components
import React, { useEffect } from 'react';
import "./AssetManager.scss";
import { useScrollAnimation } from '../../Helper'; // Custom hook for scroll animations
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // GSAP's ScrollTrigger plugin
import { IoTimeOutline } from "react-icons/io5"; // Time icon
import { GiReceiveMoney } from "react-icons/gi"; // Money icon

const AssetManager = () => {
  // Set up scroll animations using custom hook
  useScrollAnimation({
    trigger: ".assetmanager_container", // Element that triggers the animation
    start: "top 70%", // Animation starts when trigger hits 70% of viewport
    end: "+=350", // Animation ends 350px after start
    markers: false, // Don't show debug markers
    scrub: true, // Smooth scrubbing effect
    toggleActions: "restart none none none", // Animation behavior
    animations: [
      // Animation sequence for different elements
      { 
        selector: ".asset_hero_graph_five", 
        from: { opacity: 0, y: -200 }, // Start state (hidden and 200px above)
        to: { opacity: 1, y: 0 } // End state (visible and in normal position)
      },
      { 
        selector: ".asset_hero_graph_four", 
        from: { opacity: 0, y: -200 }, 
        to: { opacity: 1, y: 0 } 
      },
      { 
        selector: ".asset_hero_graph_three", 
        from: { opacity: 0, y: -200 }, 
        to: { opacity: 1, y: 0 } 
      },
      { 
        selector: ".asset_hero_graph_two", 
        from: { opacity: 0, y: -200 }, 
        to: { opacity: 1, y: 0 } 
      },
      { 
        selector: ".asset_hero_graph_one", 
        from: { opacity: 0, y: -200 }, 
        to: { opacity: 1, y: 0 } 
      },
      { 
        selector: ".hero_subtext", 
        from: { opacity: 0 }, 
        to: { opacity: 1 } 
      },
    ],
  });

  // Clean up ScrollTrigger instances when component unmounts
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="assetmanager_container">
      {/* Hero section container */}
      <div className="asset_hero_section">
        {/* Graphics/animation section */}
        <div className="asset_hero_section_graphics">
          {/* Group of animated graph elements */}
          <div className="asset_hero_section_group asset_hero_section_group_one">
            {/* Individual graph elements that will animate */}
            <div className="asset_hero_graph asset_hero_graph_one">Security Model</div>
            <div className="asset_hero_graph asset_hero_graph_two">Market Data</div>
            <div className="asset_hero_graph asset_hero_graph_three">Ledger</div>
            <div className="asset_hero_graph asset_hero_graph_four">P&L</div>
            <div className="asset_hero_graph asset_hero_graph_five">Risk</div>
          </div>
        </div>

        {/* Text content section */}
        <div className="asset_hero_section_text">
          {/* Main headline with highlighted portion */}
          <h1>
            Building Security Models 
            <span className='asset_text_highlight'>Shouldn't Be This Hard.</span>
          </h1>
          
          {/* Subtext with icons */}
          <h2 className='hero_subtext'>
            Asset managers often waste 
            <span><IoTimeOutline /></span> time <br/> 
            and <span><GiReceiveMoney /></span> money creating models from scratch.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default AssetManager;