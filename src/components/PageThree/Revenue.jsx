// Import necessary libraries and components
import React, { useEffect } from 'react';
import "./Revenue.scss";
// Import icons from react-icons library
import { BsArrowUpCircleFill } from "react-icons/bs"; // Up arrow circle icon
import { FaArrowTrendDown } from "react-icons/fa6"; // Trend down arrow icon
import { FaArrowUp } from "react-icons/fa"; // Up arrow icon
// Import custom hooks and utilities
import { useScrollAnimation } from '../../Helper'; // Custom scroll animation hook
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // GSAP ScrollTrigger plugin
import { Counter } from '../../Helper'; // Animated counter component

const Revenue = () => {
    // Set up scroll animations using custom hook
    useScrollAnimation({
        trigger: ".revenue_ops_container", // Element that triggers animations
        start: "top 70%", // When to start animations (when trigger hits 70% of viewport)
        end: "+=350", // When to end animations (350px after start)
        markers: false, // Disable debug markers
        scrub: true, // Enable smooth scrubbing
        toggleActions: "restart none none none", // Animation behavior
        animations: [
            // Animation sequence for different elements:
            // - Fade in from right for top container
            { selector: ".costs_container_top", from: { opacity: 0, x: 200 }, to: { opacity: 1, x: 0 } },
            // - Fade in from left for bottom container
            { selector: ".costs_container_bottom", from: { opacity: 0, x: -1200 }, to: { opacity: 1, x: 0 } },
            // - Fade in for left text
            { selector: ".cost_container_text_left", from: { opacity: 0 }, to: { opacity: 1 } },
            // - Fade in for SVG icon
            { selector: ".svg_icon", from: { opacity: 0 }, to: { opacity: 1 } },
            // - Fade in for right text
            { selector: ".cost_container_text_right", from: { opacity: 0 }, to: { opacity: 1 } },
            // - Fade out for bottom container (appears unused)
            { selector: ".costs_container_bottom", from: { opacity: 1, y:0 }, to: { opacity: 0, y:0 } },
            // - Fade in from bottom for profit section
            { selector: ".profit_fintekkers", from: { opacity: 0, y:200 }, to: { opacity: 1, y:0 } },
        ],
    });

    // Clean up ScrollTrigger instances on component unmount
    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className='revenue_ops_container'>
            {/* Main heading */}
            <h2>Fintekkers will turn others' costs into a revenue opportunity</h2>
            
            {/* Top row of cost categories */}
            <div className="costs_container_top">
                <div className="cost_container_top">Banks</div>
                <div className="cost_container_top">Asset Managers</div>
                <div className="cost_container_top">Investors</div>
                <div className="cost_container_top">Treasury Operations</div>
                <div className="cost_container_top">Hedge Funds</div>
                <div className="cost_container_top">Etc.</div>
            </div>
            
            {/* Middle section with value proposition */}
            <div className="cost_container_middle">
                {/* Left text with downward trend arrow */}
                <div className="cost_container_text_left">
                    <FaArrowTrendDown size={20} />
                    Can Sell below Incumbents <br/> current cost rebuild
                </div>
                
                {/* Central up arrow icon */}
                <h1 className='svg_icon'><FaArrowUp size={40} /></h1>
                
                {/* Right text with upward circle arrow */}
                <div className="cost_container_text_right">
                    <BsArrowUpCircleFill size={20} />
                    But Sell at high margin
                </div>
            </div>
            
            {/* Bottom row of service offerings */}
            <div className="costs_container_bottom">
                <div className="cost_container_bottom">Subledger</div>
                <div className="cost_container_bottom">Security Model</div>
                <div className="cost_container_bottom">Market data</div>
                <div className="cost_container_bottom">P&L</div>
                <div className="cost_container_bottom">Risk</div>
                <div className="cost_container_bottom">etc.</div>
            </div>
            
            {/* Revenue projection section with animated counters */}
            <div className="profit_fintekkers">
                At <span> <Counter end={20} duration={2000}/>% </span> market share,<br/>  
                <span> FINTEKKERS </span>could earn <span>~ $ <Counter end={5} duration={4000}/>B</span> revenue <br/> 
                from 'core' SaaS services
            </div>
        </div>
    );
}

export default Revenue;