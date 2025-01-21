import React, {useEffect} from 'react'
import "./AMRoutine.scss";
import { FaPerson } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { typeText } from '../../Helper';
import { gsap } from 'gsap';
import { useScrollAnimation } from '../../Helper';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




const AMRoutine = () => {


useScrollAnimation({
    trigger: ".AMRoutine_container_parent",
    start: "top 70%",
    end: "+=650",
    markers: false,
    scrub: true,
    toggleActions: "restart none none none",
    animations: [
        { selector: ".client_A", from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
        { selector: ".client_B", from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
        { selector: ".client_C", from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
        { selector: ".client_D", from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
        { selector: ".client_E", from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
        { selector: ".asset_manager", from: { opacity: 0, y: 100 }, to: { opacity: 1, y: 0 } },
        { selector: ".question_one", from: { opacity: 0,}, to: { opacity: 1, y: 0 } },
        { selector: ".question_two", from: { opacity: 0,}, to: { opacity: 1, y: 0 } },
        { selector: ".question_three", from: { opacity: 0,}, to: { opacity: 1, y: 0 } },
        { selector: ".question_four", from: { opacity: 0,}, to: { opacity: 1, y: 0 } },
        { selector: ".question_five", from: { opacity: 0,}, to: { opacity: 1, y: 0 } },       
    ],
  });

useEffect(() => {
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);




  return (
    <div className='AMRoutine_container_parent'>
          <div className='AMRoutine_container'>
              <div className="asset_manager_content">
                    <h1 className="asset_manager_title">
                    Common Security Model Building process
                    </h1>
              </div>


          <div className="clients_content">
            <div className="client_A">
                <div className="client_A_needs client_asset_manager_link_one">
                <span> <IoPerson size={15}  /> <span>John Doe</span> </span>   <br/>
                <span> <FaRegMessage size={15} /> <span>I want to buy equities</span> </span> <br/>
                <span> <GoGoal size={15}/> <span>Retirement: build savings</span></span>  
                </div>
            </div>
            <div className="client_B">
                <div className="client_B_needs client_asset_manager_link_two">
                <span><IoPerson size={15}/> <span>Jane Doe</span> </span>   <br/>
                <span> <FaRegMessage size={15} /> <span>Draw $100k P/A</span> </span> <br/>
                <span> <GoGoal size={15} /> <span>Cover retirement</span></span>  
                </div>
            </div>
            <div className="client_C">
                <div className="client_C_needs client_asset_manager_link_three">
                <span><IoPerson size={15}/> <span>ABC</span> </span>   <br/>
                <span> <FaRegMessage size={15}/> <span>Fund retirement</span> </span> <br/>
                <span> <GoGoal size={15}/> <span>Create Trust Fund</span></span>  
                </div>
            </div>
            <div className="client_E">
                <div className="client_E_needs client_asset_manager_link_four">
                <span><IoPerson size={15}/> <span>DEF</span> </span>   <br/>
                <span> <FaRegMessage size={15} /> <span>Willing to pay premiums</span> </span> <br/>
                <span> <GoGoal size={15}/> <span>Need coverage for assets</span></span>  
                </div>
            </div>
            {/* <div className="lines_draw">

                  <div className="line_asset line_one">
                        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                          <line x1="10" y1="50" x2="200" y2="50" stroke="white" stroke-width="2" />
                        </svg>
                  </div>
                  <div className="line_asset line_two">
                        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                          <line x1="75" y1="0" x2="75" y2="90" stroke="white" stroke-width="2" />
                        </svg>
                  </div>
                  <div className="line_asset line_three">
                        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                          <line x1="75" y1="0" x2="75" y2="30" stroke="white" stroke-width="2" />
                        </svg>
                  </div>
                  <div className="line_asset line_four">
                        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
                          <line x1="75" y1="0" x2="75" y2="30" stroke="white" stroke-width="2" />
                        </svg>
                  </div>

            </div> */}
         
          </div>

            

              
          </div>
    
          <div className="asset_manager">
              
              <div className="asset_manager_needs equity client_asset_manager_link_one">
              <span> <IoPerson /> <span>Equity Asset Manager</span> </span> 
              </div>
              <div className="asset_manager_needs client_asset_manager_link_two">
              <span> <IoPerson /> <span>Retirement Advisor</span> </span> 
              </div>
              <div className="asset_manager_needs client_asset_manager_link_three">
              <span> <IoPerson /> <span>Full Service Asset Manager</span> </span> 
              </div>
              <div className="asset_manager_needs client_asset_manager_link_four">
              <span> <IoPerson /> <span>Insurance firm</span> </span>
              </div>
        
          </div>

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
  )
}

export default AMRoutine