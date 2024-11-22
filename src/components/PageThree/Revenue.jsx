import React, {useEffect} from 'react'
import "./Revenue.scss";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";
import { useScrollAnimation } from '../../Helper';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Counter } from '../../Helper';


const Revenue = () => {
    
    useScrollAnimation({
    trigger: ".revenue_ops_container",
    start: "top 70%",
    end: "+=350",
    markers: false,
    scrub: true,
    toggleActions: "restart none none none",
    animations: [
      { selector: ".costs_container_top", from: { opacity: 0, x: 200 }, to: { opacity: 1, x: 0 } },
      { selector: ".costs_container_bottom", from: { opacity: 0, x: -1200 }, to: { opacity: 1, x: 0 } },
      { selector: ".cost_container_text_left", from: { opacity: 0 }, to: { opacity: 1 } },
      { selector: ".svg_icon", from: { opacity: 0 }, to: { opacity: 1 } },
      { selector: ".cost_container_text_right", from: { opacity: 0 }, to: { opacity: 1 } },
      { selector: ".costs_container_bottom", from: { opacity: 1, y:0 }, to: { opacity: 0, y:0 } },
      { selector: ".profit_fintekkers", from: { opacity: 0, y:200 }, to: { opacity: 1, y:0 } },

    ],
  });

    useEffect(() => {
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

  return (
    <div className='revenue_ops_container'>
        <h2>Fintekkers will turn others’ costs into a revenue opportunity</h2>
        <div className="costs_container_top">
            <div className="cost_container_top">Banks</div>
            <div className="cost_container_top">Asset Managers</div>
            <div className="cost_container_top">Investors</div>
            <div className="cost_container_top">Treasury Operations</div>
            <div className="cost_container_top">Hedge Funds</div>
            <div className="cost_container_top">Etc.</div>
        </div>
        <div className="cost_container_middle">
            <div className="cost_container_text_left">
                <FaArrowTrendDown size={20} />
                Can Sell below Incumbents <br/> current cost rebuild
            </div>
          <h1 className='svg_icon'><FaArrowUp size={40} /></h1>
            <div className="cost_container_text_right">
                <BsArrowUpCircleFill size={20} />
                But Sell at high margin
            </div>
        </div>

        <div className="costs_container_bottom">
            <div className="cost_container_bottom">Subledger</div>
            <div className="cost_container_bottom">Security Model</div>
            <div className="cost_container_bottom">Market data</div>
            <div className="cost_container_bottom">P&L</div>
            <div className="cost_container_bottom">Risk</div>
            <div className="cost_container_bottom">etc.</div>
        </div>

        <div className="profit_fintekkers">
            At <span> <Counter end={20} duration={2000}/>% </span> market share,<br/>  <span> FINTEKKERS </span>could earn <span>~ $ <Counter end={5} duration={4000}/>B</span> revenue <br/> from ‘core’ SaaS services
        </div>
    </div>
  )
}

export default Revenue