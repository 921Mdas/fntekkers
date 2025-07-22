// Import React and useEffect hook
import React, { useEffect } from 'react';

// Import styling specific to this component
import "./Services.scss";

// Import the service data and statistics data used for display
import { ServicesData_Stats } from './data';

// Import a scroll animation hook and a Counter component
import { useScrollAnimation, Counter } from '../../Helper';


// Import Zustand store hook to access shared global state (like icon size)
import useStore from '../../../store';

// Import GSAP's ScrollTrigger plugin directly for lifecycle cleanup
import { ScrollTrigger } from 'gsap/ScrollTrigger';


/**
 * Reusable component for rendering a block of services.
 * @param {string} title - Title of the block section.
 * @param {array} services - List of service items to render.
 * @param {string} classifier - Additional class for styling the section.
 */

/**
 * Main Services component responsible for:
 * - Rendering industry insight
 * - Displaying animated stats
 * - Calculating potential SaaS market revenue
 * - Triggering scroll-based animations
 */
const Services = () => {

    // Destructure `iconSize` from Zustand store (useful for responsive or conditional icon rendering)

    // Call custom hook to set up scroll-triggered animations using GSAP
    useScrollAnimation({
        trigger: ".Services",              // Element that triggers the animation
        start: "top 70%",                 // When the top of `.Services` hits 70% of the viewport
        end: "+=150",                     // Extends the animation duration by 150px of scroll
        toggleActions: "restart none none none", // GSAP toggle actions for scroll events
        scrub: true,                      // Smooth animation synced with scroll position
        // markers: true,                 // Useful for debugging scroll trigger zones

        // Animation definitions
        animations: [
            // Fade & slide-up each block from below (used in service blocks or similar UI)
            { selector: ".block0", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0, duration: 1 } },
            { selector: ".block1", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0, duration: 1 } },
            { selector: ".block2", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0, duration: 1 } },
            { selector: ".block3", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0, duration: 1 } },
            { selector: ".block4", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0, duration: 1 } },
            { selector: ".block5", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0, duration: 1 } },
            { selector: ".block6", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0, duration: 1 } },

            // Animate statistical items into view
            { selector: ".Services_stat_items", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0, duration: 2 } },

            // Animate potential revenue calculation into view
            { selector: ".Services_state_calc", from: { opacity: 0, y: 200 }, to: { opacity: 1, y: 0, duration: 3 } },
        ],
    });

    // Clean up GSAP scroll triggers when component unmounts to avoid memory leaks or duplicated triggers
    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className='Services'>
            <div className="services_notes_stats">

                {/* Industry problem statement */}
                <div className="Services_note">
                    <p>
                        Industry wastefully rebuilds these systems many times despite having 99% the same requirements
                    </p>
                </div>

                {/* Statistics block (data-driven) */}
                <div className="Services_stats">
                    {/* Supporting image or visual chart */}
                    <img src="/assets-images/am.png" alt="" />

                    {/* Header for statistical context */}
                    <h3>in the USA alone:</h3>

                    {/* Stats items section rendered from data */}
                    <div className="Services_stat_items">
                        {ServicesData_Stats.map((stat, idx) => (
                            <div key={idx} className={`Services_stats_item Services_stats_item${idx}`}>
                                <div className="dot"></div>
                                <span className="number">
                                    {/* Animated counter component */}
                                    <Counter end={stat.number} duration={2000} />
                                </span>
                                <p className="text">{stat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SaaS revenue projection */}
                <div className="Potential_revenue">
                    <h3>x $1MM(avg) = $24B+ of annual low-hanging SaaS revenue</h3>
                </div>
            </div>
        </div>
    );
};

export default Services;
