import React, {useEffect} from 'react';
import "./Services.scss";
import {ServicesData, ServicesData_Stats} from './data';
import { useScrollAnimation, Counter } from '../../Helper';
import { GiCargoCrane } from "react-icons/gi";
import { FaGripLinesVertical } from "react-icons/fa6";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import useStore from '../../../store';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const ServiceBlock = ({ title, services = [], classifier }) => {
    return (
        <div className={`service_block ${classifier}`}>
            <h3>{title}</h3>
            <div className="blocks">
                {services.map((service, idx) => (
                    <div key={idx} className={`block block${idx}`}>{service}</div>
                ))}
            </div>
        </div>
    );
};

const Services = () => {


const {iconSize} = useStore(state=>state)



useScrollAnimation({
    trigger: ".Services",
    start: "top 70%",
    // start: "top 70%",
    end: "+=150", // Adjust based on animation duration
    toggleActions: "restart none none none",
    scrub:true,
    // markers:true,
    animations: [
  
        { 
            selector: ".block0", 
            from: { opacity: 0, y: 200 }, 
            to: { opacity: 1, y: 0, duration: 1 } 
        },
        { 
            selector: ".block1", 
            from: { opacity: 0, y: 200 }, 
            to: { opacity: 1, y: 0, duration: 1 } 
        },
        { 
            selector: ".block2", 
            from: { opacity: 0, y: 200 }, 
            to: { opacity: 1, y: 0, duration: 1 } 
        },
        { 
            selector: ".block3", 
            from: { opacity: 0, y: 200 }, 
            to: { opacity: 1, y: 0, duration: 1 } 
        },
        { 
            selector: ".block4", 
            from: { opacity: 0, y: 200 }, 
            to: { opacity: 1, y: 0, duration: 1 } 
        },
        { 
            selector: ".block5", 
            from: { opacity: 0, y: 200 }, 
            to: { opacity: 1, y: 0, duration: 1 } 
        },
        { 
            selector: ".block6", 
            from: { opacity: 0, y: 200 }, 
            to: { opacity: 1, y: 0, duration: 1 } 
        },
        { 
            selector: ".Services_stat_items", 
            from: { opacity: 0, y: 200 }, 
            to: { opacity: 1, y: 0, duration: 2 } 
        },
        { 
            selector: ".Services_state_calc", 
            from: { opacity: 0, y: 200 }, 
            to: { opacity: 1, y: 0, duration: 3 } 
        },
    ],
});

  useEffect(() => {
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

    return (
        <div className='Services'>


            <div className="services_notes_stats">
                    <div className="Services_note">
                        <p>Industry wastefully rebuilds these systems many times despite having 99% the same requirements</p>
                    </div>
      
                    <div className="Services_stats">
                    <img src="/assets-images/am.png" alt="" />
                    <h3> in the USA alone:</h3>
                    <div className="Services_stat_items">
                                {ServicesData_Stats.map((stat, idx)=>
                                ( <div key={idx} className={`Services_stats_item Services_stats_item${idx}`}>
                                    <div className="dot"></div>
                                    <span className="number">
                                        <Counter end={stat.number} duration={2000} />
                                    </span>
                                    <p className="text">{stat.text}</p>
                                </div>
                    )
                                )}
                    </div>


                    </div>
                    <div className="Potential_revenue">
                    <h3>x $1MM(avg) = $24B+ of annual low-hanging SaaS revenue</h3>
                   </div>



            </div>
        </div>
    );
};

export default Services;
