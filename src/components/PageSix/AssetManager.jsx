import React, {useEffect} from 'react';
import "./AssetManager.scss";
import { useScrollAnimation } from '../../Helper';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RiDeleteBin7Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { GiReceiveMoney } from "react-icons/gi";





const AssetManager = () => {

 useScrollAnimation({
    trigger: ".assetmanager_container",
    start: "top 70%",
    end: "+=350",
    markers: false,
    scrub: true,
    toggleActions: "restart none none none",
    animations: [
        { selector: ".asset_hero_graph_five", from: { opacity: 0, y: -200 }, to: { opacity: 1, y: 0 } },
        { selector: ".asset_hero_graph_four", from: { opacity: 0, y: -200 }, to: { opacity: 1, y: 0 } },
        { selector: ".asset_hero_graph_three", from: { opacity: 0, y: -200 }, to: { opacity: 1, y: 0 } },
        { selector: ".asset_hero_graph_two", from: { opacity: 0, y: -200 }, to: { opacity: 1, y: 0 } },
        { selector: ".asset_hero_graph_one", from: { opacity: 0, y: -200 }, to: { opacity: 1, y: 0 } },
        { selector: ".hero_subtext", from: { opacity: 0 }, to: { opacity: 1} },
    
    ],
  });

    useEffect(() => {
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);
  return (
    <div className="assetmanager_container">
        <div className="asset_hero_section">


            <div className="asset_hero_section_graphics">
          
                     <div className=" asset_hero_section_group asset_hero_section_group_one">
                                <div className="asset_hero_graph asset_hero_graph_one">Security Model</div>
                                <div className="asset_hero_graph asset_hero_graph_two">Market Data</div>
                                <div className="asset_hero_graph asset_hero_graph_three">Ledger</div>
                                <div className="asset_hero_graph asset_hero_graph_four">P&L</div>
                                <div className="asset_hero_graph asset_hero_graph_five">Risk</div>

                     </div>

            </div>

            <div className="asset_hero_section_text">
                <h1>Building Security Models <span className='asset_text_highlight'>Shouldn't Be This Hard.</span> </h1>
                <h2 className='hero_subtext'>Asset managers often waste <span><IoTimeOutline /></span> time <br/> and <span><GiReceiveMoney /></span> money creating models from scratch.</h2>
            </div>
        </div>

    </div>
  )
}

export default AssetManager