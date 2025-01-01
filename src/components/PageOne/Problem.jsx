import React,{useEffect} from 'react'
import "./Problem.scss";
import { useScrollAnimation } from '../../Helper';
import { HiArrowsRightLeft } from "react-icons/hi2";
import { SlBasket } from "react-icons/sl";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaTools } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { MdOutlineReportProblem } from "react-icons/md";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Problem = () => {

   const IconSize = 30;

    useScrollAnimation({
    trigger: ".problem_statement",
    start: "top 100%",
    end: "bottom 100%",
    scrub: true,
    toggleActions: "restart none none none",
    animations: [
      { selector: ".problem_subheadline", from: { opacity: 0, y: "200px" }, to: { opacity: 1, y: 0 } },
      { selector: ".problem_list_one", from: { opacity: 0 }, to: { opacity: 1 } },
      { selector: ".problem_list_two", from: { opacity: 0 }, to: { opacity: 1 } },
      { selector: ".why_solution", from: { opacity: 0, y:200 }, to: { opacity: 1, y:0 } },
      { selector: ".why_list_one_span", from: { opacity: 0, y:-10 }, to: { opacity: 1, y:0 } },
      { selector: ".why_list_one", from: { opacity: 0, y:-10 }, to: { opacity: 1, y:0 } },


    ],
  });

  useEffect(() => {
  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);

  return (
    <div className='page_one'>
            <div className='problem_statement'>
                <div className="problem_statement_content">
                <h2 className='problem_headline'>  The problem to achieve ROI</h2>
                <p className='problem_subheadline'>FinTech solutions tend to fall in 2 Categories</p>
                <ul className='problem_list'>
                  <div className="problem_list_group_one">
                    <li className='problem_list_one'> <GiTakeMyMoney size={IconSize + 5} />
High upfront investment <br/> + <br/> near zero maintenance <FaTools size={IconSize} /></li>
                  </div>
                  <div className="problem_list_group_two">
                    <li className='problem_list_two'> <GiReceiveMoney size={IconSize} /> Maintained investment <br/> + <br/>serving a narrow cohort of users <FaUsers size={IconSize} /></li>
                </div>

                </ul>
                </div>
            </div>
            {/* <div className="svg">
                <HiArrowsRightLeft size={IconSize  + 20} />
            </div> */}
            <div className="whyfintekkers">
                  <h2 className='why_title'>Why is “FinTekkers” the solution?</h2>
                  <FaArrowDownLong size={IconSize} />
                  <p className='why_solution'>FinTekkers focuses on essential infrastructure for FinTech systems<br/> delivering key value to the sector</p>
                  <FaArrowDownLong size={IconSize} />
                  <ul className='why_list_container'>    
                      <li className='why_list_one'> Fast prototyping of end-user products
                      </li>
                  </ul>
                  <span className="svganim">
                  <IoIosCheckmarkCircleOutline size={IconSize} />
                  </span>
            </div>
    </div>
  )
}

export default Problem